import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  rem,
  createStyles,
  getStylesRef,
  Text,
  Stack,
  Group,
  Navbar,
  ActionIcon,
  Title,
  Flex,
  Center,
} from "@mantine/core";
import {
  IconSun,
  IconHome,
  IconGift,
  IconBackpack,
  IconMoonStars,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import sunny from "../../assets/sunny.png";
import moon from "../../assets/moon.png";
import useStoredTheme from "../../hooks/useStoredTheme";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.blue[4],
    borderRight: "none",
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

  halfCircle: {
    position: "relative",
    width: "200px",
    height: "100px",
    border:
      theme.colorScheme === "dark"
        ? `2px solid ${theme.colors.blue[4]}`
        : `2px solid ${theme.colors.dark[4]}`,
    borderRadius: "100px 100px 0 0",
    borderBottom: "0",
    background: "transparent",
    boxSizing: "border-box",
  },

  overlayImage: {
    position: "absolute",
    width: "30px",
    height: "30px",
  },

  time: {
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[0]
        : theme.colors.dark[7],
  },
}));

const data = [
  { name: "Home", icon: IconHome, to: "/" },
  { name: "Education", icon: IconBackpack, to: "/education" },
  { name: "Experience", icon: IconBrandGithub, to: "/experience" },
  { name: "Bonus", icon: IconGift, to: "/bonus" },
];

interface CustomNavbarProps {
  opened: boolean;
  setOpened: Function;
}

function CustomNavbar(props: CustomNavbarProps) {
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useStoredTheme();
  const location = useLocation();
  const [timeOfDay, setTimeOfDay] = useState<number>(() =>
    new Date().getHours()
  );
  const [currentMinutes, setCurrentMinutes] = useState<number>(() =>
    new Date().getMinutes()
  );
  const [isDay, setIsDay] = useState<boolean>(
    () => timeOfDay >= 8 && timeOfDay < 20
  );

  const [active, setActive] = useState(() => {
    const pathname = location.pathname;
    const label = data.find((item) => item.to === pathname)?.name;
    return (label ? label : "Home") as string;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      setTimeOfDay((prevTimeOfDay) => currentHour);
      setIsDay((prevIsDay) => currentHour >= 8 && currentHour < 20);
      setCurrentMinutes((prevCurrentMinutes) => currentMinute);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const label = data.find((item) => item.to === location.pathname)?.name;
    setActive((label ? label : "Home") as string);
  }, [location.pathname]);

  const greeting = (
    <Title
      order={5}
      align="center"
      style={{ paddingTop: "2.5%", paddingBottom: "2.5%" }}
    >
      {timeOfDay < 12 && timeOfDay >= 8
        ? "Good Morning"
        : timeOfDay < 17
        ? "Good Afternoon"
        : timeOfDay < 20
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

  const image = () => {
    let degree = isDay
      ? ((timeOfDay - 8) / 12) * 180
      : (((timeOfDay + 4) % 24) / 12) * 180;

    degree += currentMinutes * 0.25;

    let theta = (degree / 180) * Math.PI;
    let radius = 100;
    let newX = radius * (1 - Math.cos(theta)) - 15;
    let newY = radius * Math.sin(theta) - 15;

    return (
      <>
        <img
          src={isDay ? sunny : moon}
          className={classes.overlayImage}
          style={{
            left: `${newX}px`,
            bottom: `${newY}px`,
          }}
          alt="time of day"
        />
      </>
    );
  };

  const topSection = () => {
    return (
      <>
        {darkMode()}
        <Center>
          <div className={classes.halfCircle}>
            {image()}

            <div className={classes.time}>
              {`${timeOfDay} : ${
                currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
              }`}
            </div>
          </div>
        </Center>

        {greeting}
        <Stack
          style={{ paddingTop: "5%", paddingBottom: "5%" }}
          justify="center"
          align="center"
        >
          {mediaButtons()}
          <a
            href="mailto:dev_seyithan@outlook.com?subject=Web Contact: <Enter Subject Here>"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Text weight={500} size="sm" className={classes.title} mb="xs">
              dev_seyithan@outlook.com
            </Text>
          </a>
        </Stack>
      </>
    );
  };

  return (
    <Navbar
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
      hidden={!props.opened}
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
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
