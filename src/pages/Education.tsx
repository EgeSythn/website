import { Title, Container, Divider, useMantineTheme } from "@mantine/core";
import EducationCard from "./pages-components/EducationCard";
import jhu_icon from "../assets/jhu_icon.png";
import { skillsEducation, certifications, termData } from "../assets/data";

function Education() {
  const theme = useMantineTheme();
  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title>Education</Title>
      <Divider
        style={{ marginTop: "1.5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
      <EducationCard
        institution="Johns Hopkins University"
        degree="Bachelor of Science"
        study="Computer Science & Cognitive Science"
        startDate="August 2019"
        endDate="May 2023"
        totalCredits="126"
        gpa={"3.75"}
        location="Baltimore, MD"
        image={jhu_icon}
        image_alt="Johns Hopkins University Logo"
        skills={skillsEducation}
        certifications={certifications}
        termData={termData}
      />
    </Container>
  );
}

export default Education;
