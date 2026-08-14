import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

const RECURRING_ITEMS = [
  {
    id: 'rec-1',
    title: 'Tiền thuê căn hộ',
    amount: '6.500.000đ',
    cycle: 'Hàng tháng (ngày 05)',
    icon: '🏠',
    status: 'Tự động nhắc',
  },
  {
    id: 'rec-2',
    title: 'Netflix Premium 4K',
    amount: '260.000đ',
    cycle: 'Hàng tháng (ngày 18)',
    icon: '🎬',
    status: 'Đã thanh toán',
  },
  {
    id: 'rec-3',
    title: 'Spotify Family',
    amount: '89.000đ',
    cycle: 'Hàng tháng (ngày 22)',
    icon: '🎵',
    status: 'Đã thanh toán',
  },
  {
    id: 'rec-4',
    title: 'Gói tập Gym California',
    amount: '800.000đ',
    cycle: 'Hàng tháng (ngày 01)',
    icon: '🏋️',
    status: 'Tự động nhắc',
  },
];

export function RecurringScreen() {
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
              Chi Tiêu Định Kỳ
            </Text>
            <View className="w-16" />
          </View>

          {/* Monthly Total Recurring */}
          <View className="rounded-3xl bg-neutral-900 p-6 text-white dark:bg-neutral-800">
            <Text className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Tổng chi cố định mỗi tháng
            </Text>
            <Text className="my-1.5 text-3xl font-extrabold text-white">
              7.649.000đ
            </Text>
            <Text className="text-xs text-neutral-400">
              4 dịch vụ / hoá đơn định kỳ hoạt động
            </Text>
          </View>

          {/* List */}
          <View className="mt-6 gap-3">
            {RECURRING_ITEMS.map(item => (
              <View
                key={item.id}
                className="flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800"
              >
                <View className="flex-row items-center gap-3">
                  <View className="size-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                    <Text className="text-xl">{item.icon}</Text>
                  </View>
                  <View>
                    <Text className="font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </Text>
                    <Text className="text-xs text-neutral-500">
                      {item.cycle}
                    </Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="font-bold text-neutral-900 dark:text-white">
                    {item.amount}
                  </Text>
                  <Text className="text-[10px] font-semibold text-primary-500">
                    {item.status}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View className="mt-6">
            <Button label="+ Thêm khoản chi định kỳ" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
