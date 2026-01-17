import { RegisterForm } from '@/Components/RegisterForm';

export const Register = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-neutral-800">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <RegisterForm />
      </div>
      </div>
  );
};
