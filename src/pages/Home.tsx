import {
  useMantineTheme,
  Container,
  Title,
  Text,
  Divider,
  Center,
  Button,
  Grid,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Map from "./pages-components/Map";

function Home() {
  const theme = useMantineTheme();
  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title order={1}>Welcome!</Title>
      <Divider
        style={{ marginTop: "1.5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
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
             If you are a recruiter, and want to access my detailed resume or
            transcript, please fill out the form below and I will get back to
            you as soon as possible. Thank you!
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
        <Title order={3} style={{ paddingTop: "2.5%", paddingBottom: "2.5%" }}>
          ✨ Enjoy Your Stay ✨
        </Title>
      </Center>
    </Container>
  );
}

export default Home;
