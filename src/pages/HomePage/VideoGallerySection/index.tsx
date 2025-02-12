import { VideoGallery } from 'components';
import { useGettingWindowWidth } from 'hooks/gettingWindowWidth';

import CircleBg from 'components/VideoGallery/img/video-gallery/circle-bg.svg';
import TriangleBg from 'components/VideoGallery/img/video-gallery/triangle-pink-bg.svg';

import styles from './VideoGallerySection.module.css';

export const VideoGallerySection = () => {
  const windowWidth = useGettingWindowWidth();

  return (
    <section className={styles.videoGallerySection}>
      <div
        className={styles.videoGalleryInner}
        style={{
          background: `url(${CircleBg}) no-repeat 25% ${windowWidth < 1025 ? '230px' : '350px'}, url(${TriangleBg}) no-repeat 75% 26%`,
        }}
      >
        <div className='container'>
          <h2 className={styles.videoGallerySectionTitle}>Видеогалерея нашего сада</h2>
          <p className={styles.videoGallerySectionText}>
            Вы можете ознакомиться как проходят наши будни
          </p>
          <VideoGallery />
        </div>
      </div>
    </section>
  );
};
