import {
  useMantineTheme,
  Container,
  Title,
  Text,
  Flex,
  Divider,
  Center,
} from "@mantine/core";

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
      <Flex style={{ paddingTop: "2.5%" }} align="center" wrap="nowrap">
        <Text size={18} style={{ lineHeight: "1.6", paddingLeft: "2.5%" }}>
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
          development, web technologies, machine learning and all kinds of other
          stuff!
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
      </Flex>
      <Title order={2} style={{ paddingTop: "5%" }}>
        What is this website about?
      </Title>
      <Text
        size={18}
        style={{
          paddingTop: "2.5%",
          paddingLeft: "2.5%",
          lineHeight: "1.6",
          marginBottom: "24px",
        }}
      >
        &emsp;This website is a collection of my projects, my experience, and
        some other information. It is also a place where I can keep track of my
        progress as a developer, and share it with the greater engineering and
        tech community.
      </Text>
      <Text size={18} style={{ lineHeight: "1.6", paddingLeft: "2.5%" }}>
        &emsp;Hopefully, within this website, you will be able to get a better
        understanding of who I am and what I do. There are certain limitations I
        have to abide by in terms of sharing projects I am involved with, either
        due to privacy concerns, or intellectual rights. If you have any
        questions, feel free to contact me!
      </Text>
      <Center>
        <Title order={3} style={{paddingTop: "2.5%"}}>
          Happy Browsing!
        </Title>
      </Center>
    </Container>
  );
}

export default Home;
