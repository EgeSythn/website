import { Title, Container, Divider, useMantineTheme } from "@mantine/core";
import EducationCard from "./pages-components/EducationCard";
import jhu_icon from "../assets/jhu_icon.png";
import intro_sql from "../assets/Intro_to_SQL.png";
import advanced_sql from "../assets/Advanced_SQL.png";
import feature_engineering from "../assets/Feature_Engineering.png";
import intro_machine_learning from "../assets/Intro_to_Machine_Learning.png";
import intermediate_machine_learning from "../assets/Intermediate_Machine_Learning.png";
import python from "../assets/Python.png";

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
        "Dash",
        "Yarn",
        "npm",
      ],
      note: "Expertise with MERN and PERN stacks",
    },
    { name: "UI/UX Design", skills: ["Figma", "Canva"], note: "" },
    {
      name: "Machine Learning & Data Science",
      skills: ["Python", "PyTorch", "Pandas", "NumPy", "sci-kit learn"],
      note: "Expertise in data manipulation and visualizations with Python",
    },
    {
      name: "Other Programming Knowledge",
      skills: [
        "Java",
        "C",
        "C++",
        "Ruby",
        "Shell Script",
        "Git",
        "GitHub Actions",
      ],
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
        "pgAdmin",
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
    { name: "Intro to SQL", source: intro_sql },
    { name: "Advanced SQL", source: advanced_sql },
    { name: "Feature Engineering", source: feature_engineering },
    { name: "Intro to Machine Learning", source: intro_machine_learning },
    {
      name: "Intermediate Machine Learning",
      source: intermediate_machine_learning,
    },
    {
      name: "Python",
      source: python,
    },
  ];

  const termData = [
    {
      name: "Fall 2019",
      courses: [
        "Calculus I",
        "General Physics: Physical Science Major I",
        "General Physics Laboratory I",
        "SOUL: Wind Energy: Science, Technology, and Policy",
        "HEART: Machine Learning for Biomedical Applications",
        "Gateway Computing: JAVA",
      ],
      gpa: 3.57,
      cumulative: 3.57,
      deans: "Dean's List",
      notes: "",
    },
    {
      name: "Spring 2020",
      courses: [
        "Expository Writing: Negotiating Religious Difference",
        "Calculus II (For Physical Sciences and Engineering)",
        "General Physics: Physical Science Major II",
        "General Physics Laboratory II",
        "Intermediate Programming",
      ],
      gpa: null,
      cumulative: 3.57,
      deans: "N/A",
      notes:
        "GPA & Dean's List consideration not available due to Covid-19 closed grading policy, all grades evaluated on a Satisfactory/Unsatisfactory basis",
    },
    {
      name: "Fall 2020",
      courses: [
        "Introduction to Cognitive Neuropsychology",
        "Philosophy of Mind",
        "Research Methods in Psychology",
        "Discrete Mathematics",
        "Data Structures",
      ],
      gpa: 3.56,
      cumulative: 3.56,
      deans: "Dean's List",
      notes: "",
    },
    {
      name: "Intersession 2021",
      courses: ["Matlab for EVERYONE", "Python for EVERYONE"],
      gpa: null,
      cumulative: 3.56,
      deans: "N/A",
      notes:
        "Intersession courses are evaluated on a Satifactory/Unsatisfactory basis and do not receive Dean's List consideration",
    },
    {
      name: "Spring 2021",
      courses: [
        "Visual Cognition",
        "Neuroscience: Cognitive",
        "Linear Algebra",
        "Design & Statistical Analysis for Psychology",
        "Computer Ethics",
      ],
      gpa: 3.67,
      cumulative: 3.6,
      deans: "Dean's List",
      notes: "",
    },
    {
      name: "Fall 2021",
      courses: [
        "Introduction to Psychology",
        "Introduction to Social Psychology",
        "Intro to Probability",
        "Computer System Fundamentals",
        "Automata & Computation Theory",
      ],
      gpa: 3.75,
      cumulative: 3.63,
      deans: "Dean's List",
      notes: "",
    },
    {
      name: "Spring 2022",
      courses: [
        "Developmental Cognitive Neuroscience",
        "Foundations of Brain Behavior and Cognition",
        "Probability and Statistics for the Biological Sciences and Engineering",
        "User Interfaces and Mobile Applications",
        "Intro Algorithms",
      ],
      gpa: 3.81,
      cumulative: 3.67,
      deans: "Dean's List",
      notes: "",
    },
    {
      name: "Fall 2022",
      courses: [
        "Clinical Neuropsychology",
        "Full-Stack JavaScript",
        "Introduction to Human Language Technology",
        "Introduction to Human-Computer Interaction",
        "Independent Study",
      ],
      gpa: 3.93,
      cumulative: 3.71,
      deans: "Dean's List",
      notes:
        "Independent Study course taken during the term is a software development project under the supervision of Professor Ali Madooei on a Course Assistant Application Management System",
    },
    {
      name: "Spring 2023",
      courses: [
        "Cognitive Development",
        "The Ethics of Artificial Intelligence and Automation",
        "Artificial Intelligence",
        "Oral Presentations",
        "Independent Study",
      ],
      gpa: 4.0,
      cumulative: 3.75,
      deans: "Dean's List",
      notes:
        "Independent Study course taken during the term is a software development project under the supervision of Professor Ali Madooei on a Course Assistant Application Management System",
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
        totalCredits="126"
        gpa={"3.75"}
        location="Baltimore, MD"
        image={jhu_icon}
        skills={skills}
        certifications={certifications}
        termData={termData}
      />
    </Container>
  );
}

export default Education;
