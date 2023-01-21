import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};
