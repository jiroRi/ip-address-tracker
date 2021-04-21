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
  },

  fontSize: {
    title: "1.125rem",
    mobileTitle: "1.5rem",

    label: "0.5rem",
    mobileLabel: "0.625rem",

    card: "0.875rem",
    mobileCard: "1.25rem",

    mobileInput: "1.125rem",
    input: "0.625rem",
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
