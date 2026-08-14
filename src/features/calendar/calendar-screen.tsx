import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  FocusAwareStatusBar,
  Pressable,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

const DAYS = [
  { day: 'T2', date: '11', active: false, spend: '120k' },
  { day: 'T3', date: '12', active: false, spend: '45k' },
  { day: 'T4', date: '13', active: false, spend: '350k' },
  { day: 'T5', date: '14', active: true, spend: '100k' },
  { day: 'T6', date: '15', active: false, spend: '0đ' },
  { day: 'T7', date: '16', active: false, spend: '0đ' },
  { day: 'CN', date: '17', active: false, spend: '0đ' },
];

const PHOTO_LOGS = [
  {
    id: 'log-1',
    txnId: 'txn-1',
    time: '12:30',
    title: 'Phở Bò Tái Nạm',
    category: 'Ăn trưa',
    amount: '55.000đ',
    calories: '520 kcal',
    emoji: '🍜',
  },
  {
    id: 'log-2',
    txnId: 'txn-2',
    time: '08:15',
    title: 'Cà phê Highland & Bánh mì',
    category: 'Ăn sáng',
    amount: '45.000đ',
    calories: '310 kcal',
    emoji: '☕',
  },
];

export function CalendarScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
                Nhật Ký Ảnh
              </Text>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                Tháng 8, 2026
              </Text>
            </View>
            <View className="rounded-full bg-primary-100 px-3 py-1 dark:bg-primary-900/40">
              <Text className="text-xs font-semibold text-primary-600 dark:text-primary-300">
                Hôm nay: 100.000đ
              </Text>
            </View>
          </View>

          {/* Week Date Picker */}
          <View className="flex-row justify-between gap-1.5 rounded-2xl bg-white p-3 shadow-sm dark:bg-neutral-800">
            {DAYS.map(d => (
              <Pressable
                key={d.date}
                className={`flex-1 items-center rounded-xl py-2 ${
                  d.active
                    ? 'bg-primary-500 text-white'
                    : 'bg-transparent text-neutral-700'
                }`}
              >
                <Text
                  className={`text-xs font-medium ${
                    d.active ? 'text-white' : 'text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  {d.day}
                </Text>
                <Text
                  className={`my-0.5 text-base font-bold ${
                    d.active ? 'text-white' : 'text-neutral-900 dark:text-white'
                  }`}
                >
                  {d.date}
                </Text>
                <Text
                  className={`text-[10px] ${
                    d.active ? 'text-primary-100' : 'text-neutral-400'
                  }`}
                >
                  {d.spend}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Photo Timeline */}
          <Text className="mt-6 mb-3 text-base font-bold text-neutral-900 dark:text-white">
            Nhật ký món ăn & chi tiêu (14 Tháng 8)
          </Text>

          <View className="gap-4">
            {PHOTO_LOGS.map(item => (
              <Pressable
                key={item.id}
                onPress={() => router.push(`/transaction/${item.txnId}`)}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm active:opacity-90 dark:border-neutral-800 dark:bg-neutral-800"
              >
                <View className="h-44 w-full items-center justify-center bg-neutral-100 dark:bg-neutral-700">
                  <Text className="text-6xl">{item.emoji}</Text>
                  <View className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1">
                    <Text className="text-xs font-medium text-white">
                      {item.time}
                    </Text>
                  </View>
                  <View className="absolute bottom-3 left-3 rounded-full bg-emerald-600/90 px-2.5 py-1">
                    <Text className="text-xs font-medium text-white">
                      {item.calories}
                    </Text>
                  </View>
                </View>

                <View className="p-4">
                  <View className="flex-row items-center justify-between">
                    <View>
                      <Text className="text-lg font-bold text-neutral-900 dark:text-white">
                        {item.title}
                      </Text>
                      <Text className="text-xs text-neutral-500 dark:text-neutral-400">
                        {item.category}
                      </Text>
                    </View>
                    <Text className="text-lg font-extrabold text-red-500">
                      -
                      {item.amount}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
