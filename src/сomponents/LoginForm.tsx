import { Card, CardContent, CardHeader, CardTitle } from '@/сomponents/ui/card';
import { Button } from '@/сomponents/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/сomponents/ui/field';
import { Input } from '@/сomponents/ui/input';
import { Link } from 'react-router-dom';
import { FormEvent } from 'react';
import { useLoginMutation } from '@/Hooks/useLoginMutation';
import { toast } from 'sonner';

export const LoginForm = () => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const login = useLoginMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!pattern.test(data.password as string)) {
      toast.success('Password must be at least 8 characters and contain letters and numbers');
    } else {
      login.mutate(data);
    }
  };

    return (
      <div className="flex flex-col gap-6">
        <Card className="bg-neutral-800">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-white">Welcome back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email" className="text-amber-50">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                    className="text-amber-50"
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password" className="text-amber-50">Password</FieldLabel>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                    className="text-amber-50"
                    // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    // title="Password must be at least 8 characters and contain letters and numbers"
                  />
                </Field>
                <Field>
                  <Button type="submit">Login</Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account? <Link
                    to="/register"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Sign up
                  </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
)
}
