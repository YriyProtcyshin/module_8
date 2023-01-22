import { useForm } from 'react-hook-form';
import css from "./LoginForm.module.css"
import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';


export const LoginForm = () => {
  const dispatch = useDispatch()
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({email:email, password:password}))
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h1>Войти</h1>

        <input placeholder='email' {...register('email')} />        

        <input placeholder='password' {...register('password', { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" className={ css.button} />
      </form>
    </>
  );
}