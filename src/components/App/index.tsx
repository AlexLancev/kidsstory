import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout';
import { HomePage } from '../HomePage';
// import styles from './App.module.scss';

export const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path={`${paths.home}`} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path={`${paths.blogId}`}
              element={<BlogPagePresentation />}
            />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};
