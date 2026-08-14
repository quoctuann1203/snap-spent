import { Camera } from 'lucide-react-native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/lib/theme/tokens';

type AuthHeaderProps = {
  title: string;
  linkText: string;
  linkLabel: string;
  onLinkPress?: () => void;
};

export function AuthHeader({ title, linkText, linkLabel, onLinkPress }: AuthHeaderProps) {
  return (
    <View className="mb-8 px-7">
      {/* App Logo */}
      <View className="mb-6 flex-row items-center gap-3">
        <View className="size-10 items-center justify-center rounded-xl bg-accent">
          <Camera size={20} color={colors.bg} />
        </View>
        <Text className="text-base font-semibold text-app-text">
          SnapSpent
        </Text>
      </View>

      {/* Title */}
      <Text className="mb-2 text-[30px] font-extrabold text-white">
        {title}
      </Text>

      {/* Link */}
      <View className="flex-row items-center gap-1">
        <Text className="text-sm text-nocturne-400">
          {linkText}
        </Text>
        <Pressable onPress={onLinkPress} hitSlop={8}>
          <Text className="text-sm font-semibold text-accent underline">
            {linkLabel}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
