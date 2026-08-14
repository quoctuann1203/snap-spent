import { create } from 'zustand';

export type Mood = 'happy' | 'neutral' | 'worried';

type FinanceState = {
  balance: number;
  incomeThisMonth: number;
  expenseThisMonth: number;
  mascotMood: Mood;
  mascotLine: string;
};

type FinanceActions = {
  setMascotMood: (mood: Mood, line: string) => void;
};

export const useFinanceStore = create<FinanceState & FinanceActions>(set => ({
  balance: 12_450_000,
  incomeThisMonth: 18_000_000,
  expenseThisMonth: 5_550_000,
  mascotMood: 'happy',
  mascotLine: 'Tháng này bạn chi tiêu khá ổn đó!',
  setMascotMood: (mascotMood, mascotLine) => set({ mascotMood, mascotLine }),
}));

export function formatVnd(value: number) {
  return `${new Intl.NumberFormat('vi-VN').format(value)}đ`;
}
