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

export function AddGoalScreen() {
  const router = useRouter();
  const [goalName, setGoalName] = React.useState('');
  const [targetAmount, setTargetAmount] = React.useState('');
  const [deadline, setDeadline] = React.useState('');

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
              Tạo Hũ Tiết Kiệm Mới
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
              label="Tên mục tiêu / hũ tiết kiệm"
              placeholder="VD: Mua iPhone mới, Quỹ du lịch..."
              value={goalName}
              onChangeText={setGoalName}
            />

            <Input
              label="Số tiền mục tiêu (VNĐ)"
              placeholder="VD: 20.000.000"
              keyboardType="numeric"
              value={targetAmount}
              onChangeText={setTargetAmount}
            />

            <Input
              label="Thời hạn hoàn thành (tuỳ chọn)"
              placeholder="VD: Tháng 12/2026"
              value={deadline}
              onChangeText={setDeadline}
            />

            <View className="pt-4">
              <Button
                label="Khởi tạo mục tiêu"
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
