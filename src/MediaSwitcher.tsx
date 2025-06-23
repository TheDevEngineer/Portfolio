import { useEffect, useRef, useState } from 'react';

interface Props {
  imageLink: string;
  imageAlt: string;
  videoLink?: string;
}

function MediaSwitcher({ imageLink, imageAlt, videoLink }: Props) {
  const [successfulVideoLoad, setSuccessfulVideoLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const hasReloadedVideo = useRef<boolean>(false);

  useEffect(() => {
    if (!videoLink) {
      // If there is no video link don't swap just display an image
      return;
    }

    const handleVideoSwap = function () {
      if (videoRef.current && imageRef.current) {
        videoRef.current.style.display = 'block';
        imageRef.current.style.display = 'none';
        setSuccessfulVideoLoad(true);
      }
    };

    const handleError = function () {
      if (videoRef.current) {
        if (!hasReloadedVideo.current) {
          hasReloadedVideo.current = true;
          videoRef.current.load(); // Try re-load
        } // Else, failed 2nd time so just display image
      }
    };

    if (!videoRef.current) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', handleVideoSwap);
    videoRef.current.addEventListener('error', handleError);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', handleVideoSwap);
        videoRef.current.removeEventListener('error', handleError);
      }
    };
  }, []);

  return (
    <div className='video-container'>
      {!successfulVideoLoad && (
        <img
          className='project-image'
          src={imageLink}
          alt={imageAlt}
          ref={imageRef}
          style={{ margin: 'fill' }}
        />
      )}
      {videoLink && (
        <video
          className='project-video'
          controls
          src={videoLink}
          style={{ display: 'none' }}
          ref={videoRef}
        ></video>
      )}
    </div>
  );
}

export default MediaSwitcher;
