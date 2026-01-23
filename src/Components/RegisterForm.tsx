import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/Components/ui/field';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { FormEvent } from 'react';
import { useRegisterMutation } from '@/Hooks/useRegisterMutation';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export const RegisterForm = () => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const register = useRegisterMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!pattern.test(data.password as string)) {
      toast.error('Password must be at least 8 characters and contain letters and numbers');
    } else {
      register.mutate(data);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-neutral-800">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">Register your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name" className="text-amber-50">Name</FieldLabel>
                <Input
                  className="text-amber-50"
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Roman"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email" className="text-amber-50">Email</FieldLabel>
                <Input
                  className="text-amber-50"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password" className="text-amber-50">Password</FieldLabel>
                </div>
                <Input
                  className="text-amber-50"
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </Field>
              <FieldDescription className="text-center">
                Already have an account? <Link
                to="/login"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Log in
              </Link>
              </FieldDescription>
              <Field>
                <Button
                  type="submit"
                >Register</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
