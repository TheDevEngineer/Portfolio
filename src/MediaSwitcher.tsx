import { useEffect, useRef, useState } from 'react';

interface Props {
  imageLink: string;
  imageAlt: string;
  videoLink?: string;
  videoIFrameLink?: string;
}

function MediaSwitcher({
  imageLink,
  imageAlt,
  videoLink,
  videoIFrameLink,
}: Props) {
  const [successfulVideoLoad, setSuccessfulVideoLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasReloaded = useRef<boolean>(false);

  useEffect(() => {
    if (videoLink && videoRef.current) {
      const handleVideoSwap = function () {
        setSuccessfulVideoLoad(true);
      };

      const handleError = function () {
        if (!hasReloaded.current) {
          hasReloaded.current = true;
          videoRef.current?.load(); // Try re-load
        } // Else, failed 2nd time so just display image
      };

      const vid = videoRef.current;

      vid.addEventListener('loadeddata', handleVideoSwap);
      vid.addEventListener('error', handleError);

      return () => {
        vid.removeEventListener('loadeddata', handleVideoSwap);
        vid.removeEventListener('error', handleError);
      };
    }
  }, [videoLink]);

  const handleIFrameLoad = () => {
    setSuccessfulVideoLoad(true);
  };

  return (
    <div className='video-container'>
      {!successfulVideoLoad && (
        <img
          className='project-image'
          src={imageLink}
          alt={imageAlt}
          style={{
            display: successfulVideoLoad ? 'none' : 'block',
            margin: 'fill',
          }}
        />
      )}
      {videoLink && (
        <video
          className='project-video'
          controls
          src={videoLink}
          ref={videoRef}
          style={{
            display: successfulVideoLoad ? 'block' : 'none',
          }}
        ></video>
      )}
      {videoIFrameLink && (
        <iframe
          className='project-video'
          src={videoIFrameLink}
          onLoad={handleIFrameLoad}
          allowFullScreen
          style={{
            display: successfulVideoLoad ? 'block' : 'none',
          }}
        />
      )}
    </div>
  );
}

export default MediaSwitcher;
