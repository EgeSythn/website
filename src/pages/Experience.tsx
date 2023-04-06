import {
  Container,
  Title,
  Divider,
  useMantineTheme,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import ExperienceCard from "./pages-components/ExperienceCard";
import hard_hat from "../assets/hard_hat.png";

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
      <Stack style={{ paddingTop: "2.5%" }} align="center">
        <Image src={hard_hat} maw={240} />
        <Text size={25} weight={700}>
          Page Under Construction
        </Text>
        <Text size={10}>
          <a
            href="https://www.flaticon.com/free-icons/work-in-progress"
            title="work in progress icons"
          >
            Work in progress icons created by Freepik - Flaticon
          </a>
        </Text>
      </Stack>
    </Container>
  );
}

export default Experience;
