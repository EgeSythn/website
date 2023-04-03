import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Shell from "./layouts/Shell";
import NotFound from "./pages/NotFound";
import Loadable from "./components/Loadable";
import useStoredTheme from "./hooks/useStoredTheme";

const Home = Loadable(lazy(() => import("./pages/home/Home")));

function App() {
  const { colorScheme, toggleColorScheme } = useStoredTheme();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
          <ModalsProvider>
            <Routes>
              <Route path="*" element={<NotFound />}/>
              <Route path="/" element={<Shell />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>

          </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
