import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

export function SplitSummaryScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-4 flex-row items-center justify-between">
            <Button
              label="← Quay lại"
              size="sm"
              variant="outline"
              onPress={() => router.back()}
            />
            <Text className="text-xl font-bold text-neutral-900 dark:text-white">
              Tóm Tắt Chia Tiền
            </Text>
            <View className="w-16" />
          </View>

          {/* QR & Bank Account Card */}
          <View className="items-center rounded-3xl bg-neutral-900 p-6 text-center dark:bg-neutral-800">
            <Text className="mb-2 text-xs font-bold tracking-wider text-neutral-400 uppercase">
              Quét QR chuyển khoản thanh toán
            </Text>
            <View className="my-4 size-48 items-center justify-center rounded-2xl bg-white p-2">
              <Text className="mb-2 text-4xl">📱</Text>
              <Text className="text-xs font-bold text-neutral-800">VietQR Payment</Text>
              <Text className="text-[10px] text-neutral-500">300.000đ / người</Text>
            </View>
            <Text className="text-sm font-semibold text-white">
              Tổng bill: 1.200.000đ (4 người)
            </Text>
            <Text className="mt-1 text-xs text-neutral-400">
              Mỗi người cần chuyển:
              {' '}
              <Text className="font-bold text-emerald-400">300.000đ</Text>
            </Text>
          </View>

          {/* Members status */}
          <View className="mt-6 gap-3 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <Text className="text-base font-bold text-neutral-900 dark:text-white">
              Trạng thái thanh toán
            </Text>

            <View className="flex-row items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-700">
              <Text className="font-medium text-neutral-800 dark:text-neutral-200">
                Bạn (đã trả cả bill)
              </Text>
              <Text className="text-xs font-bold text-emerald-600">Đã chi</Text>
            </View>

            <View className="flex-row items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-700">
              <Text className="font-medium text-neutral-800 dark:text-neutral-200">
                An
              </Text>
              <Text className="text-xs font-bold text-emerald-600">Đã chuyển (300k)</Text>
            </View>

            <View className="flex-row items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-700">
              <Text className="font-medium text-neutral-800 dark:text-neutral-200">
                Bình
              </Text>
              <Text className="text-xs font-bold text-amber-500">Chờ chuyển (300k)</Text>
            </View>

            <View className="flex-row items-center justify-between">
              <Text className="font-medium text-neutral-800 dark:text-neutral-200">
                Chi
              </Text>
              <Text className="text-xs font-bold text-amber-500">Chờ chuyển (300k)</Text>
            </View>
          </View>

          <View className="mt-6 gap-3">
            <Button
              label="Chia sẻ link / Ảnh QR cho nhóm"
              onPress={() => {}}
            />
            <Button
              label="Về trang chủ"
              variant="outline"
              onPress={() => router.replace('/(app)')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
