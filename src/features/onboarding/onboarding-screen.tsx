/* eslint-disable max-lines-per-function */
import { useRouter } from 'expo-router';
import { Camera, Grid2x2, Sparkles } from 'lucide-react-native';
import { MotiView } from 'moti';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, LinearGradient } from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';
import { colors } from '@/lib/theme/tokens';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const SPRING_CONFIG = {
  damping: 20,
  stiffness: 200,
  mass: 0.8,
};

const SLIDES = [
  {
    Icon: Camera,
    accent: colors.accent,
    id: 'slide1',
  },
  {
    Icon: Grid2x2,
    accent: colors.accent2,
    id: 'slide2',
  },
  {
    Icon: Sparkles,
    accent: colors.accent,
    id: 'slide3',
  },
] as const;

function AnimatedDotIndicators({ currentIndex }: { currentIndex: number }) {
  return (
    <View className="mb-7 flex-row justify-center gap-2">
      {SLIDES.map((item, i) => (
        <MotiView
          key={item.id}
          animate={{
            width: i === currentIndex ? 24 : 8,
            backgroundColor: i === currentIndex ? colors.accent : 'rgba(255,255,255,0.25)',
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 200,
          }}
          className="h-2 rounded-full"
        />
      ))}
    </View>
  );
}

function SlideContent({
  slide,
  direction,
}: {
  slide: (typeof SLIDES)[number];
  direction: 'left' | 'right' | 'none';
}) {
  const { t } = useTranslation();
  const initialX = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return (
    <MotiView
      key={slide.id}
      from={{ opacity: 0, translateX: initialX, scale: 0.95 }}
      animate={{ opacity: 1, translateX: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 160,
      }}
      className="w-full items-center gap-5"
    >
      {/* Icon with animated glow */}
      <View className="items-center justify-center">
        <MotiView
          from={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{
            type: 'spring',
            damping: 12,
            stiffness: 100,
            delay: 100,
          }}
          className="absolute size-[200px] rounded-full"
          style={{ backgroundColor: slide.accent }}
        />
        <MotiView
          from={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{
            type: 'spring',
            damping: 12,
            stiffness: 100,
            delay: 50,
          }}
          className="absolute size-[260px] rounded-full"
          style={{ backgroundColor: slide.accent }}
        />
        <MotiView
          from={{ scale: 0.5, rotate: '-12deg' }}
          animate={{ scale: 1, rotate: '0deg' }}
          transition={{
            type: 'spring',
            damping: 14,
            stiffness: 120,
          }}
          className="size-[120px] items-center justify-center rounded-[32px]"
          style={{ backgroundColor: slide.accent }}
        >
          <slide.Icon size={52} color={colors.bg} />
        </MotiView>
      </View>

      {/* Title */}
      <MotiView
        from={{ opacity: 0, translateY: 12 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 400, delay: 150 }}
      >
        <Text className="mt-2 text-center text-[28px] leading-[36px] font-extrabold text-white">
          {t(`onboarding.${slide.id}.title`)}
        </Text>
      </MotiView>

      {/* Subtitle */}
      <MotiView
        from={{ opacity: 0, translateY: 12 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 400, delay: 250 }}
      >
        <Text className="max-w-[300px] text-center text-[15px]/6 text-white/70">
          {t(`onboarding.${slide.id}.subtitle`)}
        </Text>
      </MotiView>
    </MotiView>
  );
}

export function OnboardingScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const [_, setIsFirstTime] = useIsFirstTime();
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'none'>('none');
  const translateX = useSharedValue(0);
  const isLast = index === SLIDES.length - 1;
  const isFirst = index === 0;
  const slide = SLIDES[index];

  const finishOnboarding = useCallback(() => {
    setIsFirstTime(false);
    router.replace('/(auth)/login');
  }, [setIsFirstTime, router]);

  const goToSlide = useCallback((newIndex: number, direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIndex(newIndex);
  }, []);

  function next() {
    if (isLast) {
      finishOnboarding();
    }
    else {
      goToSlide(index + 1, 'left');
    }
  }

  const panGesture = Gesture.Pan()
    .activeOffsetX([-20, 20])
    .onUpdate((e) => {
      // Limit dragging at boundaries
      if (isFirst && e.translationX > 0) {
        translateX.value = e.translationX * 0.3; // Rubber band effect
      }
      else if (isLast && e.translationX < 0) {
        translateX.value = e.translationX * 0.3;
      }
      else {
        translateX.value = e.translationX;
      }
    })
    .onEnd((e) => {
      if (e.translationX < -SWIPE_THRESHOLD && !isLast) {
        runOnJS(goToSlide)(index + 1, 'left');
      }
      else if (e.translationX > SWIPE_THRESHOLD && !isFirst) {
        runOnJS(goToSlide)(index - 1, 'right');
      }
      translateX.value = withSpring(0, SPRING_CONFIG);
    });

  const animatedContentStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value * 0.4 },
      { scale: interpolate(Math.abs(translateX.value), [0, SCREEN_WIDTH], [1, 0.95]) },
    ],
    opacity: interpolate(Math.abs(translateX.value), [0, SCREEN_WIDTH], [1, 0.6]),
  }));

  return (
    <LinearGradient
      colors={[colors.neutral[900], colors.accentRamp[900]]}
      className="flex-1"
    >
      <View
        className="flex-1 px-7"
        style={{
          paddingTop: Math.max(insets.top + 16, 48),
          paddingBottom: Math.max(insets.bottom + 16, 32),
        }}
      >
        <FocusAwareStatusBar />

        <GestureDetector gesture={panGesture}>
          <Animated.View
            className="w-full flex-1 items-center justify-center"
            style={animatedContentStyle}
          >
            <SlideContent slide={slide} direction={slideDirection} />
          </Animated.View>
        </GestureDetector>

        <AnimatedDotIndicators currentIndex={index} />

        {/* Action buttons */}
        <View className="w-full gap-3">
          {isLast
            ? (
              /* Last slide: filled accent CTA for sense of arrival */
                <Pressable
                  onPress={next}
                  testID="onboarding-start-button"
                  className="items-center justify-center rounded-[14px] bg-accent py-4"
                  style={({ pressed }) => {
                    let currentScale = 1;
                    if (pressed) {
                      currentScale = 0.98;
                    }
                    return { transform: [{ scale: currentScale }] };
                  }}
                >
                  <Text className="text-base font-bold text-app-bg">
                    {t('onboarding.start')}
                  </Text>
                </Pressable>
              )
            : (
                <Pressable
                  onPress={next}
                  testID="onboarding-next-button"
                  className="items-center justify-center rounded-[14px] border border-accent py-4"
                  style={({ pressed }) => {
                    let currentScale = 1;
                    if (pressed) {
                      currentScale = 0.98;
                    }
                    return { transform: [{ scale: currentScale }] };
                  }}
                >
                  <Text className="text-base font-semibold text-accent">
                    {t('onboarding.next')}
                  </Text>
                </Pressable>
              )}
          {!isLast
            ? (
                <Pressable
                  onPress={finishOnboarding}
                  className="items-center px-6 py-3"
                  testID="onboarding-skip-button"
                >
                  <Text className="text-sm font-bold text-white/60">{t('onboarding.skip')}</Text>
                </Pressable>
              )
            : null}
        </View>
      </View>
    </LinearGradient>
  );
}
