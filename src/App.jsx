import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";
import RouterConfig from "./components/router/RouterConfig";
import { IntegrationContextProvider } from "./components/integrationContext/IntegrationContext";

function App() {
  return (
    <IntegrationContextProvider>
    <ThemeProvider theme={theme}>
      <RouterConfig />
    </ThemeProvider>
    </IntegrationContextProvider>
  );
}

export default App;
