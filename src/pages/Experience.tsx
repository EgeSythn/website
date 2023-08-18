import { Container, Title, Divider, useMantineTheme } from "@mantine/core";
import ExperienceCard from "./pages-components/ExperienceCard";
import {
  names,
  descriptions,
  startDates,
  endDates,
  locations,
  skillsExperience,
  images,
  images_alt,
  links,
} from "../assets/data";

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
      <ExperienceCard
        names={names}
        descriptions={descriptions}
        startDates={startDates}
        endDates={endDates}
        locations={locations}
        skills={skillsExperience}
        images={images}
        images_alt={images_alt}
        links={links}
      />
    </Container>
  );
}

export default Experience;
