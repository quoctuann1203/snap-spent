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
import {
  Calendar as CalendarIcon,
  Food as FoodIcon,
  Goals as GoalsIcon,
  PieChart as PieChartIcon,
  Receipt as ReceiptIcon,
  Sparkles as SparklesIcon,
  Split as SplitIcon,
} from '@/components/ui/icons';

const RECENT_TRANSACTIONS = [
  {
    id: 'txn-1',
    title: 'Phở Bò Tái Nạm',
    category: 'Ăn uống',
    amount: '-55.000đ',
    time: 'Hôm nay, 12:30',
    icon: '🍜',
  },
  {
    id: 'txn-2',
    title: 'Cà phê Highland',
    category: 'Ăn uống',
    amount: '-45.000đ',
    time: 'Hôm nay, 08:15',
    icon: '☕',
  },
  {
    id: 'txn-3',
    title: 'Siêu thị WinMart',
    category: 'Mua sắm',
    amount: '-280.000đ',
    time: 'Hôm qua, 18:45',
    icon: '🛒',
  },
];

function HomeHeader() {
  const router = useRouter();
  return (
    <View className="mb-6 flex-row items-center justify-between">
      <View>
        <Text className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Xin chào,
        </Text>
        <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
          SnapSpent User 👋
        </Text>
      </View>
      <Pressable
        onPress={() => router.push('/mascot')}
        className="flex-row items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1.5 dark:bg-primary-900/40"
      >
        <SparklesIcon color="#2563eb" width={16} height={16} />
        <Text className="text-xs font-semibold text-primary-600 dark:text-primary-300">
          AI Mascot
        </Text>
      </Pressable>
    </View>
  );
}

function BalanceCard() {
  const router = useRouter();
  return (
    <View className="rounded-3xl bg-neutral-900 p-6 shadow-lg dark:bg-neutral-800">
      <Text className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
        Tổng chi tiêu tháng này
      </Text>
      <Text className="my-2 text-3xl font-extrabold text-white">
        3.450.000đ
      </Text>
      <View className="mt-2 flex-row items-center justify-between border-t border-neutral-700/60 pt-4">
        <View>
          <Text className="text-xs text-neutral-400">Ngân sách còn lại</Text>
          <Text className="text-sm font-bold text-emerald-400">
            +6.550.000đ (65%)
          </Text>
        </View>
        <Pressable
          onPress={() => router.push('/budget')}
          className="rounded-xl bg-neutral-800 px-3 py-1.5 dark:bg-neutral-700"
        >
          <Text className="text-xs font-semibold text-neutral-200">
            Chi tiết
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function QuickScanActions() {
  const router = useRouter();
  return (
    <View className="mt-6">
      <Text className="mb-3 text-base font-bold text-neutral-900 dark:text-white">
        Chụp & Ghi nhận tức thì
      </Text>
      <View className="flex-row gap-3">
        <Pressable
          onPress={() => router.push('/confirm-food')}
          className="flex-1 rounded-2xl border border-primary-100 bg-primary-50 p-4 active:opacity-80 dark:border-primary-900/40 dark:bg-neutral-800"
        >
          <View className="mb-2 size-10 items-center justify-center rounded-xl bg-primary-500">
            <FoodIcon color="#fff" width={20} height={20} />
          </View>
          <Text className="font-bold text-neutral-900 dark:text-white">
            Chụp Món Ăn
          </Text>
          <Text className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
            AI nhận diện & ước tính
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/confirm-bill')}
          className="flex-1 rounded-2xl border border-neutral-200 bg-white p-4 active:opacity-80 dark:border-neutral-800 dark:bg-neutral-800"
        >
          <View className="mb-2 size-10 items-center justify-center rounded-xl bg-neutral-900 dark:bg-neutral-700">
            <ReceiptIcon color="#fff" width={20} height={20} />
          </View>
          <Text className="font-bold text-neutral-900 dark:text-white">
            Scan Hoá Đơn
          </Text>
          <Text className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
            OCR bóc tách mục chi
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function ShortcutsGrid() {
  const router = useRouter();
  return (
    <View className="mt-6">
      <Text className="mb-3 text-base font-bold text-neutral-900 dark:text-white">
        Tiện ích nhanh
      </Text>
      <View className="flex-row flex-wrap gap-2.5">
        <Pressable
          onPress={() => router.push('/split-bill')}
          className="w-[48%] flex-row items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-800"
        >
          <SplitIcon color="#2563eb" width={20} height={20} />
          <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
            Chia bill nhóm
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/reports')}
          className="w-[48%] flex-row items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-800"
        >
          <PieChartIcon color="#10b981" width={20} height={20} />
          <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
            Báo cáo thu chi
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/calendar')}
          className="w-[48%] flex-row items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-800"
        >
          <CalendarIcon color="#f59e0b" width={20} height={20} />
          <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
            Nhật ký ảnh
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/goals')}
          className="w-[48%] flex-row items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-800"
        >
          <GoalsIcon color="#8b5cf6" width={20} height={20} />
          <Text className="text-sm font-semibold text-neutral-900 dark:text-white">
            Hũ tiết kiệm
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function RecentTransactionsList() {
  const router = useRouter();
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-bold text-neutral-900 dark:text-white">
          Giao dịch gần đây
        </Text>
        <Pressable onPress={() => router.push('/calendar')}>
          <Text className="text-xs font-semibold text-primary-500">
            Xem tất cả
          </Text>
        </Pressable>
      </View>

      <View className="mt-3 gap-2.5">
        {RECENT_TRANSACTIONS.map(txn => (
          <Pressable
            key={txn.id}
            onPress={() => router.push(`/transaction/${txn.id}`)}
            className="flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 active:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 dark:active:bg-neutral-700"
          >
            <View className="flex-row items-center gap-3">
              <View className="size-11 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                <Text className="text-xl">{txn.icon}</Text>
              </View>
              <View>
                <Text className="font-bold text-neutral-900 dark:text-white">
                  {txn.title}
                </Text>
                <Text className="text-xs text-neutral-500 dark:text-neutral-400">
                  {txn.time}
                  {' '}
                  •
                  {' '}
                  {txn.category}
                </Text>
              </View>
            </View>
            <Text className="font-bold text-neutral-900 dark:text-white">
              {txn.amount}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="px-4 pt-14 pb-8">
          <HomeHeader />
          <BalanceCard />
          <QuickScanActions />
          <ShortcutsGrid />
          <RecentTransactionsList />

          <View className="mt-6">
            <Button
              label="📷 Mở Camera Scan Trực Tiếp"
              onPress={() => router.push('/scan')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
