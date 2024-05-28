'use client';

import { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import { cn } from '../lib/utils';
import { Badge, Button, Dropzone } from '../components';
import { readFileAsJson } from '../lib/json';
import { ActivitiesContext } from '../contexts/activitiesContext';
import { Activities } from '../models/activities.model';

export default function Home() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File>();
  const { onChangeActivities } = useContext(ActivitiesContext);
  const [isUploading, setIsUploading] = useState(false);

  const handleDropFile = useCallback((files: File[]) => {
    setSelectedFile(files[0]);
  }, []);

  const handleUploadFile = useCallback(async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    const parsedJson = await readFileAsJson(selectedFile);

    onChangeActivities(parsedJson as Activities);

    // Simulate API call and navigate to activities to view details
    setTimeout(() => {
      router.push('/activities');
    }, 3000);
  }, [onChangeActivities, router, selectedFile]);

  if (isUploading) {
    return (
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <Image
          src="/images/landing-page/loading-heart.png"
          alt="Loading"
          width={242}
          height={320}
        />
        <h1 className="mt-12px text-center text-4xl">
          Uploading your
          <br />
          data..
        </h1>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col">
      <h1 className="mt-[75px] text-center text-4xl">Upload your data</h1>
      <div
        className={cn(
          'mx-[-30px] mt-[75px] flex-1 rounded-t-[42px] px-[24px] pb-[50px] pt-[32px]',
          styles.dropZone,
        )}
      >
        <div className="text-center">
          Drag and Drop your{' '}
          <Badge className="h-[28px] bg-[#0085B2] leading-[28px]">
            data.json
          </Badge>{' '}
          or
          <br />
          <Badge className="h-[28px] bg-[#0085B2] leading-[28px]">
            myData.zip
          </Badge>{' '}
          file here
        </div>
        <Dropzone className="mt-[30px]" onDropFile={handleDropFile} />
        {selectedFile && (
          <Button
            className="mt-[24px] min-h-[72px] w-full rounded-[30px]"
            onClick={handleUploadFile}
          >
            Upload {selectedFile.name}
          </Button>
        )}
      </div>
    </div>
  );
}
