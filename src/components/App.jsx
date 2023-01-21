import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'page/Home';
import { RegisterForm } from './RegisterForm/Register';
import { LoginForm } from './LoginForm/LoginForm';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path='/login' element={ <LoginForm /> } />
        </Route>
      </Routes>
    </div>
  );
};
