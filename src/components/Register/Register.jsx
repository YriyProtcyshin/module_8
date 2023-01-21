import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ example }) => {
    console.log(example);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Форма регистрации</h1>

        <input defaultValue="test" {...register('example')} />

        <input {...register('exampleRequired', { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};
