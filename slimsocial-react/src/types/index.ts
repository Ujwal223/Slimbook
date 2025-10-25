export interface AppSettings {
  enableMessenger: boolean;
  hideAds: boolean;
  recentFirst: boolean;
  useMbasic: boolean;
  gpsPermission: boolean;
  cameraPermission: boolean;
  photosPermission: boolean;
  darkTheme: boolean;
  fixedBar: boolean;
  hideStories: boolean;
  centerTextPosts: boolean;
  addSpaceBetweenPosts: boolean;
  customUserAgentEnabled: boolean;
  customUserAgent?: string;
  customCssEnabled: boolean;
  customCss?: string;
  customJsEnabled: boolean;
  customJs?: string;
  customProxyEnabled: boolean;
  customProxyIp?: string;
  customProxyPort?: string;
}

export interface CssOption {
  key: string;
  description: string;
  code: string;
  defaultEnabled?: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  enableMessenger: true,
  hideAds: true,
  recentFirst: false,
  useMbasic: false,
  gpsPermission: false,
  cameraPermission: false,
  photosPermission: false,
  darkTheme: false,
  fixedBar: true,
  hideStories: false,
  centerTextPosts: false,
  addSpaceBetweenPosts: false,
  customUserAgentEnabled: false,
  customCssEnabled: false,
  customJsEnabled: false,
  customProxyEnabled: false,
};
