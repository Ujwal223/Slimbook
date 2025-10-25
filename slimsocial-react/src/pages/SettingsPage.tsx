import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Paper,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  PrivacyTip as PrivacyIcon,
  Message as MessageIcon,
  HideSource as HideSourceIcon,
  RssFeed as RssFeedIcon,
  Abc as AbcIcon,
  GpsFixed as GpsIcon,
  CameraAlt as CameraIcon,
  PhotoCameraBack as PhotoIcon,
  FormatPaint as FormatPaintIcon,
  VerticalAlignTop as VerticalAlignTopIcon,
  HideImage as HideImageIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatLineSpacing as FormatLineSpacingIcon,
  Person as PersonIcon,
  Css as CssIcon,
  Javascript as JavascriptIcon,
  Share as ShareIcon,
  Star as StarIcon,
  Coffee as CoffeeIcon,
  LocalPizza as LocalPizzaIcon,
  BugReport as BugReportIcon,
  Code as CodeIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { GITHUB_ISSUES_URL, GITHUB_PROJECT_URL, PLAY_STORE_URL } from '../utils/constants';

export const SettingsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { settings, updateSettings } = useStore();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'useragent' | 'css' | 'js' | 'proxy'>('useragent');
  const [dialogValue, setDialogValue] = useState('');
  const [dialogEnabled, setDialogEnabled] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  const openDialog = (type: 'useragent' | 'css' | 'js' | 'proxy') => {
    setDialogType(type);
    if (type === 'useragent') {
      setDialogValue(settings.customUserAgent || '');
      setDialogEnabled(settings.customUserAgentEnabled);
    } else if (type === 'css') {
      setDialogValue(settings.customCss || '');
      setDialogEnabled(settings.customCssEnabled);
    } else if (type === 'js') {
      setDialogValue(settings.customJs || '');
      setDialogEnabled(settings.customJsEnabled);
    }
    setDialogOpen(true);
  };

  const handleDialogSave = () => {
    if (dialogType === 'useragent') {
      updateSettings({
        customUserAgent: dialogValue,
        customUserAgentEnabled: dialogEnabled,
      });
    } else if (dialogType === 'css') {
      updateSettings({
        customCss: dialogValue,
        customCssEnabled: dialogEnabled,
      });
    } else if (dialogType === 'js') {
      updateSettings({
        customJs: dialogValue,
        customJsEnabled: dialogEnabled,
      });
    }
    setDialogOpen(false);
  };

  const handleDialogDelete = () => {
    if (dialogType === 'useragent') {
      updateSettings({
        customUserAgent: '',
        customUserAgentEnabled: false,
      });
    } else if (dialogType === 'css') {
      updateSettings({
        customCss: '',
        customCssEnabled: false,
      });
    } else if (dialogType === 'js') {
      updateSettings({
        customJs: '',
        customJsEnabled: false,
      });
    }
    setDialogOpen(false);
  };

  const SettingsSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Paper sx={{ mb: 2 }} elevation={1}>
      <Box sx={{ p: 2, backgroundColor: 'action.hover' }}>
        <Typography variant="subtitle2" color="primary" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <List>{children}</List>
    </Paper>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('settings')}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        <SettingsSection title="SlimSocial">
          <ListItem>
            <ListItemIcon>
              <PrivacyIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('privacy')}
              secondary={t('disclaimer_privacy')}
            />
          </ListItem>
        </SettingsSection>

        <SettingsSection title="Facebook">
          <ListItem>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={t('enable_messenger')} />
            <Switch
              checked={settings.enableMessenger}
              onChange={(e) => updateSettings({ enableMessenger: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <HideSourceIcon />
            </ListItemIcon>
            <ListItemText primary={t('hide_ads')} />
            <Switch
              checked={settings.hideAds}
              onChange={(e) => updateSettings({ hideAds: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <RssFeedIcon />
            </ListItemIcon>
            <ListItemText primary={t('recent_first')} />
            <Switch
              checked={settings.recentFirst}
              onChange={(e) => updateSettings({ recentFirst: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <AbcIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('use_mbasic')}
              secondary={t('use_mbasic_desc')}
            />
            <Switch
              checked={settings.useMbasic}
              onChange={(e) => updateSettings({ useMbasic: e.target.checked })}
            />
          </ListItem>
        </SettingsSection>

        <SettingsSection title={t('permissions')}>
          <ListItem>
            <ListItemIcon>
              <GpsIcon />
            </ListItemIcon>
            <ListItemText primary={t('gps_permission')} />
            <Switch
              checked={settings.gpsPermission}
              onChange={(e) => updateSettings({ gpsPermission: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary={t('camera_permission')} />
            <Switch
              checked={settings.cameraPermission}
              onChange={(e) => updateSettings({ cameraPermission: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <PhotoIcon />
            </ListItemIcon>
            <ListItemText primary={t('photo_permission')} />
            <Switch
              checked={settings.photosPermission}
              onChange={(e) => updateSettings({ photosPermission: e.target.checked })}
            />
          </ListItem>
        </SettingsSection>

        <SettingsSection title={t('style')}>
          <ListItem>
            <ListItemIcon>
              <FormatPaintIcon />
            </ListItemIcon>
            <ListItemText primary={t('dark_theme')} />
            <Switch
              checked={settings.darkTheme}
              onChange={(e) => updateSettings({ darkTheme: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <VerticalAlignTopIcon />
            </ListItemIcon>
            <ListItemText primary={t('fixed_bar')} />
            <Switch
              checked={settings.fixedBar}
              onChange={(e) => updateSettings({ fixedBar: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <HideImageIcon />
            </ListItemIcon>
            <ListItemText primary={t('hide_stories')} />
            <Switch
              checked={settings.hideStories}
              onChange={(e) => updateSettings({ hideStories: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <FormatAlignCenterIcon />
            </ListItemIcon>
            <ListItemText primary={t('center_text')} />
            <Switch
              checked={settings.centerTextPosts}
              onChange={(e) => updateSettings({ centerTextPosts: e.target.checked })}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <FormatLineSpacingIcon />
            </ListItemIcon>
            <ListItemText primary={t('add_space')} />
            <Switch
              checked={settings.addSpaceBetweenPosts}
              onChange={(e) => updateSettings({ addSpaceBetweenPosts: e.target.checked })}
            />
          </ListItem>
        </SettingsSection>

        <SettingsSection title={t('advanced')}>
          <ListItem component="button" onClick={() => openDialog('useragent')} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={t('custom_useragent')} />
            {settings.customUserAgentEnabled && <Typography color="primary">✓</Typography>}
          </ListItem>
          <Divider />

          <ListItem component="button" onClick={() => openDialog('js')} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemIcon>
              <JavascriptIcon />
            </ListItemIcon>
            <ListItemText primary={t('custom_js')} />
            {settings.customJsEnabled && <Typography color="primary">✓</Typography>}
          </ListItem>
          <Divider />

          <ListItem component="button" onClick={() => openDialog('css')} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemIcon>
              <CssIcon />
            </ListItemIcon>
            <ListItemText primary={t('custom_css')} />
            {settings.customCssEnabled && <Typography color="primary">✓</Typography>}
          </ListItem>
        </SettingsSection>

        <SettingsSection title={t('contribute')}>
          <ListItem component="button" onClick={() => window.open(PLAY_STORE_URL, '_blank')} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary={t('shareapp')} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={t('review5stars_v1')} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <CoffeeIcon />
            </ListItemIcon>
            <ListItemText primary={t('buy_coffee')} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <LocalPizzaIcon />
            </ListItemIcon>
            <ListItemText primary={t('buy_pizza')} />
          </ListItem>
        </SettingsSection>

        <SettingsSection title={t('the_project')}>
          <ListItem component="button" onClick={() => window.open(GITHUB_ISSUES_URL, '_blank')} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemIcon>
              <BugReportIcon />
            </ListItemIcon>
            <ListItemText primary={t('report_issue')} />
          </ListItem>
          <Divider />

          <ListItem component="button" onClick={() => window.open(GITHUB_PROJECT_URL, '_blank')} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" secondary={t('source_code')} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={t('version')} secondary="25.04.06" />
          </ListItem>
        </SettingsSection>
      </Box>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>
          {dialogType === 'useragent' && t('custom_useragent')}
          {dialogType === 'css' && t('custom_css')}
          {dialogType === 'js' && t('custom_js')}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <ListItem>
              <ListItemText primary={t('enabled')} />
              <Switch
                checked={dialogEnabled}
                onChange={(e) => setDialogEnabled(e.target.checked)}
              />
            </ListItem>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={8}
            value={dialogValue}
            onChange={(e) => setDialogValue(e.target.value)}
            placeholder={
              dialogType === 'useragent'
                ? 'Mozilla/5.0...'
                : dialogType === 'css'
                ? '._5rgt._5msi { text-align: center; }'
                : 'console.log("Hello");'
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogDelete} color="error">
            {t('delete')}
          </Button>
          <Button onClick={() => setDialogOpen(false)}>{t('cancel')}</Button>
          <Button onClick={handleDialogSave} variant="contained">
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
