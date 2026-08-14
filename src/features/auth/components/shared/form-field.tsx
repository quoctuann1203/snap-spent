import type { TextInputProps } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import * as React from 'react';
import { useState } from 'react';
import {
  I18nManager,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '@/lib/theme/tokens';

type FormFieldProps = {
  label: string;
  error?: string | null;
  isPassword?: boolean;
} & TextInputProps;

export function FormField({
  label,
  error,
  isPassword = false,
  testID,
  ...inputProps
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    inputProps.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    inputProps.onBlur?.(e);
  };

  const borderClass = isFocused
    ? 'border-accent'
    : error
      ? 'border-danger-400'
      : 'border-nocturne-700';

  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm text-nocturne-400">{label}</Text>
      <View className="relative">
        <TextInput
          testID={testID}
          {...inputProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor={inputProps.placeholderTextColor ?? colors.neutral[600]}
          className={`rounded-xl border-[0.5px] ${borderClass} bg-nocturne-800 px-4 py-3.5 text-[15px] text-app-text ${
            isPassword ? 'pr-12' : ''
          }`}
          style={[
            {
              writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
              textAlign: I18nManager.isRTL ? 'right' : 'left',
            },
            inputProps.style,
          ]}
        />
        {isPassword
          ? (
              <Pressable
                onPress={() => setShowPassword(v => !v)}
                hitSlop={8}
                className="absolute top-0 right-0 bottom-0 items-center justify-center px-4"
                accessibilityLabel={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                testID={testID ? `${testID}-toggle-visibility` : undefined}
              >
                {showPassword
                  ? (
                      <EyeOff size={18} color={colors.neutral[500]} />
                    )
                  : (
                      <Eye size={18} color={colors.neutral[500]} />
                    )}
              </Pressable>
            )
          : null}
      </View>
      {error
        ? (
            <Text className="mt-1 text-xs text-danger-400">
              {error}
            </Text>
          )
        : null}
    </View>
  );
}
