import {
    createTheme,
    PaletteColorOptions,
    ThemeProvider,
  } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    buttonAddCart: createColor('#FDFCE5'),
    Orange: createColor('#FF7700'),
    Red: createColor('#F53855'),
    
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
  },
});
export default theme;