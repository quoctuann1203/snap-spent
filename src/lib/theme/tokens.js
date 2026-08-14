// src/lib/theme/tokens.js
//
// Nguồn: styles.css (design system "Nocturne") — giá trị chính xác, không còn suy đoán.
// File này để .js (không phải .ts) vì được require() trực tiếp trong tailwind.config.js
// (CommonJS, không qua ts-node). Vẫn import bình thường được từ code TS/TSX qua '@/lib/theme/tokens'.

const colors = {
  bg: '#161826',
  surface: '#232532',
  text: '#e9e9ed',
  accent: '#9184d9',
  accent2: '#a7a1db',
  divider: 'color-mix(in srgb, #e9e9ed 16%, transparent)', // web-only syntax — xem ghi chú bên dưới cho RN

  neutral: {
    100: '#f3f5fe',
    200: '#e4e7f5',
    300: '#cfd3e5',
    400: '#b2b6ca',
    500: '#9397ab',
    600: '#75798c',
    700: '#595d6c',
    800: '#3f424d',
    900: '#292b31',
  },

  accentRamp: {
    100: '#f5f4ff',
    200: '#e7e5fe',
    300: '#d2cefd',
    400: '#b5abfc',
    500: '#968ae0',
    600: '#796cbf',
    700: '#5d5294',
    800: '#423a6a',
    900: '#2b2741',
  },

  accent2Ramp: {
    100: '#f5f4ff',
    200: '#e7e5fe',
    300: '#d2cefd',
    400: '#b5afe8',
    500: '#9690c9',
    600: '#7972a9',
    700: '#5c5783',
    800: '#423e5d',
    900: '#2b293a',
  },

  danger: '#B5432A',
  success: '#4C7A2E',
  dividerRgba: 'rgba(233, 233, 237, 0.16)',
};

const radius = {
  sm: 4,
  md: 8,
  lg: 14,
};

const spacing = {
  1: 2.8,
  2: 5.6,
  3: 8.4,
  4: 11.2,
  6: 16.8,
  8: 22.4,
};

const fonts = {
  heading: 'Inter',
  headingWeight: '500',
  body: 'Inter',
  mono: 'ui-monospace, SF Mono, Menlo, monospace',
};

const shadow = {
  sm: {
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOpacity: 0.55,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOpacity: 0.65,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 16 },
    elevation: 8,
  },
};

module.exports = { colors, radius, spacing, fonts, shadow };
