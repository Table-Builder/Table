import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
    palette: {
        primary: {
            main: '#222629',
            light: '#909aa2',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#86C232',
            light: '#a3d55d',
            dark: '#385115',
            contrastText: '#000000',
        },
    },
});

export default myTheme;
