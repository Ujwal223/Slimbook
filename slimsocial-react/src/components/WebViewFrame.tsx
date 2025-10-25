import { useEffect, useRef, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useStore } from '../store/useStore';
import { injectCssFunc, removeAdsFunc, removeAdsObserver } from '../utils/js';
import {
  cssList,
  removeMessengerDownloadCss,
  removeBrowserNotSupportedCss
} from '../utils/css';

interface WebViewFrameProps {
  url: string;
  onNavigate?: (url: string) => void;
  isMessenger?: boolean;
}

export const WebViewFrame = ({ url }: WebViewFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const { settings } = useStore();

  const injectScripts = () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    try {
      let cssToInject = '';

      for (const css of cssList) {
        const isEnabled = css.key === 'dark_theme'
          ? settings.darkTheme
          : css.key === 'fixed_bar'
          ? settings.fixedBar
          : css.key === 'hide_stories'
          ? settings.hideStories
          : css.key === 'center_text'
          ? settings.centerTextPosts
          : css.key === 'add_space'
          ? settings.addSpaceBetweenPosts
          : css.defaultEnabled;

        if (isEnabled) {
          cssToInject += css.code;
        }
      }

      if (settings.customCssEnabled && settings.customCss) {
        cssToInject += settings.customCss;
      }

      const scriptContent = `
        ${removeAdsFunc}
        document.addEventListener("DOMContentLoaded", function() {
          ${injectCssFunc(removeMessengerDownloadCss.code)}
          ${injectCssFunc(removeBrowserNotSupportedCss.code)}
          ${injectCssFunc(cssToInject)}
          ${settings.hideAds ? 'removeAds();' : ''}
        });
      `;

      const script = iframe.contentWindow.document.createElement('script');
      script.textContent = scriptContent;
      iframe.contentWindow.document.head.appendChild(script);

      if (settings.hideAds) {
        const observerScript = iframe.contentWindow.document.createElement('script');
        observerScript.textContent = removeAdsObserver;
        iframe.contentWindow.document.head.appendChild(observerScript);
      }

      if (settings.customJsEnabled && settings.customJs) {
        const customScript = iframe.contentWindow.document.createElement('script');
        customScript.textContent = settings.customJs;
        iframe.contentWindow.document.head.appendChild(customScript);
      }
    } catch (error) {
      console.error('Error injecting scripts:', error);
    }
  };

  useEffect(() => {
    setLoading(true);
  }, [url]);

  const handleLoad = () => {
    setLoading(false);
    injectScripts();
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading && (
        <LinearProgress
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        />
      )}
      <iframe
        ref={iframeRef}
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        onLoad={handleLoad}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        title="Facebook WebView"
      />
    </Box>
  );
};
