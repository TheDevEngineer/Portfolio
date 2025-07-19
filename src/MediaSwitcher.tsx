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
  const [clickOccured, setClickOccured] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [firstTimePlaying, setFirstTimePlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const hasReloaded = useRef<boolean>(false);
  const clickTimeoutRef = useRef<number | null>(null);

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
      vid.addEventListener('play', handlePlay);
      vid.addEventListener('pause', handlePause);

      return () => {
        vid.removeEventListener('loadeddata', handleVideoSwap);
        vid.removeEventListener('error', handleError);
        vid.removeEventListener('play', handlePlay);
        vid.removeEventListener('pause', handlePause);
      };
    }
  }, [videoLink]);

  const handlePlay = () => {
    setFirstTimePlaying(false);
    setVideoPlaying(true);
  };
  const handlePause = () => {
    setVideoPlaying(false);
  };

  const handleVideoClick = function () {
    if (videoPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setVideoPlaying(!videoPlaying);

    // Not sure why this timeout is needed due to event delay?
    setClickOccured(true);

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = setTimeout(() => {
      setClickOccured(false);
    }, 500);
  };

  return (
    <div className='video-container' ref={videoContainerRef}>
      {!successfulVideoLoad && !videoIFrameLink && (
        <>
          <img
            className='project-image'
            src={imageLink}
            alt={imageAlt}
            style={{
              display: successfulVideoLoad ? 'none' : 'block',
              margin: 'fill',
            }}
          />
        </>
      )}
      {videoLink && (
        <>
          <div className='video-thumbnail'>
            <video
              className='project-video'
              src={videoLink}
              ref={videoRef}
              style={{
                display: successfulVideoLoad ? 'block' : 'none',
              }}
              onClick={handleVideoClick}
            ></video>
            <span
              className={`material-symbols-outlined video-icon-${
                videoPlaying ? 'play' : 'pause'
              } ${clickOccured || firstTimePlaying ? 'active' : ''}`}
            >
              {videoPlaying ? 'arrow_right' : 'pause'}
            </span>
          </div>
        </>
      )}
      {videoIFrameLink && <LazyYoutube videoIFrameLink={videoIFrameLink} />}
    </div>
  );
}

export default MediaSwitcher;
