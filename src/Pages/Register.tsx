import { RegisterForm } from '@/Components/RegisterForm';

export const Register = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-black">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <RegisterForm />
      </div>
      </div>
  );
};
