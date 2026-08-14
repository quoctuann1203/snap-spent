import { Redirect, SplashScreen, Tabs } from 'expo-router';
import * as React from 'react';
import { useCallback, useEffect } from 'react';

import {
  Budget as BudgetIcon,
  Calendar as CalendarIcon,
  Goals as GoalsIcon,
  Home as HomeIcon,
  More as MoreIcon,
} from '@/components/ui/icons';
import { useAuthStore as useAuth } from '@/features/auth/use-auth-store';
import { useIsFirstTime } from '@/lib/hooks/use-is-first-time';

const HIDDEN_SCREENS = [
  'scan',
  'confirm-food',
  'confirm-bill',
  'transaction/[id]',
  'budget/add',
  'categories',
  'goals/add',
  'goals/[id]',
  'split-bill/index',
  'split-bill/summary',
  'split-bill/list',
  'recurring',
  'reports',
  'wrapped',
  'mascot',
  'settings',
  'style',
] as const;

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => {
        hideSplash();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: { paddingTop: 6 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarButtonTestID: 'home-tab',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Nhật ký',
          tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
          tabBarButtonTestID: 'calendar-tab',
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: 'Ngân sách',
          tabBarIcon: ({ color }) => <BudgetIcon color={color} />,
          tabBarButtonTestID: 'budget-tab',
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: 'Mục tiêu',
          tabBarIcon: ({ color }) => <GoalsIcon color={color} />,
          tabBarButtonTestID: 'goals-tab',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Thêm',
          tabBarIcon: ({ color }) => <MoreIcon color={color} />,
          tabBarButtonTestID: 'more-tab',
        }}
      />

      {HIDDEN_SCREENS.map(screenName => (
        <Tabs.Screen
          key={screenName}
          name={screenName}
          options={{
            href: null,
            tabBarStyle: { display: 'none' },
          }}
        />
      ))}
    </Tabs>
  );
}
