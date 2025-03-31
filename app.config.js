import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Meteo Málaga",
  slug: "meteo-malaga",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#1E3A8A"
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/meteo-malaga"
  },
  android: {
    ...config.android,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#1E3A8A"
    },
    softwareKeyboardLayoutMode: "resize",
    package: "com.meteormalaga.app",
    permissions: [
      "INTERNET",
      "ACCESS_NETWORK_STATE"
    ],
    versionCode: 1
  },
  ios: {
    ...config.ios,
    supportsTablet: true,
    bundleIdentifier: "com.meteormalaga.app",
    buildNumber: "1.0.0"
  },
  web: {
    ...config.web,
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "meteo-malaga"
    }
  },
  runtimeVersion: {
    policy: "sdkVersion"
  }
});
