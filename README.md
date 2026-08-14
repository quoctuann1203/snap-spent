<h1 align="center">
  <img alt="logo" src="./assets/icon.png" width="124px" style="border-radius:10px"/><br/>
  SnapSpent Mobile App
</h1>

> Chụp ảnh món ăn & hoá đơn — AI quản lý tài chính thông minh (Expo SDK 54, React Native 0.81, Expo Router 6).

## Requirements

- [React Native dev environment](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [Cursor](https://www.cursor.com/) or [VS Code Editor](https://code.visualstudio.com/download)

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/quoctuann1203/snap-spent.git

cd ./snap-spent

pnpm install
```

To run the app:

```sh
pnpm start
# or
pnpm ios
# or
pnpm android
```

## ✍️ Key Features & Routes

- **Onboarding**: 3-slide introduction with Nocturne theme gradient (`/onboarding`)
- **Authentication**: Login & signup toggle with TanStack Form & Zod (`/login`)
- **Home**: Balance overview, quick camera actions, recent transactions (`/`)
- **Calendar**: Photo journal of daily meals & receipts (`/calendar`)
- **Budget**: Category budget allocations & progress tracking (`/budget`)
- **Goals**: Savings jars & fund deposit tracking (`/goals`, `/goals/[id]`)
- **Scan & AI Recognition**: Camera food & bill OCR extraction (`/scan`, `/confirm-food`, `/confirm-bill`)
- **Split Bill**: Group bill splitting with VietQR payment breakdown (`/split-bill`)
- **Reports & Mascot**: Spending analytics, AI financial advice & mood tracking (`/reports`, `/mascot`)
- **Spending Wrapped**: Interactive story recap cards (`/wrapped`)
