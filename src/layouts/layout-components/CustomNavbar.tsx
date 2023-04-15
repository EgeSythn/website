import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  rem,
  createStyles,
  getStylesRef,
  Text,
  Stack,
  Group,
  Center,
  Navbar,
  Avatar,
  ActionIcon,
  Tooltip,
  Title,
  Flex,
} from "@mantine/core";
import {
  IconSun,
  IconHome,
  IconTool,
  IconGift,
  IconBackpack,
  IconMoonStars,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import panda from "../../assets/panda.png";
import useStoredTheme from "../../hooks/useStoredTheme";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.blue[3],
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[0]
        : theme.colors.dark[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: "filled",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.blue[4],
        }).background!,
        0.1
      ),
      borderRadius: theme.radius.xl,
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[0]
        : theme.colors.dark[7],
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: "filled",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.blue[0],
        }).background!,
        0.15
      ),
      borderRadius: theme.radius.xl,
      [`& .${getStylesRef("icon")}`]: {
        opacity: 0.9,
      },
    },
  },

  title: {
    letterSpacing: rem(-0.25),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[0]
        : theme.colors.dark[7],
    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[4]
          : theme.colors.blue[0],
    },
  },

  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[0]
        : theme.colors.dark[7],
    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[4]
          : theme.colors.blue[0],
    },
  },

  tooltip: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.blue[0],
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.blue[4]
    }`,
  },
}));

const data = [
  { name: "Home", icon: IconHome, to: "/" },
  { name: "Education", icon: IconBackpack, to: "/education" },
  { name: "Experience", icon: IconBrandGithub, to: "/experience" },
  { name: "Tools", icon: IconTool, to: "/tools" },
  { name: "Bonus", icon: IconGift, to: "/bonus" },
];

interface CustomNavbarProps {
  hidden: boolean;
  setOpened: Function;
}

function CustomNavbar(props: CustomNavbarProps) {
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useStoredTheme();
  const location = useLocation();
  const [active, setActive] = useState(() => {
    const pathname = location.pathname;
    const label = data.find((item) => item.to === pathname)?.name;
    return (label ? label : "Home") as string;
  });

  useEffect(() => {
    const label = data.find((item) => item.to === location.pathname)?.name;
    setActive((label ? label : "Home") as string);
    props.setOpened(false);
  }, [location.pathname]);

  const time = new Date().getHours();
  const greeting = (
    <Title order={3} align="center" style={{ paddingTop: "2.5%" }}>
      {time < 12
        ? "Good Morning"
        : time < 17
        ? "Good Afternoon"
        : time < 19
        ? "Good Evening"
        : "Good Night"}
    </Title>
  );

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

  const label = () => {
    return (
      <>
        <Center style={{ paddingBottom: "5%" }}>
          <Title order={4}>Why No Profile Image?</Title>
        </Center>
        I appreacite your interest in seeing my image. While it's not cruical to
        get to know me, a quick Google search should help you out.
        <br />
        <br />
        Thank you for understanding and happy browsing!
      </>
    );
  };

  const mediaButtons = () => {
    return (
      <Flex gap="xs" direction="row" style={{ marginBottom: "-0.75rem" }}>
        <ActionIcon
          onClick={() => window.open("https://github.com/EgeSythn", "_blank")}
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[0]
                : theme.colors.dark[7],
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[2],
            },
          })}
        >
          <IconBrandGithub size="1.5rem" />
        </ActionIcon>
        <ActionIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ege-seyithanoglu-847570141/",
              "_blank"
            )
          }
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[6]
                : theme.colors.dark[7],
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[2],
            },
          })}
        >
          <IconBrandLinkedin size="1.5rem" />
        </ActionIcon>
      </Flex>
    );
  };

  const topSection = () => {
    return (
      <>
        {darkMode()}
        {greeting}
        <Stack style={{ paddingTop: "5%" }} justify="center" align="center">
          <Tooltip
            multiline
            withArrow
            width={220}
            className={classes.tooltip}
            label={label()}
          >
            <Avatar radius="xl" size="xl" src={panda} />
          </Tooltip>
          {mediaButtons()}
          <a
            href="mailto:dev_seyithan@outlook.com?subject=Web Contact: <Enter Subject Here>"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Text weight={500} size="md" className={classes.title} mb="xs">
              dev_seyithan@outlook.com
            </Text>
          </a>
        </Stack>
      </>
    );
  };

  const bottomSection = () => {
    return (
      <Center>
        <a
          href="https://www.flaticon.com/free-icons/panda"
          target="_blank"
          title="panda icons"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Text size="xs" className={classes.text}>
            Panda icon created by Freepik - Flaticon
          </Text>
        </a>
      </Center>
    );
  };

  return (
    <Navbar
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
      style={{ display: props.hidden ? "none" : "block" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Navbar.Section>{topSection()}</Navbar.Section>
          <Navbar.Section grow>
            {data.map((item, index) => (
              <NavLink
                key={index}
                className={cx(classes.link, {
                  [classes.linkActive]: item.name === active,
                })}
                to={item.to}
                onClick={() => {
                  setActive(item.name);
                }}
              >
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </Navbar.Section>
        </div>
        <Navbar.Section className={classes.footer}>
          {bottomSection()}
        </Navbar.Section>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
