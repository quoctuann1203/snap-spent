import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Input,
  Pressable,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

export function SplitBillScreen() {
  const router = useRouter();
  const [billTitle, setBillTitle] = React.useState('Ăn lẩu Haidilao');
  const [totalAmount, setTotalAmount] = React.useState('1.200.000');
  const [members] = React.useState(['Bạn (chủ chi)', 'An', 'Bình', 'Chi']);

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
              Tạo Chia Bill Nhóm
            </Text>
            <Pressable onPress={() => router.push('/split-bill/list')}>
              <Text className="text-xs font-semibold text-primary-500">
                Lịch sử
              </Text>
            </Pressable>
          </View>

          {/* Form */}
          <View className="gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <Input
              label="Tên buổi ăn / cuộc hẹn"
              value={billTitle}
              onChangeText={setBillTitle}
            />

            <Input
              label="Tổng hoá đơn thanh toán (VNĐ)"
              keyboardType="numeric"
              value={totalAmount}
              onChangeText={setTotalAmount}
            />

            <View className="pt-2">
              <Text className="mb-2 text-sm font-bold text-neutral-900 dark:text-white">
                Danh sách thành viên (
                {members.length}
                {' '}
                người)
              </Text>
              <View className="gap-2">
                {members.map(member => (
                  <View
                    key={member}
                    className="flex-row items-center justify-between rounded-xl bg-neutral-100 p-3 dark:bg-neutral-700"
                  >
                    <Text className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {member}
                    </Text>
                    <Text className="text-xs text-neutral-500">
                      {Math.round(1200000 / members.length).toLocaleString('vi-VN')}
                      đ / người
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="pt-4">
              <Button
                label="Xem Tóm Tắt & Chia Sẻ QR"
                onPress={() => router.push('/split-bill/summary')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
