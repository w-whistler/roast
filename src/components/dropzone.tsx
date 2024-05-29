'use client';

import { useDropzone } from 'react-dropzone';
import styles from './dropzone.module.css';
import { cn } from '../lib/utils';

type DropzoneProps = {
  className?: string;
  onDropFile: (files: File[]) => void;
};

export default function Dropzone({ className, onDropFile }: DropzoneProps) {
  const { isDragAccept, isDragReject, getRootProps } = useDropzone({
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
          'h-[230px] w-full rounded-[46px]',
          isDragAccept
            ? styles.fileAccepted
            : isDragReject
              ? styles.fileRejected
              : '',
        ),
      })}
    />
  );
}
