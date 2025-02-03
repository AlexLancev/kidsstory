import { PhotoGalleryList, BreadCrumbs } from 'components';

import { VideoGallerySection, Advantages } from 'pages';

import styles from './GalleryPage.module.css';

export const GalleryPage = () => {
  return (
    <>
      <div className='container'>
        <BreadCrumbs />
      </div>
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
