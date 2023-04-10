import { Container, Title, Divider, useMantineTheme } from "@mantine/core";
import ExperienceCard from "./pages-components/ExperienceCard";
import jhu_icon from "../assets/jhu_icon.png";
import milemarker from "../assets/milemarker.png";
import mySev from "../assets/mySev.png";
import blue_jay from "../assets/blue_jay.png";

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
        names={[
          "MileMarker (EduMD, LLC) – Resident Health Education System",
          "JHU Computer Science Department",
          "JHU Study Consulting Program",
          "mySEV Bootcamp",
          "Project CAAMS – JHU CS Department Course Assistant Application System",
          "Wealth, Health, and Racial Inequality",
          "HopReview - JHU Course Review Application",
        ]}
        descriptions={[
          "Data Science & Software Engineering Intern",
          "Automata and Computation Theory Course Assistant / Mathematical Foundations for Computer Science Lead Course Assistant",
          "Study Consultant",
          "AI & Machine Learning Workshop Instructor",
          "Full-stack Developer / Front-end Lead (PERN Stack)",
          "Front-end Developer (React)",
          "Android Developer",
        ]}
        startDates={[
          "June 2022",
          "January 2022",
          "September 2021",
          "August 2021",
          "Fall 2022",
          "Fall 2022",
          "Spring 2022",
        ]}
        endDates={[
          "August 2022",
          "Present",
          "Present",
          "August 2021",
          "Present",
          "Fall 2022",
          "Spring 2022",
        ]}
        locations={[
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
          "Turkey (Remote)",
          "United States / DC – Baltimore Area", // Location not specified, leave empty or add a location if available
          "United States / DC – Baltimore Area", // Location not specified, leave empty or add a location if available
          "United States / DC – Baltimore Area", // Location not specified, leave empty or add a location if available
        ]}
        skills={[
          [
            "Developed machine learning models",
            "Created data visualizations and dashboard prototypes",
            "Contributed to front end development",
            "Designed UI wireframes and prototypes",
            "Introduced UX features",
          ],
          [
            "Provided feedback to students",
            "Organized student help sessions",
            "Instructed weekly classes",
          ],
          [
            "Organized in-person and virtual meetings",
            "Developed personalized plans for students",
          ],
          [
            "Instructed workshop for high school students",
            "Prepared a curriculum of theoretical Machine Learning",
          ],
          [
            "Designed and implemented front-end features using React",
            "Lead the front-end developer team",
          ],
          [
            "Designed and implemented visualizations",
            "Handled and organized JSON data",
            "Deployed features to production using GitHub Actions",
          ],
          [
            "Conducted user research",
            "Prototyped UI/UX designs with Figma",
            "Worked in an Agile development team",
            "Created mock datasets and integrated front-end and back-end",
          ],
        ]}
        images={[
          milemarker, // Add image paths or URLs here
          jhu_icon,
          jhu_icon,
          mySev,
          jhu_icon,
          jhu_icon,
          blue_jay,
        ]}
        links={[
          "http://milemarker.me/", // Add project links or repository URLs here
          "",
          "https://academicsupport.jhu.edu/study-consulting/",
          "https://www.linkedin.com/company/mysev-bootcamp/",
          "https://www.linkedin.com/company/jhu-collab/mycompany/",
          "https://github.com/EgeSythn/hci_project_2",
          "https://github.com/HopReview/HopReview",
        ]}
      />
    </Container>
  );
}

export default Experience;
