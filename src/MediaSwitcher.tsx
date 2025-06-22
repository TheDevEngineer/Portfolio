import { useEffect, useRef } from 'react';

interface Props {
  imageLink: string;
  imageAlt: string;
  videoLink: string;
}

function MediaSwitcher({ imageLink, imageAlt, videoLink }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    videoRef.current.addEventListener('loadeddata', (_) => {
      if (!videoRef.current || !imageRef.current) {
        return;
      }
      videoRef.current.style.display = 'block';
      imageRef.current.style.display = 'none';
    });
  });

  return (
    <div className='video-container'>
      <img
        className='project-video'
        src={imageLink}
        alt={imageAlt}
        ref={imageRef}
      />
      <video
        className='project-video'
        controls
        src={videoLink}
        style={{ display: 'none' }}
        ref={videoRef}
      ></video>
    </div>
  );
}

export default MediaSwitcher;
