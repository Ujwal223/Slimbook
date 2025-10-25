import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  Home as HomeIcon,
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  Settings as SettingsIcon,
  Share as ShareIcon,
  VerticalAlignTop as TopIcon,
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { WebViewFrame } from '../components/WebViewFrame';
import { useStore } from '../store/useStore';
import { getHomePage } from '../utils/helpers';

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { settings, currentUrl, updateCurrentUrl } = useStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const homePage = getHomePage(settings);

  useEffect(() => {
    if (!currentUrl) {
      updateCurrentUrl(homePage);
    }
  }, [currentUrl, homePage, updateCurrentUrl]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    updateCurrentUrl(homePage);
    setRefreshKey((prev) => prev + 1);
    handleMenuClose();
  };

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
    handleMenuClose();
  };

  const handleSettings = () => {
    navigate('/settings');
    handleMenuClose();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SlimSocial for Facebook',
        url: currentUrl || homePage,
      });
    }
    handleMenuClose();
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleMenuClose();
  };

  const handleReset = () => {
    updateCurrentUrl(homePage);
    setRefreshKey((prev) => prev + 1);
    handleMenuClose();
  };

  const handleMessenger = () => {
    navigate('/messenger');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleHome}
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', cursor: 'pointer' }}
            onClick={handleScrollTop}
          >
            SlimSocial
          </Typography>

          {settings.enableMessenger && (
            <IconButton color="inherit" onClick={handleMessenger}>
              <MessageIcon />
            </IconButton>
          )}

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
            aria-label="menu"
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleScrollTop}>
          <ListItemIcon>
            <TopIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('top')}</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleRefresh}>
          <ListItemIcon>
            <RefreshIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('refresh')}</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleShare}>
          <ListItemIcon>
            <ShareIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('share_url')}</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('settings')}</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleSettings} sx={{ color: 'error.main' }}>
          <ListItemIcon>
            <FavoriteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>{t('support')}</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleReset}>
          <ListItemIcon>
            <RestoreIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('reset')}</ListItemText>
        </MenuItem>
      </Menu>

      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <WebViewFrame
          key={refreshKey}
          url={currentUrl || homePage}
          onNavigate={updateCurrentUrl}
        />
      </Box>
    </Box>
  );
};
