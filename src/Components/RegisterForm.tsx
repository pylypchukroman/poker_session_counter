import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/Components/ui/field';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { FormEvent } from 'react';
import { useRegisterMutation } from '@/Hooks/useRegisterMutation';

export const RegisterForm = () => {
  const register = useRegisterMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    register.mutate(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-neutral-800">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Register your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Roman"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </Field>
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
