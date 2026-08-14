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
import { Sparkles as SparklesIcon } from '@/components/ui/icons';

const EMOTIONS = [
  { emoji: '😸', mood: 'Vui vẻ', desc: 'Tiết kiệm đạt chỉ tiêu 80%' },
  { emoji: '🙀', mood: 'Bất ngờ', desc: 'Ăn ngoài hơi nhiều tuần này' },
  { emoji: '😼', mood: 'Tự hào', desc: 'Vừa hoàn thành hũ quỹ khẩn cấp' },
  { emoji: '😿', mood: 'Nhắc nhở', desc: 'Sắp tới hạn đóng tiền nhà 05/09' },
];

export function MascotScreen() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = React.useState(0);

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
              SnapSpent AI Mascot
            </Text>
            <View className="w-16" />
          </View>

          {/* Mascot Stage */}
          <View className="items-center rounded-3xl bg-primary-600 p-8 shadow-lg dark:bg-primary-700">
            <View className="mb-4 size-32 items-center justify-center rounded-full bg-white/20">
              <Text className="text-7xl">{EMOTIONS[selectedMood].emoji}</Text>
            </View>
            <View className="mb-1 flex-row items-center gap-1.5">
              <SparklesIcon color="#fef08a" width={16} height={16} />
              <Text className="text-xs font-bold tracking-wider text-primary-100 uppercase">
                Tâm trạng hiện tại:
                {' '}
                {EMOTIONS[selectedMood].mood}
              </Text>
            </View>
            <Text className="mt-1 text-center text-lg font-bold text-white">
              "
              {EMOTIONS[selectedMood].desc}
              "
            </Text>
          </View>

          {/* Emotion selector */}
          <Text className="mt-6 mb-3 text-base font-bold text-neutral-900 dark:text-white">
            Các trạng thái cảm xúc của Mascot
          </Text>
          <View className="flex-row gap-2.5">
            {EMOTIONS.map((item, idx) => (
              <Pressable
                key={item.mood}
                onPress={() => setSelectedMood(idx)}
                className={`flex-1 items-center rounded-2xl border p-3.5 ${
                  selectedMood === idx
                    ? 'border-primary-500 bg-primary-50 dark:border-primary-400 dark:bg-neutral-800'
                    : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-800'
                }`}
              >
                <Text className="mb-1 text-2xl">{item.emoji}</Text>
                <Text className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {item.mood}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* AI Daily Financial Advice */}
          <Text className="mt-6 mb-3 text-base font-bold text-neutral-900 dark:text-white">
            Lời khuyên tài chính hôm nay
          </Text>
          <View className="gap-3 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-800">
            <View className="flex-row items-start gap-3">
              <Text className="text-xl">🥗</Text>
              <View className="flex-1">
                <Text className="font-bold text-neutral-900 dark:text-white">
                  Kiểm soát bữa trưa văn phòng
                </Text>
                <Text className="mt-0.5 text-xs/relaxed text-neutral-500">
                  Bạn đã tiết kiệm được 150.000đ tuần này nhờ chọn quán ăn bình dân thay vì đặt delivery đắt đỏ!
                </Text>
              </View>
            </View>
            <View className="flex-row items-start gap-3 border-t border-neutral-100 pt-3 dark:border-neutral-700">
              <Text className="text-xl">🎯</Text>
              <View className="flex-1">
                <Text className="font-bold text-neutral-900 dark:text-white">
                  Duy trì hũ tiết kiệm
                </Text>
                <Text className="mt-0.5 text-xs/relaxed text-neutral-500">
                  Chỉ cần thêm 2 lần nạp 500k nữa là bạn sẽ đạt mốc 60% cho mục tiêu du lịch Nhật Bản.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
