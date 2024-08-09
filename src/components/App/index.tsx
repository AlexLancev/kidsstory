import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { HomePage } from 'pages/HomePage';

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
