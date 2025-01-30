📌 Overall Workflow
Phase 1: Planning & Research
1. Define Requirements & Features
✅ Core Features:

List all videos with search & language filter
Track watch time, start/end timestamps, number of views
Run background service to track engagement
Store data locally (SQLite)
Provide analytics with charts & export options
Support offline authentication for analytics screen
Ensure battery-efficient tracking
✅ Key Privacy Considerations:

Minimize unnecessary data collection
Store data locally (no cloud sync for privacy)
Allow users to clear tracking data
✅ Required Permissions (Android):

Foreground Service: Continuous tracking
Usage Stats: Track video playback
Storage: Export reports
Overlay Permission: Background tracking


Phase 2: Technical Architecture
1. Tech Stack
✅ Frontend: React Native (Expo)
✅ Database: SQLite (via expo-sqlite)
✅ Background Services: react-native-background-actions
✅ Video Player: react-native-video
✅ Data Export: react-native-fs (for CSV/JSON export)
✅ Charts & Reports: victory-native for analytics visualization

2. Folder Structure (Expo)

VideoWatchTimer/
│-- App.js               # Main entry point
│-- package.json         # Dependencies & scripts
│-- assets/              # Images, icons, and videos
│-- src/
│   ├── components/      # Reusable UI components
│   │   ├── VideoCard.js # Video listing component
│   │   ├── Chart.js     # Analytics charts component
│   ├── screens/         # App screens
│   │   ├── HomeScreen.js       # Lists videos
│   │   ├── VideoPlayerScreen.js # Plays & tracks video
│   │   ├── AnalyticsScreen.js   # Displays analytics & reports
│   ├── services/        # Business logic & APIs
│   │   ├── tracking.js  # Background tracking logic
│   │   ├── database.js  # SQLite setup & queries
│   ├── utils/           # Helper functions
│   │   ├── permissions.js # Manage app permissions
│-- android/             # Android-specific configurations (if ejecting)
│-- ios/                 # iOS-specific configurations (if ejecting)


## Clone the repo

```bash
git clone https://github.com/nitin14gupta/Video-Watch-Timer.git
cd VideoWatchTimer
```

## Install dependencies

```bash
npm install
```

## Run the app

```bash
npx expo start
```

