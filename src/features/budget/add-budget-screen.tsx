import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Input,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

export function AddBudgetScreen() {
  const router = useRouter();
  const [category, setCategory] = React.useState('');
  const [limit, setLimit] = React.useState('');

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
              Thêm Ngân Sách
            </Text>
            <Button
              label="Đóng"
              size="sm"
              variant="outline"
              onPress={() => router.back()}
            />
          </View>

          <View className="gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <Input
              label="Tên danh mục chi tiêu"
              placeholder="VD: Ăn uống, Mua sắm..."
              value={category}
              onChangeText={setCategory}
            />

            <Input
              label="Hạn mức ngân sách (VNĐ)"
              placeholder="VD: 3.000.000"
              keyboardType="numeric"
              value={limit}
              onChangeText={setLimit}
            />

            <View className="pt-4">
              <Button
                label="Lưu hạn mức"
                onPress={() => {
                  router.back();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
