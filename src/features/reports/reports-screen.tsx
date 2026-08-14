import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  ProgressBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

const SPENDING_BREAKDOWN = [
  { category: 'Ăn uống', amount: '1.850.000đ', percent: 54, color: 'bg-orange-500', icon: '🍜' },
  { category: 'Mua sắm', amount: '920.000đ', percent: 27, color: 'bg-blue-500', icon: '🛍️' },
  { category: 'Di chuyển', amount: '380.000đ', percent: 11, color: 'bg-emerald-500', icon: '🛵' },
  { category: 'Giải trí', amount: '300.000đ', percent: 8, color: 'bg-purple-500', icon: '🎬' },
];

export function ReportsScreen() {
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
              Báo Cáo & Phân Tích
            </Text>
            <View className="w-16" />
          </View>

          {/* Month Summary */}
          <View className="rounded-3xl bg-neutral-900 p-6 text-white dark:bg-neutral-800">
            <Text className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Tổng chi tiêu Tháng 8/2026
            </Text>
            <Text className="my-1.5 text-3xl font-extrabold text-white">
              3.450.000đ
            </Text>
            <Text className="text-xs font-medium text-emerald-400">
              ↓ Giảm 12% so với cùng kỳ tháng trước (tiết kiệm hơn 450.000đ)
            </Text>
          </View>

          {/* AI Insight Box */}
          <View className="mt-4 rounded-2xl border border-primary-200 bg-primary-50 p-4 dark:border-primary-900 dark:bg-neutral-800">
            <Text className="text-sm font-bold text-primary-900 dark:text-primary-200">
              💡 AI Financial Insights
            </Text>
            <Text className="mt-1 text-xs/relaxed text-primary-800 dark:text-primary-300">
              Bạn đang chi tiêu nhiều nhất vào giờ ăn trưa các ngày trong tuần. Nếu tự chuẩn bị đồ ăn 2 bữa/tuần, bạn có thể tiết kiệm thêm ~400.000đ/tháng!
            </Text>
          </View>

          {/* Breakdown Section */}
          <Text className="mt-6 mb-3 text-base font-bold text-neutral-900 dark:text-white">
            Tỷ lệ phân bổ chi tiêu
          </Text>

          <View className="gap-3">
            {SPENDING_BREAKDOWN.map(item => (
              <View
                key={item.category}
                className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800"
              >
                <View className="mb-2 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2.5">
                    <Text className="text-xl">{item.icon}</Text>
                    <Text className="font-bold text-neutral-900 dark:text-white">
                      {item.category}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-sm font-bold text-neutral-900 dark:text-white">
                      {item.amount}
                    </Text>
                    <Text className="text-xs text-neutral-400">
                      (
                      {item.percent}
                      %)
                    </Text>
                  </View>
                </View>
                <ProgressBar initialProgress={item.percent} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
