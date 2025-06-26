import { useState } from 'react';

interface Props {
  videoIFrameLink: string;
}

function LazyYoutube({ videoIFrameLink }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoThumbnailLink: string = `https://img.youtube.com/vi/${videoIFrameLink}/hqdefault.jpg`;
  const finalVideoLink: string = `https://www.youtube-nocookie.com/embed/${videoIFrameLink}?autoplay=1`;

  return (
    <>
      {!isPlaying ? (
        <img
          className='video-thumbnail'
          src={videoThumbnailLink}
          alt='YouTube video thumbnail'
          onClick={() => setIsPlaying(true)}
        />
      ) : (
        <iframe
          className='project-video'
          src={finalVideoLink}
          title='YouTube video player'
          referrerPolicy='strict-origin-when-cross-origin'
          allow='encrypted-media; autoplay'
          allowFullScreen
          loading='lazy'
        />
      )}
    </>
  );
}

export default LazyYoutube;
