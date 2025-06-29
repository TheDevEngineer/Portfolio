import { useEffect, useRef, useState } from 'react';
import LazyYoutube from './LazyYoutube';

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

  return (
    <div className='video-container'>
      {!successfulVideoLoad && !videoIFrameLink && (
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
        <>
          <>
            <div className='video-thumbnail'>
              <video
                className='project-video'
                src={videoLink}
                ref={videoRef}
                style={{
                  display: successfulVideoLoad ? 'block' : 'none',
                }}
                onClick={() => {
                  console.log('a');
                  console.log(videoRef);
                  videoRef.current?.play();
                }}
              ></video>
              <span
                className='material-symbols-outlined video-play-icon'
                onClick={() => {
                  console.log('a');
                  console.log(videoRef);
                  videoRef.current?.play();
                }}
              >
                arrow_right
              </span>
            </div>
          </>
        </>
      )}
      {videoIFrameLink && <LazyYoutube videoIFrameLink={videoIFrameLink} />}
    </div>
  );
}

export default MediaSwitcher;
