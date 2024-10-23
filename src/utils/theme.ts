import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#013066',
    light : '#2196F3'
  },
  secondary: {
    main: '#E9F2FF',
    dark : '#5A5A5A',
  },
  tertiary: {
    main: '#E1BC30',
  },
  error: {
    main: "#FF00009E",
  },
  disabled : {
    main : '#BCBCBC'
  },
  success : {
    main : "#5CC07F"
  },
  warning : {
    main : '#E1BC30'
  },
  danger : {
    main : '#FF00009E'
  },
};

export const menuSelectStatus = {
  sx: {
    '.MuiPaper-root': {
      backgroundColor: '#EDEEE9',
    },
    borderRadius: '4px',
    boxShadow:
      '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  },
};

export const autocompleteStyle = {
  '.MuiAutocomplete-inputRoot': {
    height: '32px',
  },
  '.MuiAutocomplete-input': {
    display: 'flex',
    height: '1px',
    padding: '0px 6px',
    alignItems: 'center',
    gap: '4px',
    flex: '1 0 0',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px' /* 133.333% */,
  },
};

export const listItemStyle = {
  height: '32px',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '16px' /* 133.333% */,
};

export const theme = createTheme({ palette });
