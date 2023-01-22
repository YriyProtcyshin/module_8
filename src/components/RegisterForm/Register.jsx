import { useForm } from 'react-hook-form';
import css from './Register.module.css';
import { registerUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, email, password }) => {
    console.log(name);
    dispatch(registerUser({ name: name, email: email, password: password }));
  };
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h1>Форма регистрации</h1>

        <input placeholder="name" {...register('name')} />

        <input placeholder="email" {...register('email', { required: true })} />

        <input
          placeholder="password"
          {...register('password', { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" className={css.button} />
      </form>
    </>
  );
};
