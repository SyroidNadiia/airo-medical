import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
    danger: '#cb5252',
  },
  palette: {
    primary: {
      main: '#0097a7',
      darker: '#7b1fa2',
    },
    neutral: {
      main: '#3a6fb9',
      contrastText: '#fff',
    },
  },
});
