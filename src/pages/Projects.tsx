import { Container, Title, Divider, useMantineTheme } from "@mantine/core";
import ProjectCard from "./pages-components/ProjectCard";

function Projects() {
  const theme = useMantineTheme();

  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title>Projects</Title>
      <Divider
        style={{ marginTop: "1.5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
    </Container>
  );
}

export default Projects;
