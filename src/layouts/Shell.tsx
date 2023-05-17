import { useState, useEffect } from "react";
import { useMantineTheme, AppShell, Header, Burger } from "@mantine/core";
import CustomNavbar from "./layout-components/CustomNavbar";
import { Outlet } from "react-router-dom";

function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [navbar, setNavbar] = useState(
    <CustomNavbar opened={opened} setOpened={setOpened} />
  );

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
      }
    >
      <Outlet />
    </AppShell>
  );
}

export default Shell;
