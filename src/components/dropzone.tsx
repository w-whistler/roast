'use client';

import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import styles from './dropzone.module.css';
import { cn } from '../lib/utils';

type DropzoneProps = {
  className?: string;
  onDropFile: (files: File[]) => void;
};

export default function Dropzone({ className, onDropFile }: DropzoneProps) {
  const { isDragAccept, isDragReject, getRootProps } = useDropzone({
    noClick: true,
    accept: {
      'application/json': ['.json'],
      // 'application/zip': ['.zip'], TODO: For now only JSON file is acceptable in test mode
    },
    onDrop: onDropFile,
  });

  return (
    <div
      {...getRootProps({
        className: cn(
          styles.root,
          className,
          'flex h-[230px] w-full items-center justify-center rounded-[46px]',
          isDragAccept
            ? styles.fileAccepted
            : isDragReject
              ? styles.fileRejected
              : '',
        ),
      })}
    >
      <Image
        src="/images/landing-page/download-icon.svg"
        alt="Download Icon"
        width={100}
        height={75}
      />
    </div>
  );
}
