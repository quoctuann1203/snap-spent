import type { RegisterFormProps } from './components/register-form';
import { useRouter } from 'expo-router';

import * as React from 'react';
import { FocusAwareStatusBar } from '@/components/ui';
import { RegisterForm } from './components/register-form';

export function RegisterScreen() {
  const router = useRouter();

  const onSubmit: RegisterFormProps['onSubmit'] = (data) => {
    console.log('Register:', data);
    // TODO: Implement actual registration
    router.back();
  };

  return (
    <>
      <FocusAwareStatusBar />
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
}
