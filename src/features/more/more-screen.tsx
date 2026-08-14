import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  FocusAwareStatusBar,
  Pressable,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import { Sparkles as SparklesIcon } from '@/components/ui/icons';

const MENU_GROUPS = [
  {
    title: 'Tính năng & Tiện ích',
    items: [
      {
        id: 'split-bill',
        title: 'Chia Bill Nhóm (Split Bill)',
        subtitle: 'Quản lý & tính tiền nhóm thông minh',
        route: '/split-bill',
        icon: '👥',
      },
      {
        id: 'categories',
        title: 'Quản Lý Danh Mục',
        subtitle: 'Tuỳ biến nhóm chi tiêu & màu sắc',
        route: '/categories',
        icon: '🏷️',
      },
      {
        id: 'recurring',
        title: 'Chi Tiêu Định Kỳ',
        subtitle: 'Thuê nhà, Netflix, Gym, Điện thoại',
        route: '/recurring',
        icon: '🔄',
      },
      {
        id: 'reports',
        title: 'Báo Cáo & Phân Tích',
        subtitle: 'Biểu đồ thu chi và xu hướng',
        route: '/reports',
        icon: '📊',
      },
    ],
  },
  {
    title: 'AI & Trải nghiệm',
    items: [
      {
        id: 'mascot',
        title: 'Linh Vật AI Cảm Xúc',
        subtitle: 'Trợ lý tài chính AI & lời khuyên chi tiêu',
        route: '/mascot',
        icon: '🐱',
      },
      {
        id: 'wrapped',
        title: 'Spending Wrapped Story',
        subtitle: 'Tổng kết chi tiêu dạng story thú vị',
        route: '/wrapped',
        icon: '🎁',
      },
    ],
  },
  {
    title: 'Hệ thống',
    items: [
      {
        id: 'settings',
        title: 'Cài Đặt Ứng Dụng',
        subtitle: 'Ngôn ngữ, giao diện sáng/tối, tài khoản',
        route: '/settings',
        icon: '⚙️',
      },
    ],
  },
];

export function MoreScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
                Menu & Mở Rộng
              </Text>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                Tất cả tính năng & thiết lập
              </Text>
            </View>
          </View>

          {/* AI Banner */}
          <Pressable
            onPress={() => router.push('/mascot')}
            className="mb-6 rounded-3xl bg-primary-600 p-5 shadow-md active:opacity-90 dark:bg-primary-700"
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-3">
                <View className="mb-1 flex-row items-center gap-1.5">
                  <SparklesIcon color="#fef08a" width={16} height={16} />
                  <Text className="text-xs font-bold tracking-wider text-primary-100 uppercase">
                    SnapSpent AI Assistant
                  </Text>
                </View>
                <Text className="text-lg font-bold text-white">
                  Linh vật nhận xét chi tiêu
                </Text>
                <Text className="mt-1 text-xs text-primary-100">
                  "Tuần này bạn ăn ngoài hơi nhiều đấy nhé!"
                </Text>
              </View>
              <Text className="text-4xl">🐱</Text>
            </View>
          </Pressable>

          {/* Grouped Menus */}
          {MENU_GROUPS.map(group => (
            <View key={group.title} className="mb-6">
              <Text className="mb-2.5 text-xs font-bold tracking-wider text-neutral-400 uppercase">
                {group.title}
              </Text>
              <View className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-800">
                {group.items.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={() => router.push(item.route as any)}
                    className={`flex-row items-center justify-between p-4 active:bg-neutral-100 dark:active:bg-neutral-700 ${
                      index < group.items.length - 1
                        ? 'border-b border-neutral-100 dark:border-neutral-700/50'
                        : ''
                    }`}
                  >
                    <View className="flex-row items-center gap-3.5">
                      <View className="size-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                        <Text className="text-xl">{item.icon}</Text>
                      </View>
                      <View>
                        <Text className="font-semibold text-neutral-900 dark:text-white">
                          {item.title}
                        </Text>
                        <Text className="text-xs text-neutral-500 dark:text-neutral-400">
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                    <Text className="font-bold text-neutral-400">›</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
