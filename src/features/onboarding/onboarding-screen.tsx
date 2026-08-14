import { useRouter } from 'expo-router';
import { Camera, Grid2x2, Sparkles } from 'lucide-react-native';
import * as React from 'react';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { FocusAwareStatusBar, LinearGradient } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { useIsFirstTime } from '@/lib/hooks';
import { colors } from '@/lib/theme/tokens';

const SLIDES = [
  {
    Icon: Camera,
    accent: colors.accent,
    title: 'Chụp là xong sổ chi tiêu',
    subtitle:
      'Chụp hoá đơn, ảnh chuyển khoản — SnapSpent tự đọc số tiền, cửa hàng và thời gian bằng AI.',
  },
  {
    Icon: Grid2x2,
    accent: colors.accent2,
    title: 'Nhật ký hình ảnh mỗi ngày',
    subtitle:
      'Lịch phủ đầy ảnh món ăn, hoá đơn thật — lướt xem chi tiêu như xem story.',
  },
  {
    Icon: Sparkles,
    accent: colors.accent,
    title: 'Chi tiêu vui, không khô khan',
    subtitle:
      'Linh vật đồng hành, ngân sách rõ ràng, và thẻ Flex Story để khoe tháng chi tiêu của bạn.',
  },
] as const;

export function OnboardingScreen() {
  const router = useRouter();
  const [_, setIsFirstTime] = useIsFirstTime();
  const [index, setIndex] = useState(0);
  const isLast = index === SLIDES.length - 1;
  const slide = SLIDES[index];

  function finishOnboarding() {
    setIsFirstTime(false);
    router.replace('/(auth)/login');
  }

  function next() {
    if (isLast) {
      finishOnboarding();
    }
    else {
      setIndex(i => i + 1);
    }
  }

  return (
    <LinearGradient
      colors={[colors.neutral[900], colors.accentRamp[900]]}
      className="flex-1 px-7 pt-16 pb-10"
    >
      <FocusAwareStatusBar />
      <View className="flex-1 items-center justify-center gap-5">
        <View
          className="size-24 items-center justify-center rounded-[28px]"
          style={{ backgroundColor: slide.accent }}
        >
          <slide.Icon size={44} color={colors.bg} />
        </View>
        <Text className="mt-2 text-center text-[26px] font-extrabold text-white">
          {slide.title}
        </Text>
        <Text className="max-w-[280px] text-center text-[15px]/6 text-white/70">
          {slide.subtitle}
        </Text>
      </View>

      <View className="mb-7 flex-row justify-center gap-2">
        {SLIDES.map((item, i) => (
          <View
            key={item.title}
            className="h-2 rounded-full"
            style={{
              width: i === index ? 24 : 8,
              backgroundColor:
                i === index ? colors.accent : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </View>

      <View className="gap-3">
        <Button label={isLast ? 'Bắt đầu' : 'Tiếp tục'} onPress={next} />
        {!isLast
          ? (
              <Pressable
                onPress={finishOnboarding}
                className="items-center p-2"
              >
                <Text className="text-sm font-bold text-white/60">Bỏ qua</Text>
              </Pressable>
            )
          : null}
      </View>
    </LinearGradient>
  );
}
