import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

export function TransactionDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

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
            <Text className="text-sm font-bold text-neutral-900 dark:text-white">
              Chi Tiết Giao Dịch
            </Text>
            <View className="w-16" />
          </View>

          {/* Transaction Header Card */}
          <View className="items-center rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            <View className="mb-3 size-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-950/40">
              <Text className="text-3xl">🍜</Text>
            </View>
            <Text className="text-xl font-bold text-neutral-900 dark:text-white">
              Phở Bò Tái Nạm
            </Text>
            <Text className="my-2 text-3xl font-extrabold text-red-500">
              -55.000đ
            </Text>
            <Text className="text-xs text-neutral-400">
              Mã giao dịch:
              {' '}
              {id || 'txn-1'}
            </Text>
          </View>

          {/* Details list */}
          <View className="mt-6 gap-3.5 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <View className="flex-row justify-between">
              <Text className="text-sm text-neutral-500">Thời gian</Text>
              <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
                14/08/2026, 12:30
              </Text>
            </View>
            <View className="flex-row justify-between border-t border-neutral-100 pt-3 dark:border-neutral-700">
              <Text className="text-sm text-neutral-500">Danh mục</Text>
              <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
                Ăn uống & Cà phê
              </Text>
            </View>
            <View className="flex-row justify-between border-t border-neutral-100 pt-3 dark:border-neutral-700">
              <Text className="text-sm text-neutral-500">Calo ước tính</Text>
              <Text className="text-sm font-semibold text-emerald-600">
                520 kcal (AI Scan)
              </Text>
            </View>
            <View className="flex-row justify-between border-t border-neutral-100 pt-3 dark:border-neutral-700">
              <Text className="text-sm text-neutral-500">Ghi chú</Text>
              <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
                Ăn trưa cùng đồng nghiệp
              </Text>
            </View>
          </View>

          {/* Action buttons */}
          <View className="mt-8 gap-3">
            <Button
              label="Chỉnh sửa giao dịch"
              variant="outline"
              onPress={() => {}}
            />
            <Button
              label="🗑️ Xoá giao dịch này"
              variant="destructive"
              onPress={() => {
                router.back();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
