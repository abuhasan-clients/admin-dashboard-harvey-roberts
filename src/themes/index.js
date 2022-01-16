import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    const color = colors;
    // const light = {
    //     palette: {
    //         type: 'light'
    //     }
    // };
    // const dark = {
    //     palette: {
    //         type: 'dark'
    //     }
    // };

    const themeOption = {
        colors: color,
        heading: customization?.themeChange === 'light' ? color.grey900 : color.grey300,
        paper: customization?.themeChange === 'light' ? color.paper : color.darkPaper,
        backgroundDefault: customization?.themeChange === 'light' ? color.paper : color.darkPaper,
        background: customization?.themeChange === 'light' ? color.primaryLight : color.darkBackground,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: customization?.themeChange === 'light' ? color.grey900 : color.grey200,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);
    return themes;
};

export default theme;
