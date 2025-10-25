import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import { HomePage } from './pages/HomePage';
import { MessengerPage } from './pages/MessengerPage';
import { SettingsPage } from './pages/SettingsPage';
import { createAppTheme } from './styles/theme';
import { useStore } from './store/useStore';
import i18n from './i18n';

function App() {
  const { settings } = useStore();
  const theme = useMemo(() => createAppTheme(settings.darkTheme), [settings.darkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messenger" element={<MessengerPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
