import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6C63FF" },
    background: { default: "#F7F8FA" },
    text: {
      primary: "#111",
      secondary: "#555",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h2: { fontWeight: 800 },
    h4: { fontWeight: 700 },
  },
});

export default theme;
