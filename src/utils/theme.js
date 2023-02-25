import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#52d1e7',
    },
    secondary: {
      main: '#0097a7',
    },
    error: {
      main: '#e67d74',
    },
    warning: {
      main: '#ebb660',
    },
    background: {
      main: '#f2f2f2',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Montserrat',
    htmlFontSize: 16,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fff',
          color: '#333',
          boxSizing: 'border-box',
        },
      },
    },
  },
  props: {
    MuiListItemIcon: {
      root: {
        minWidth: 36,
      },
    },

    MuiAppBar: {
      color: 'inherit',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
});