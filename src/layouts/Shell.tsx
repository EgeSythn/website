import { useState, useEffect } from "react";
import {
  useMantineTheme,
  AppShell,
  Header,
  Burger,
  Group,
  ActionIcon,
} from "@mantine/core";
import CustomNavbar from "./layout-components/CustomNavbar";
import { Outlet, useLocation } from "react-router-dom";
import useStoredTheme from "../hooks/useStoredTheme";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function Shell() {
  const { colorScheme, toggleColorScheme } = useStoredTheme();
  const theme = useMantineTheme();
  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const [navbar, setNavbar] = useState(<></>);

  const darkMode = () => {
    return (
      <Group position="right">
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.blue[6],
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[2],
            },
            borderRadius: "20px",
          })}
        >
          {colorScheme === "dark" ? (
            <IconSun size="1.2rem" />
          ) : (
            <IconMoonStars size="1.2rem" />
          )}
        </ActionIcon>
      </Group>
    );
  };

  useEffect(() => {
    setOpened(false);
  }, [location.pathname]);

  useEffect(() => {
    if (opened) {
      setNavbar(<CustomNavbar opened={opened} setOpened={setOpened} />);
    } else {
      setNavbar(<></>);
    }
  }, [opened]);

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
      navbar={navbar}
      header={
        <Header
          height={{ base: 50, sm: 50 }}
          p="sm"
          style={{
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.blue[4],
            borderBottom: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Burger
              opened={opened}
              onClick={() => {
                setOpened((o) => !o);
              }}
              size="sm"
              color={theme.colors.gray[2]}
            />
            {darkMode()}
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}

export default Shell;
