import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Shell from "./layouts/Shell";
import NotFound from "./pages/NotFound";
import Loadable from "./layouts/layout-components/Loadable";
import useStoredTheme from "./hooks/useStoredTheme";

const Home = Loadable(lazy(() => import("./pages/Home")));
const Education = Loadable(lazy(() => import("./pages/Education")));
const Experience = Loadable(lazy(() => import("./pages/Experience")));
const Bonus = Loadable(lazy(() => import("./pages/Bonus")));

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
            <Route path="/" element={<Shell />}>
              <Route path="/" element={<Home />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
              <Route path="bonus" element={<Bonus />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
