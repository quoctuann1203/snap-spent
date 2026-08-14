import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Input,
  ProgressBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

export function GoalDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [depositAmount, setDepositAmount] = React.useState('');

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
            <Text className="text-xs font-semibold text-neutral-500">
              ID:
              {' '}
              {id || 'goal-detail'}
            </Text>
          </View>

          {/* Goal Header Card */}
          <View className="rounded-3xl bg-neutral-900 p-6 dark:bg-neutral-800">
            <View className="mb-3 size-12 items-center justify-center rounded-2xl bg-neutral-800">
              <Text className="text-2xl">🎯</Text>
            </View>
            <Text className="text-2xl font-extrabold text-white">
              Đổi Macbook Pro M4
            </Text>
            <Text className="mt-1 text-sm text-neutral-400">
              Mục tiêu dự kiến: Tháng 12/2026
            </Text>

            <View className="my-4">
              <View className="mb-2 flex-row justify-between">
                <Text className="text-xs text-neutral-400">Đã tích luỹ: 25.000.000đ</Text>
                <Text className="text-xs font-bold text-emerald-400">55% / 45.000.000đ</Text>
              </View>
              <ProgressBar initialProgress={55} />
            </View>

            <Text className="text-xs text-neutral-400">
              Còn thiếu:
              {' '}
              <Text className="font-bold text-white">20.000.000đ</Text>
            </Text>
          </View>

          {/* Quick Deposit Section */}
          <View className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <Text className="mb-2 text-base font-bold text-neutral-900 dark:text-white">
              Nạp thêm tiền vào hũ
            </Text>
            <Input
              label="Số tiền nạp (VNĐ)"
              placeholder="VD: 500.000"
              keyboardType="numeric"
              value={depositAmount}
              onChangeText={setDepositAmount}
            />
            <View className="mt-4">
              <Button
                label="Chuyển tiền vào hũ này"
                onPress={() => {
                  setDepositAmount('');
                }}
              />
            </View>
          </View>

          {/* Deposit History */}
          <Text className="mt-6 mb-3 text-base font-bold text-neutral-900 dark:text-white">
            Lịch sử nạp tiền gần nhất
          </Text>
          <View className="gap-2.5">
            <View className="flex-row items-center justify-between rounded-xl border border-neutral-200 bg-white p-3.5 dark:border-neutral-800 dark:bg-neutral-800">
              <View>
                <Text className="font-semibold text-neutral-900 dark:text-white">
                  Nạp tiền lương tháng 7
                </Text>
                <Text className="text-xs text-neutral-500">01/08/2026</Text>
              </View>
              <Text className="font-bold text-emerald-600">+3.000.000đ</Text>
            </View>

            <View className="flex-row items-center justify-between rounded-xl border border-neutral-200 bg-white p-3.5 dark:border-neutral-800 dark:bg-neutral-800">
              <View>
                <Text className="font-semibold text-neutral-900 dark:text-white">
                  Tiết kiệm chi tiêu cà phê
                </Text>
                <Text className="text-xs text-neutral-500">25/07/2026</Text>
              </View>
              <Text className="font-bold text-emerald-600">+500.000đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
