import { useState, useEffect } from "react";
import {
  useMantineTheme,
  AppShell,
  Header,
  MediaQuery,
  Burger,
} from "@mantine/core";
import CustomNavbar from "../components/layout-components/CustomNavbar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [navbar, setNavbar] = useState(
    <CustomNavbar hidden={useMediaQuery("(min-width: 768px)")} />
  );
  const largerThanSm = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (largerThanSm) {
      setNavbar(<CustomNavbar hidden={false} />);
    } else {
      if (opened) {
        setNavbar(<CustomNavbar hidden={false} />);
      } else {
        setNavbar(<CustomNavbar hidden={true} />);
      }
    }
  }, [largerThanSm, opened]);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.blue[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={navbar}
      header={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Header
            height={{ base: 50, sm: 0 }}
            p="sm"
            style={{
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.blue[0],
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Burger
                opened={opened}
                onClick={() => {
                  setOpened((o) => !o);
                }}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </div>
          </Header>
        </MediaQuery>
      }
    >
      <Outlet />
    </AppShell>
  );
}

export default Shell;
