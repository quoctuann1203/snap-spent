import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Pressable,
  ProgressBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

const SAVINGS_GOALS = [
  {
    id: 'goal-macbook',
    name: 'Đổi Macbook Pro M4',
    current: '25.000.000đ',
    target: '45.000.000đ',
    percent: 55,
    icon: '💻',
    deadline: 'Tháng 12/2026',
  },
  {
    id: 'goal-japan',
    name: 'Chuyến du lịch Nhật Bản',
    current: '18.000.000đ',
    target: '30.000.000đ',
    percent: 60,
    icon: '✈️',
    deadline: 'Tháng 10/2026',
  },
  {
    id: 'goal-emergency',
    name: 'Quỹ khẩn cấp 3 tháng',
    current: '40.000.000đ',
    target: '50.000.000đ',
    percent: 80,
    icon: '🛡️',
    deadline: 'Không thời hạn',
  },
];

export function GoalsScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
                Hũ Tiết Kiệm & Mục Tiêu
              </Text>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                Đang tích luỹ cho ước mơ của bạn
              </Text>
            </View>
          </View>

          {/* Overall Savings Card */}
          <View className="rounded-3xl bg-neutral-900 p-6 dark:bg-neutral-800">
            <Text className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Tổng tiền đã tiết kiệm
            </Text>
            <Text className="my-1.5 text-3xl font-extrabold text-white">
              83.000.000đ
            </Text>
            <Text className="text-xs font-medium text-emerald-400">
              +4.500.000đ được nạp vào trong tháng này
            </Text>
          </View>

          {/* Goals List */}
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-base font-bold text-neutral-900 dark:text-white">
              Danh sách các mục tiêu (
              {SAVINGS_GOALS.length}
              )
            </Text>
            <Pressable onPress={() => router.push('/goals/add')}>
              <Text className="text-xs font-semibold text-primary-500">
                + Thêm mục tiêu
              </Text>
            </Pressable>
          </View>

          <View className="mt-3 gap-3">
            {SAVINGS_GOALS.map(goal => (
              <Pressable
                key={goal.id}
                onPress={() => router.push(`/goals/${goal.id}`)}
                className="rounded-2xl border border-neutral-200 bg-white p-4 active:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 dark:active:bg-neutral-700"
              >
                <View className="mb-2 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <Text className="text-3xl">{goal.icon}</Text>
                    <View>
                      <Text className="font-bold text-neutral-900 dark:text-white">
                        {goal.name}
                      </Text>
                      <Text className="text-xs text-neutral-500 dark:text-neutral-400">
                        {goal.current}
                        {' '}
                        /
                        {goal.target}
                      </Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="text-sm font-bold text-primary-500">
                      {goal.percent}
                      %
                    </Text>
                    <Text className="text-[10px] text-neutral-400">
                      {goal.deadline}
                    </Text>
                  </View>
                </View>
                <ProgressBar initialProgress={goal.percent} />
              </Pressable>
            ))}
          </View>

          <View className="mt-6">
            <Button
              label="+ Tạo hũ tiết kiệm mới"
              onPress={() => router.push('/goals/add')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
