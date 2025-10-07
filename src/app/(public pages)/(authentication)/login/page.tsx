import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <section className='bg-background section-speacing grid place-items-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-center text-2xl font-bold'>Welcome Back</CardTitle>
          <CardDescription className='text-center'>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
}
