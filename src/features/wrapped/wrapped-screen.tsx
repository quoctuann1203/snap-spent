import { useRouter } from 'expo-router';
import * as React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Pressable,
  Text,
  View,
} from '@/components/ui';

const STORIES = [
  {
    tag: 'TỔNG KẾT NĂM 2026',
    title: 'Bạn đã ghi lại 142 bữa ăn ngon cùng SnapSpent!',
    highlight: '142 Bữa ăn 🍜',
    subtitle: 'Món ăn yêu thích nhất của bạn là: Phở Bò Tái Nạm (đã ăn 38 lần)',
    color: 'bg-indigo-600',
  },
  {
    tag: 'TIẾT KIỆM XUẤT SẮC',
    title: 'Hũ tiết kiệm Macbook đã hoàn thành 55%',
    highlight: '25.000.000đ 💻',
    subtitle: 'Chỉ còn 4 tháng nữa là đạt chỉ tiêu!',
    color: 'bg-emerald-600',
  },
  {
    tag: 'CHIA BILL VUI VẺ',
    title: 'Bạn là chủ chi đáng tin cậy của nhóm bạn bè!',
    highlight: '18 Cuộc hẹn 👥',
    subtitle: 'Đã giúp nhóm chia đều 8.400.000đ không thiếu 1 xu',
    color: 'bg-orange-600',
  },
];

export function WrappedScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    if (currentSlide < STORIES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    else {
      router.back();
    }
  };

  const story = STORIES[currentSlide];

  return (
    <>
      <FocusAwareStatusBar />
      <View className={`flex-1 ${story.color} justify-between p-6`}>
        {/* Story Progress Indicators */}
        <View className="flex-row gap-1.5 pt-10">
          {STORIES.map((item, i) => (
            <View
              key={item.tag}
              className={`h-1 flex-1 rounded-full ${
                i <= currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </View>

        {/* Close Button */}
        <View className="flex-row justify-end pt-2">
          <Pressable
            onPress={() => router.back()}
            className="size-9 items-center justify-center rounded-full bg-black/20"
          >
            <Text className="font-bold text-white">✕</Text>
          </Pressable>
        </View>

        {/* Main Content */}
        <Pressable onPress={nextSlide} className="flex-1 justify-center py-8">
          <Text className="mb-3 text-xs font-bold tracking-widest text-white/80 uppercase">
            {story.tag}
          </Text>
          <Text className="mb-6 text-3xl/tight font-extrabold text-white">
            {story.title}
          </Text>
          <View className="mb-6 rounded-3xl bg-black/30 p-6 backdrop-blur-md">
            <Text className="text-4xl font-black text-yellow-300">
              {story.highlight}
            </Text>
          </View>
          <Text className="text-base/relaxed text-white/90">
            {story.subtitle}
          </Text>
        </Pressable>

        {/* Action Controls */}
        <View className="gap-3 pb-6">
          <Button
            label={currentSlide < STORIES.length - 1 ? 'Tiếp tục ›' : 'Hoàn tất'}
            variant="secondary"
            onPress={nextSlide}
          />
        </View>
      </View>
    </>
  );
}
