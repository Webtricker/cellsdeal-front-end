import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RegisterForm from './components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className='bg-background section-speacing grid place-items-center p-4'>
      <Card className='w-full max-w-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl'>Create an Account</CardTitle>
          <CardDescription>Sign up to get started with our platform</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Registration Form */}
          <RegisterForm />
          <p className='text-muted-foreground mt-4 text-center text-sm'>
            Already have an account?{' '}
            <a href='/login' className='text-primary hover:underline'>
              Sign in
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
