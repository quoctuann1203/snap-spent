import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/lib/theme/tokens';

import { AppleIcon, FacebookIcon } from './social-icons';

export function SocialButtons() {
  return (
    <View className="mb-8 flex-row gap-3">
      <Pressable
        onPress={() => console.log('Apple login')}
        className="flex-1 flex-row items-center justify-center gap-2 rounded-[14px] border border-nocturne-700 py-3.5"
        accessibilityLabel="Đăng nhập bằng Apple"
        testID="social-apple-button"
      >
        <AppleIcon size={18} color={colors.text} />
        <Text className="text-[15px] font-medium text-app-text">Apple</Text>
      </Pressable>

      <Pressable
        onPress={() => console.log('Facebook login')}
        className="flex-1 flex-row items-center justify-center gap-2 rounded-[14px] border border-nocturne-700 py-3.5"
        accessibilityLabel="Đăng nhập bằng Facebook"
        testID="social-facebook-button"
      >
        <FacebookIcon size={18} color={colors.text} />
        <Text className="text-[15px] font-medium text-app-text">Facebook</Text>
      </Pressable>
    </View>
  );
}
