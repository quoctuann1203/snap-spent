/* eslint-disable max-lines-per-function */
import { useForm } from '@tanstack/react-form';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as z from 'zod';

import { LinearGradient } from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox';
import { getFieldError } from '@/components/ui/form-utils';
import { colors } from '@/lib/theme/tokens';

import { AuthDivider } from './shared/auth-divider';
import { AuthFooter } from './shared/auth-footer';
import { AuthHeader } from './shared/auth-header';
import { FormField } from './shared/form-field';
import { SocialButtons } from './shared/social-buttons';

const schema = z.object({
  name: z
    .string({
      message: 'validation.nameRequired',
    })
    .min(1, 'validation.nameRequired'),
  email: z
    .string({
      message: 'validation.emailRequired',
    })
    .min(1, 'validation.emailRequired')
    .email('validation.emailInvalid'),
  password: z
    .string({
      message: 'validation.passwordRequired',
    })
    .min(1, 'validation.passwordRequired')
    .min(6, 'validation.passwordMin'),
});

export type RegisterFormType = z.infer<typeof schema>;

export type RegisterFormProps = {
  onSubmit?: (data: RegisterFormType) => void;
};

export function RegisterForm({ onSubmit = () => {} }: RegisterFormProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { t } = useTranslation();
  const [rememberMe, setRememberMe] = useState(true);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    validators: {
      onChange: schema as any,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  return (
    <LinearGradient
      colors={[colors.neutral[900], colors.accentRamp[900]]}
      className="size-full flex-1"
    >
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: Math.max(insets.top + 12, 48),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <AuthHeader
            title={t('auth.register.title')}
            linkText={t('auth.register.hasAccount')}
            linkLabel={t('auth.register.loginLink')}
            onLinkPress={() => router.back()}
          />

          {/* Form Section */}
          <View
            className="flex-1 rounded-t-3xl bg-app-bg/60 px-7 pt-7"
            style={{ paddingBottom: Math.max(insets.bottom + 16, 32) }}
          >
            {/* Name Field */}
            <form.Field
              name="name"
              children={field => (
                <FormField
                  testID="name-input"
                  label={t('form.name')}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChangeText={field.handleChange}
                  placeholder={t('form.namePlaceholder')}
                  autoCapitalize="words"
                  error={getFieldError(field) ? t(getFieldError(field) as string) : undefined}
                />
              )}
            />

            {/* Email Field */}
            <form.Field
              name="email"
              children={field => (
                <FormField
                  testID="email-input"
                  label={t('form.email')}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChangeText={field.handleChange}
                  placeholder={t('form.emailPlaceholder')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={getFieldError(field) ? t(getFieldError(field) as string) : undefined}
                />
              )}
            />

            {/* Password Field */}
            <form.Field
              name="password"
              children={field => (
                <FormField
                  testID="password-input"
                  label={t('form.password')}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChangeText={field.handleChange}
                  placeholder={t('form.passwordPlaceholder')}
                  isPassword
                  error={getFieldError(field) ? t(getFieldError(field) as string) : undefined}
                />
              )}
            />

            {/* Remember me */}
            <View className="mb-6">
              <Checkbox
                checked={rememberMe}
                onChange={setRememberMe}
                label={t('form.rememberMe')}
                labelClasses="text-sm text-nocturne-400"
                accessibilityLabel={t('form.rememberMe')}
                testID="remember-me"
              />
            </View>

            {/* Register Button - Filled accent for strong visual hierarchy */}
            <form.Subscribe
              selector={state => [state.isSubmitting]}
              children={([isSubmitting]) => (
                <Pressable
                  testID="register-button"
                  onPress={form.handleSubmit}
                  disabled={isSubmitting}
                  className={`mb-6 items-center justify-center rounded-[14px] bg-accent py-3.5 ${
                    isSubmitting ? 'opacity-60' : ''
                  }`}
                  style={({ pressed }) => ({
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                  })}
                >
                  <Text
                    testID="register-button-label"
                    className="text-base font-semibold text-app-bg"
                  >
                    {t('auth.register.button')}
                  </Text>
                </Pressable>
              )}
            />

            <AuthDivider />
            <SocialButtons />

            {/* Spacer to push footer down */}
            <View className="flex-1" />

            <AuthFooter />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
