import 'dotenv/config';

export default {
  expo: {
    name: "MultiTimer",
    slug: "multi-timer", // Updated to match Expo Dashboard slug
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.mankarshubham81.TimerApp",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID, // Make sure this matches the Expo Dashboard
      },
    },
    cli: {
      appVersionSource: "remote", // Added to address the version source warning
    },
  },
};
