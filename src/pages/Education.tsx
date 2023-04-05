import { Title, Container, Divider, useMantineTheme } from "@mantine/core";
import EducationCard from "./pages-components/EducationCard";
import jhu_logo from "../assets/jhu_logo.png";
import Intro_to_SQL from "../assets/Intro_to_SQL.png";
import Advanced_SQL from "../assets/Advanced_SQL.png";
import Feature_Engineering from "../assets/Feature_Engineering.png";
import Intro_to_Machine_Learning from "../assets/Intro_to_Machine_Learning.png";
import Intermediate_Machine_Learning from "../assets/Intermediate_Machine_Learning.png";

function Education() {
  const theme = useMantineTheme();
  const skills = [
    {
      name: "Full-Stack Development",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Express",
        "Node.js",
        "MongoDB",
        "SQL",
        "PostgreSQL",
      ],
      note: "Expertise with MERN and PERN stacks",
    },
    { name: "UI/UX Design", skills: ["Figma", "Canva"], note: "" },
    {
      name: "Machine Learning & Data Science",
      skills: ["Python", "R"],
      note: "Expertise in data manipulation and visualizations with Python",
    },
    {
      name: "Other Programming Knowledge",
      skills: ["Java", "C", "C++", "Ruby", "Git"],
      note: "",
    },
    { name: "Operating Systems", skills: ["Windows", "Linux"], note: "" },
    {
      name: "Software & Development Tools",
      skills: [
        "Visual Studio Code",
        "Android Studio",
        "JetBrains Suite",
        "LaTeX",
      ],
      note: "",
    },
    {
      name: "Foreign Languages",
      skills: ["Turkish (Native)", "Spanish (Beginner)"],
      note: "",
    },
  ];
  const certifications = [
    { name: "Intro to SQL", source: Intro_to_SQL },
    { name: "Advanced SQL", source: Advanced_SQL },
    { name: "Feature Engineering", source: Feature_Engineering },
    { name: "Intro to Machine Learning", source: Intro_to_Machine_Learning },
    {
      name: "Intermediate Machine Learning",
      source: Intermediate_Machine_Learning,
    },
  ];

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
        location="Baltimore, MD"
        image={jhu_logo}
        skills={skills}
        certifications={certifications}
      />
    </Container>
  );
}

export default Education;
