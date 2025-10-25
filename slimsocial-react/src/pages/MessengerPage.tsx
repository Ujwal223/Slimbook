import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { Close as CloseIcon, Message as MessageIcon } from '@mui/icons-material';
import { WebViewFrame } from '../components/WebViewFrame';
import { MESSENGER_URL } from '../utils/constants';
import { useStore } from '../store/useStore';

export const MessengerPage = () => {
  const navigate = useNavigate();
  const { messengerUrl } = useStore();
  const [refreshKey] = useState(0);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MessageIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Messenger</Typography>
          </Box>

          <IconButton edge="end" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <WebViewFrame
          key={refreshKey}
          url={messengerUrl || MESSENGER_URL}
          isMessenger
        />
      </Box>
    </Box>
  );
};
