import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  FocusAwareStatusBar,
  Pressable,
  Text,
  View,
} from '@/components/ui';

export function ScanScreen() {
  const router = useRouter();
  const [mode, setMode] = React.useState<'food' | 'bill'>('food');

  return (
    <>
      <FocusAwareStatusBar />
      <View className="flex-1 bg-black">
        {/* Top Camera Controls */}
        <View className="flex-row items-center justify-between px-5 pt-14 pb-4">
          <Pressable
            onPress={() => router.back()}
            className="size-10 items-center justify-center rounded-full bg-neutral-800/80"
          >
            <Text className="text-lg font-bold text-white">✕</Text>
          </Pressable>

          <View className="flex-row rounded-full bg-neutral-800/90 p-1">
            <Pressable
              onPress={() => setMode('food')}
              className={`rounded-full px-4 py-1.5 ${
                mode === 'food' ? 'bg-primary-500' : 'bg-transparent'
              }`}
            >
              <Text className="text-xs font-bold text-white">Món Ăn</Text>
            </Pressable>
            <Pressable
              onPress={() => setMode('bill')}
              className={`rounded-full px-4 py-1.5 ${
                mode === 'bill' ? 'bg-primary-500' : 'bg-transparent'
              }`}
            >
              <Text className="text-xs font-bold text-white">Hoá Đơn</Text>
            </Pressable>
          </View>

          <View className="size-10" />
        </View>

        {/* Viewfinder Preview Area */}
        <View className="flex-1 items-center justify-center px-6">
          <View className="h-72 w-full items-center justify-center rounded-3xl border-2 border-dashed border-neutral-600 bg-neutral-900/60 p-6">
            <Text className="mb-3 text-5xl">
              {mode === 'food' ? '🍜' : '🧾'}
            </Text>
            <Text className="text-center text-sm font-semibold text-white">
              {mode === 'food'
                ? 'Hướng camera vào món ăn để AI nhận diện món & calo'
                : 'Căn chỉnh hoá đơn vào khung hình để OCR trích xuất'}
            </Text>
            <Text className="mt-2 text-center text-xs text-neutral-400">
              Giữ camera ổn định và đủ ánh sáng
            </Text>
          </View>
        </View>

        {/* Bottom Shutter Action */}
        <View className="items-center pt-6 pb-12">
          <Pressable
            onPress={() => {
              if (mode === 'food') {
                router.push('/confirm-food');
              }
              else {
                router.push('/confirm-bill');
              }
            }}
            className="size-20 items-center justify-center rounded-full border-4 border-white bg-primary-500 active:scale-95"
          >
            <View className="size-14 rounded-full bg-white/20" />
          </Pressable>
          <Text className="mt-3 text-xs text-neutral-400">
            Chạm để chụp & nhận diện
          </Text>
        </View>
      </View>
    </>
  );
}
