const darkColors = {
  brand: {
    primary: "#FF0A2B",
    primary_dark: "#A9001C",
    primary_hover: "#E80025",
  },

  background: {
    main: "#05070A",
    surface: "#0B1016",
    card: "#111820",
  },

  text: {
    primary: "#FFFFFF",
    secondary: "#E8EDF2",
    muted: "#9AA4B2",
    disabled: "#5F6B78",
  },

  border: {
    default: "#252D36",
    divider: "#1C232C",
  },

  status: {
    success: "#22C55E",
    warning: "#F59E0B",
    info: "#3B82F6",
    error: "#EF233C",
  },

  gradient: {
    primary: [
      "#FF0A2B",
      "#E80025",
      "#A9001C",
    ],
  },
};

const lightColors= {
  brand: {
    primary: "#FF0A2B",
    primary_dark: "#A9001C",
    primary_hover: "#E80025",
  },

  background: {
    main: "#F8FAFC",
    surface: "#FFFFFF",
    card: "#FFFFFF",
  },

  text: {
    primary: "#0B1016",
    secondary: "#252D36",
    muted: "#667085",
    disabled: "#98A2B3",
  },

  border: {
    default: "#D0D5DD",
    divider: "#E4E7EC",
  },

  status: {
    success: "#16A34A",
    warning: "#D97706",
    info: "#2563EB",
    error: "#DC2626",
  },

  gradient: {
    primary: [
      "#FF0A2B",
      "#E80025",
      "#A9001C",
    ],
  },
};

export const Colors = {
  light: lightColors,
  dark: darkColors,
};

// Export individual color schemes for easier access
export { darkColors, lightColors };

// Utility type for color keys
export type ColorKeys = keyof typeof lightColors;

// Helper function to get color with opacity (useful for React Native)
export const withOpacity = (color: string, opacity: number) => {
  // Handle rgba colors
  if (color.startsWith('rgba')) {
    return color;
  }

  // Handle hex colors
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return color;
};
