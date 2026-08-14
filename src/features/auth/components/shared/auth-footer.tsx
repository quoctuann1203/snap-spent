import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export function AuthFooter() {
  const { t } = useTranslation();

  return (
    <View className="items-center pb-2">
      <Text className="text-center text-xs leading-[18px] text-nocturne-500">
        {t('footer.prefix')}
        <Text className="font-bold text-nocturne-300">
          {t('footer.terms')}
        </Text>
        {t('footer.and')}
      </Text>
      <Text className="text-center text-xs leading-[18px] text-nocturne-500">
        <Text className="font-bold text-nocturne-300">
          {t('footer.privacy')}
        </Text>
        {t('footer.suffix')}
      </Text>
    </View>
  );
}
