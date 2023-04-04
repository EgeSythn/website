import { useState } from "react";
import {
  useMantineTheme,
  AppShell,
  Header,
  MediaQuery,
  Burger,
} from "@mantine/core";
import CustomNavbar from "../components/layout-components/CustomNavbar";
import { Outlet } from "react-router-dom";

function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

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
      navbar={<CustomNavbar hidden={opened} />}
      header={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Header height={{ base: 50, sm: 0 }} p="sm">
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
