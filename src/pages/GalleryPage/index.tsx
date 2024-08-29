import { PhotoGalleryList } from 'components/PhotoGalleryList';

import { VideoGallerySection } from 'pages/HomePage/VideoGallerySection';
import { Advantages } from 'pages/HomePage/Advantages';

import styles from './GalleryPage.module.css';

export const GalleryPage = () => {
  return (
    <>
      <section className={styles.galleryPage}>
        <div className='container'>
          <h1 className={styles.galleryPageTitle}></h1>
          <PhotoGalleryList />
        </div>
      </section>
      <VideoGallerySection />
      <div className='container'>
        <Advantages />
      </div>
    </>
  );
};
