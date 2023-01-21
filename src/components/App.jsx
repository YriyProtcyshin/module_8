import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'page/Home';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" />
        </Route>
      </Routes>
    </div>
  );
};
