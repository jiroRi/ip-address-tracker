const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktopS: "1440px",
  desktopM: "1920px",
  desktopL: "2560px",
};

export const theme = {
  colors: {
    gray: "hsl(0, 0%, 59%)",
    darkGray: "hsl(0, 0%, 17%)",
    black: "hsl(0, 0%, 0%)",
    white: "#ffffff",
    red: "#BD1111",
  },

  fontSize: {
    title: "2rem",
    mobileTitle: "1.25rem",

    label: "0.75rem",
    mobileLabel: "0.625rem",

    card: "1.5rem",
    mobileCard: "1rem",

    input: "1.125rem",
    mobileInput: "1rem",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktopS: `(min-width: ${size.desktopS})`,
    desktopM: `(min-width: ${size.desktopM})`,
    desktopL: `(min-width: ${size.desktopL})`,
  },
};
