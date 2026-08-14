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

const CATEGORIES = [
  { id: '1', name: 'Ăn uống', icon: '🍜', color: 'bg-orange-100 text-orange-600', count: 28 },
  { id: '2', name: 'Cà phê & Trà sữa', icon: '☕', color: 'bg-amber-100 text-amber-600', count: 14 },
  { id: '3', name: 'Mua sắm online', icon: '🛍️', color: 'bg-blue-100 text-blue-600', count: 8 },
  { id: '4', name: 'Di chuyển & Xăng', icon: '🛵', color: 'bg-emerald-100 text-emerald-600', count: 19 },
  { id: '5', name: 'Tiền nhà & Điện nước', icon: '🏠', color: 'bg-indigo-100 text-indigo-600', count: 3 },
  { id: '6', name: 'Giải trí & Phim', icon: '🎬', color: 'bg-purple-100 text-purple-600', count: 5 },
  { id: '7', name: 'Sức khoẻ & Gym', icon: '💊', color: 'bg-rose-100 text-rose-600', count: 4 },
];

export function CategoriesScreen() {
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
              Quản Lý Danh Mục
            </Text>
            <View className="w-16" />
          </View>

          <View className="gap-2.5">
            {CATEGORIES.map(cat => (
              <Pressable
                key={cat.id}
                className="flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 active:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800"
              >
                <View className="flex-row items-center gap-3">
                  <View className="size-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                    <Text className="text-xl">{cat.icon}</Text>
                  </View>
                  <View>
                    <Text className="font-bold text-neutral-900 dark:text-white">
                      {cat.name}
                    </Text>
                    <Text className="text-xs text-neutral-500">
                      {cat.count}
                      {' '}
                      giao dịch
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-semibold text-primary-500">
                  Chỉnh sửa
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="mt-6">
            <Button label="+ Tạo danh mục mới" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
