import {
  FIREFOX_USER_AGENT,
  OPERA_MINI_USER_AGENT,
  SUFFIX_DEFAULT,
  SUFFIX_RECENT_FIRST,
  TOUCH_FACEBOOK_HOME_URL,
  FACEBOOK_HOME_BASIC_URL,
} from './constants';
import type { AppSettings } from '../types';

export const getHomePage = (settings: AppSettings): string => {
  let initialUrl = TOUCH_FACEBOOK_HOME_URL;

  if (settings.useMbasic) {
    initialUrl = FACEBOOK_HOME_BASIC_URL;
  }

  if (settings.recentFirst) {
    return initialUrl + SUFFIX_RECENT_FIRST;
  }

  return initialUrl + SUFFIX_DEFAULT;
};

export const getUserAgent = (settings: AppSettings): string => {
  if (settings.customUserAgentEnabled && settings.customUserAgent) {
    return settings.customUserAgent;
  }

  if (settings.useMbasic) {
    return OPERA_MINI_USER_AGENT;
  }

  return FIREFOX_USER_AGENT;
};

export const isPermittedFbUrl = (url: string, permittedHosts: string[]): boolean => {
  try {
    const urlObj = new URL(url);
    return permittedHosts.some((host) => urlObj.hostname.endsWith(host));
  } catch {
    return false;
  }
};

export const showToast = (message: string): void => {
  console.log('Toast:', message);
};
