import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export function AuthDivider() {
  const { t } = useTranslation();

  return (
    <View className="mb-6 flex-row items-center">
      <View className="h-px flex-1 bg-app-divider" />
      <Text className="px-3 text-[13px] text-nocturne-500">
        {t('form.orLoginWith')}
      </Text>
      <View className="h-px flex-1 bg-app-divider" />
    </View>
  );
}
