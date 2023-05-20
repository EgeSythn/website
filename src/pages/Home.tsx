import {
  useMantineTheme,
  Container,
  Title,
  Text,
  Center,
  Button,
  Grid,
  createStyles,
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { IconExternalLink } from "@tabler/icons-react";
import Map from "./pages-components/Map";

const useStyles = createStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "200px",
    padding: "50px 0",
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  curve: {
    position: "absolute",
    height: "5px",
    width: "100%",
    left: 0,
    right: 0,
  },
  curve2: {
    position: "absolute",
    height: "5px",
    width: "100%",
    rotate: "180deg",
    left: 0,
    right: 0,
  },
  curve3: {
    position: "absolute",
    height: "225px",
    width: "100%",
    top: 50,
    left: 0,
    right: 0,
  },
}));

const waveFront = (style: any) => {
  const theme = useMantineTheme();
  return (
    <>
      <div className={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={
            theme.colorScheme === "dark" ? "0 100 1440 320" : "0 40 1240 320"
          }
        >
          <path
            fill={theme.colors.blue[4]}
            fillOpacity={theme.colorScheme === "dark" ? "1" : "0.3"}
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,197.3C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={
            theme.colorScheme === "dark" ? "0 80 1390 320" : "0 60 1320 320"
          }
        >
          <path
            fill={theme.colors.blue[4]}
            fillOpacity={theme.colorScheme === "dark" ? "0.7" : "0.5"}
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,197.3C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={
            theme.colorScheme === "dark" ? "0 60 1320 320" : " 0 80 1390 320"
          }
        >
          <path
            fill={theme.colors.blue[4]}
            fillOpacity={theme.colorScheme === "dark" ? "0.5" : "0.7"}
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,197.3C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={
            theme.colorScheme === "dark" ? "0 40 1240 320" : "0 100 1440 320"
          }
        >
          <path
            fill={theme.colors.blue[4]}
            fillOpacity={theme.colorScheme === "dark" ? "0.3" : "1"}
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,197.3C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

function Home() {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={classes.section}>{waveFront(classes.curve3)}</div>
      <div className={classes.section}>
        <TypeAnimation
          sequence={[
            "Hi, I'm a student!",
            1000,
            "Hi, I'm an engineer!",
            1000,
            "Hi, I'm Ege!",
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            height: "200px",
            textAlign: "center",
            background: `linear-gradient(90deg, ${theme.colors.blue[4]} 0%, ${theme.colors.red[7]} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "2%",
            marginBottom: "20px",
          }}
        />
      </div>
      <div className={classes.section}>
        {waveFront(classes.curve2)}
        {waveFront(classes.curve)}
      </div>
      <Container style={{ paddingTop: "2.5%", marginTop: "20px" }}>
        <Title order={2} style={{ paddingTop: "5%" }}>
          Who am I?
        </Title>
        <Grid gutter="md" style={{ paddingTop: "2.5%" }}>
          <Grid.Col span={12}>
            <Text size={18} style={{ lineHeight: "1.6" }}>
              &emsp;Hi! My name is
              <Text
                span
                component="span"
                variant="gradient"
                gradient={{
                  from: `${theme.colors.blue[4]}`,
                  to: `${theme.colors.red[7]}`,
                  deg: 90,
                }}
                size={18}
                fw={700}
              >
                &nbsp;Ege Seyithanoglu
              </Text>
              .&nbsp;I am a software developer that is excited about full-stack
              development, web technologies, machine learning and all kinds of
              other stuff!
              <Text
                size={18}
                style={{
                  paddingTop: "2.5%",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                &emsp;I am Turkish-American, and originally from the beautiful
                coastal city of Izmir, Turkey, where I lived up until college.
                Currently, I am situated in Baltimore, Maryland; the Charm City!
                <Map />
              </Text>
            </Text>
          </Grid.Col>
        </Grid>
        <Title order={2} style={{ paddingTop: "5%" }}>
          What is this website about?
        </Title>
        <Grid gutter="md" style={{ paddingTop: "2.5%" }}>
          <Grid.Col span={12}>
            <Text
              size={18}
              style={{
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              &emsp;This website is a collection of my projects, my experience,
              and some other information. It is also a place where I can keep
              track of my progress as a developer, and share it with the greater
              engineering and tech community.
            </Text>
            <Text size={18} style={{ lineHeight: "1.6", marginBottom: "24px" }}>
              &emsp;Hopefully, within this website, you will be able to get a
              better understanding of who I am and what I do. There are certain
              limitations I have to abide by in terms of sharing projects I am
              involved with, either due to privacy concerns, or intellectual
              rights. If you have any questions, feel free to contact me!
            </Text>
            <Text size={18} style={{ lineHeight: "1.6", marginBottom: "24px" }}>
              &emsp;If you are a recruiter, and want to access my detailed
              resume, transcript, or any other additional information, please
              fill out the form below and I will get back to you as soon as
              possible. Thank you!
            </Text>
          </Grid.Col>
        </Grid>
        <Center style={{ marginBottom: "24px" }}>
          <Button
            variant="outline"
            radius="xl"
            rightIcon={<IconExternalLink size={15} />}
            onClick={() =>
              window.open("https://forms.gle/CjLDnHVoThv2kiYB7", "_blank")
            }
          >
            Fill Out Form
          </Button>
        </Center>
        <Center>
          <Title
            order={3}
            style={{ paddingTop: "2.5%", paddingBottom: "2.5%" }}
          >
            ✨ Enjoy Your Stay ✨
          </Title>
        </Center>
      </Container>
    </>
  );
}

export default Home;
