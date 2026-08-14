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

export function ConfirmFoodScreen() {
  const router = useRouter();
  const [dishName, setDishName] = React.useState('Phở Bò Tái Nạm');
  const [price, setPrice] = React.useState('55.000');
  const [calories, setCalories] = React.useState('520');
  const [category, setCategory] = React.useState('Ăn uống / Trưa');

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
              AI Xác Nhận Món Ăn
            </Text>
            <View className="w-16" />
          </View>

          {/* Photo Preview Card */}
          <View className="mb-5 overflow-hidden rounded-3xl bg-neutral-900 shadow-md">
            <View className="h-48 w-full items-center justify-center bg-neutral-800">
              <Text className="text-6xl">🍜</Text>
              <View className="absolute right-3 bottom-3 rounded-full bg-black/60 px-3 py-1">
                <Text className="text-xs font-semibold text-emerald-400">
                  AI Độ chính xác 98%
                </Text>
              </View>
            </View>
          </View>

          {/* Form Info */}
          <View className="gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <Input
              label="Tên món ăn"
              value={dishName}
              onChangeText={setDishName}
            />

            <Input
              label="Số tiền (VNĐ)"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />

            <View className="flex-row gap-3">
              <View className="flex-1">
                <Input
                  label="Lượng Calo (kcal)"
                  keyboardType="numeric"
                  value={calories}
                  onChangeText={setCalories}
                />
              </View>
              <View className="flex-1">
                <Input
                  label="Danh mục"
                  value={category}
                  onChangeText={setCategory}
                />
              </View>
            </View>

            <View className="pt-2">
              <Button
                label="Xác nhận & Lưu chi tiêu"
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
