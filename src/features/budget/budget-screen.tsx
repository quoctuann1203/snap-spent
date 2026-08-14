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

const BUDGET_CATEGORIES = [
  {
    id: 'food',
    name: 'Ăn uống & Cà phê',
    spent: '1.850.000đ',
    limit: '3.000.000đ',
    percent: 61,
    color: 'bg-orange-500',
    icon: '🍜',
  },
  {
    id: 'shopping',
    name: 'Mua sắm & Đồ dùng',
    spent: '920.000đ',
    limit: '2.000.000đ',
    percent: 46,
    color: 'bg-blue-500',
    icon: '🛍️',
  },
  {
    id: 'transport',
    name: 'Di chuyển & Xăng xe',
    spent: '380.000đ',
    limit: '1.000.000đ',
    percent: 38,
    color: 'bg-emerald-500',
    icon: '🛵',
  },
  {
    id: 'entertainment',
    name: 'Giải trí & Phim ảnh',
    spent: '300.000đ',
    limit: '500.000đ',
    percent: 60,
    color: 'bg-purple-500',
    icon: '🎬',
  },
];

export function BudgetScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          {/* Header */}
          <View className="mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
                Ngân Sách Danh Mục
              </Text>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                Tháng 8 / 2026
              </Text>
            </View>
            <Pressable
              onPress={() => router.push('/categories')}
              className="rounded-xl border border-neutral-300 px-3 py-1.5 dark:border-neutral-700"
            >
              <Text className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Danh mục
              </Text>
            </Pressable>
          </View>

          {/* Monthly Total Budget Card */}
          <View className="rounded-3xl bg-neutral-900 p-6 text-white dark:bg-neutral-800">
            <Text className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Tổng hạn mức ngân sách
            </Text>
            <Text className="my-1.5 text-3xl font-extrabold text-white">
              10.000.000đ
            </Text>
            <Text className="mb-3 text-xs text-neutral-400">
              Đã dùng 3.450.000đ (34.5%) • Còn 6.550.000đ
            </Text>
            <ProgressBar initialProgress={34.5} />
          </View>

          {/* Categories List */}
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-base font-bold text-neutral-900 dark:text-white">
              Phân bổ theo danh mục
            </Text>
            <Pressable onPress={() => router.push('/budget/add')}>
              <Text className="text-xs font-semibold text-primary-500">
                + Thêm ngân sách
              </Text>
            </Pressable>
          </View>

          <View className="mt-3 gap-3">
            {BUDGET_CATEGORIES.map(cat => (
              <View
                key={cat.id}
                className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800"
              >
                <View className="mb-2 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2.5">
                    <Text className="text-2xl">{cat.icon}</Text>
                    <View>
                      <Text className="font-bold text-neutral-900 dark:text-white">
                        {cat.name}
                      </Text>
                      <Text className="text-xs text-neutral-500 dark:text-neutral-400">
                        {cat.spent}
                        {' '}
                        /
                        {cat.limit}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                    {cat.percent}
                    %
                  </Text>
                </View>
                <ProgressBar initialProgress={cat.percent} />
              </View>
            ))}
          </View>

          <View className="mt-6">
            <Button
              label="+ Thiết lập ngân sách mới"
              onPress={() => router.push('/budget/add')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
