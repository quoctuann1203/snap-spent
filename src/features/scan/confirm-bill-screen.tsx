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

export function ConfirmBillScreen() {
  const router = useRouter();
  const [merchant, setMerchant] = React.useState('Siêu thị WinMart+');
  const [totalAmount, setTotalAmount] = React.useState('280.000');
  const [date, setDate] = React.useState('14/08/2026 18:30');

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <View className="mb-4 flex-row items-center justify-between">
            <Button
              label="← Chụp lại"
              size="sm"
              variant="outline"
              onPress={() => router.back()}
            />
            <Text className="text-sm font-bold text-neutral-900 dark:text-white">
              OCR Xác Nhận Hoá Đơn
            </Text>
            <View className="w-16" />
          </View>

          {/* Bill OCR Preview */}
          <View className="mb-5 rounded-3xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <View className="mb-4 flex-row items-center gap-3">
              <View className="size-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                <Text className="text-xl">🧾</Text>
              </View>
              <View>
                <Text className="font-bold text-neutral-900 dark:text-white">
                  Hoá đơn thanh toán
                </Text>
                <Text className="text-xs text-neutral-500">Đã quét 4 sản phẩm</Text>
              </View>
            </View>

            {/* Extracted items */}
            <View className="gap-2 border-y border-neutral-100 py-3 dark:border-neutral-700">
              <View className="flex-row justify-between">
                <Text className="text-xs text-neutral-600 dark:text-neutral-300">
                  1. Sữa tươi tiệt trùng 1L (x2)
                </Text>
                <Text className="text-xs font-semibold text-neutral-900 dark:text-white">
                  72.000đ
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-xs text-neutral-600 dark:text-neutral-300">
                  2. Thịt heo sạch MeatDeli 400g
                </Text>
                <Text className="text-xs font-semibold text-neutral-900 dark:text-white">
                  115.000đ
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-xs text-neutral-600 dark:text-neutral-300">
                  3. Rau cải thìa hữu cơ
                </Text>
                <Text className="text-xs font-semibold text-neutral-900 dark:text-white">
                  28.000đ
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-xs text-neutral-600 dark:text-neutral-300">
                  4. Nước xả vải Comfort
                </Text>
                <Text className="text-xs font-semibold text-neutral-900 dark:text-white">
                  65.000đ
                </Text>
              </View>
            </View>
          </View>

          {/* Form details */}
          <View className="gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <Input
              label="Cửa hàng / Địa điểm"
              value={merchant}
              onChangeText={setMerchant}
            />

            <Input
              label="Tổng tiền thanh toán (VNĐ)"
              keyboardType="numeric"
              value={totalAmount}
              onChangeText={setTotalAmount}
            />

            <Input
              label="Ngày giờ giao dịch"
              value={date}
              onChangeText={setDate}
            />

            <View className="pt-2">
              <Button
                label="Lưu vào Sổ Chi Tiêu"
                onPress={() => {
                  router.replace('/(app)');
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
