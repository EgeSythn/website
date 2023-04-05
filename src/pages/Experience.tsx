import {
  Container,
  Title,
  Divider,
  useMantineTheme,
  Center,
  Image,
} from "@mantine/core";
import ExperienceCard from "./pages-components/ExperienceCard";
import inProgress from "../assets/inProgress.gif";

function Experience() {
  const theme = useMantineTheme();

  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title>Experience</Title>
      <Divider
        style={{ marginTop: "1.5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
      <Center>
        <Image src={inProgress} />
      </Center>
    </Container>
  );
}

export default Experience;
