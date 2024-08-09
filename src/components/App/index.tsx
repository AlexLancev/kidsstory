import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from 'components/HomePage';
import { Layout } from 'components/Layout';

import { paths } from '../../paths';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
