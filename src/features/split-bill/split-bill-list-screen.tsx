import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Pressable,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

const PAST_BILLS = [
  {
    id: 'sb-1',
    title: 'Ăn lẩu Haidilao',
    date: '14/08/2026',
    total: '1.200.000đ',
    people: 4,
    status: 'Đang chờ (2/4 đã trả)',
    isSettled: false,
  },
  {
    id: 'sb-2',
    title: 'Cà phê cuối tuần',
    date: '10/08/2026',
    total: '240.000đ',
    people: 3,
    status: 'Đã hoàn tất',
    isSettled: true,
  },
  {
    id: 'sb-3',
    title: 'Tiền xem phim CGV',
    date: '02/08/2026',
    total: '450.000đ',
    people: 3,
    status: 'Đã hoàn tất',
    isSettled: true,
  },
];

export function SplitBillListScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-6 flex-row items-center justify-between">
            <Button
              label="← Quay lại"
              size="sm"
              variant="outline"
              onPress={() => router.back()}
            />
            <Text className="text-xl font-bold text-neutral-900 dark:text-white">
              Lịch Sử Chia Bill
            </Text>
            <View className="w-16" />
          </View>

          <View className="gap-3">
            {PAST_BILLS.map(bill => (
              <Pressable
                key={bill.id}
                onPress={() => router.push('/split-bill/summary')}
                className="rounded-2xl border border-neutral-200 bg-white p-4 active:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800"
              >
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-base font-bold text-neutral-900 dark:text-white">
                      {bill.title}
                    </Text>
                    <Text className="mt-0.5 text-xs text-neutral-500">
                      {bill.date}
                      {' '}
                      •
                      {bill.people}
                      {' '}
                      người
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="font-bold text-neutral-900 dark:text-white">
                      {bill.total}
                    </Text>
                    <Text
                      className={`mt-0.5 text-xs font-semibold ${
                        bill.isSettled ? 'text-emerald-500' : 'text-amber-500'
                      }`}
                    >
                      {bill.status}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          <View className="mt-6">
            <Button
              label="+ Tạo buổi chia bill mới"
              onPress={() => router.push('/split-bill')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
