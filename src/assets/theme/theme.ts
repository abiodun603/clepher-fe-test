
export const COLORS = {
    primary: "#210590",     // Light purple
    secondary: "#5D2DFD",   // Dark purple
    transparent: "rgba(0,0,0,0.1)",
    white: "#fff",
    black: "#110D0C",
    kblackCom: "#0D0D0D",
    blue: "#09185E",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#697A8D",
    kwhite: "#FFFFFF",
    kbackground: "#F8F8FB",
    kgrey: "#555B6D",
    kbadge: "#FA6A6A",
    kgreen: "#12B76A"

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 24,
    h3: 16,
    h4: 14,
    h15: 15,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    sidebar: "14.25rem"
};
export const FONTS = {
    h1: {  fontSize: SIZES.h1, lineHeight: 36 },
    h2: {  fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: {  fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: {  fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
