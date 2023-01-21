import { useForm } from 'react-hook-form';
import css from "./Register.module.css"

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name }) => {
    console.log(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h1>Форма регистрации</h1>

        <input placeholder='name' {...register('name')} />

        <input placeholder='email' {...register('email', { required: true })} />

        <input placeholder='password' {...register('password', { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" className={ css.button} />
      </form>
    </>
  );
};
