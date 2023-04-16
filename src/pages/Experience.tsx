import { Container, Title, Divider, useMantineTheme } from "@mantine/core";
import ExperienceCard from "./pages-components/ExperienceCard";
import jhu_icon from "../assets/jhu_icon.png";
import milemarker from "../assets/milemarker.png";
import mySev from "../assets/mySev.png";
import blue_jay from "../assets/blue_jay.png";
import dash_icon from "../assets/dash_icon.png";

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
          "Linear Regression Web Tool",
        ]}
        descriptions={[
          ["Data Science Intern", " Full-Stack Software Engineering Intern"],
          ["Mathematical Foundations for Computer Science Lead Course Assistant", "Automata and Computation Theory Course Assistant"],
          ["Study Consultant"],
          ["AI & Machine Learning Workshop Instructor"],
          ["Front-End Lead", "Full-Stack Developer (PERN Stack)"],
          ["Front-End Developer (React)"],
          ["Android Developer (Java)"],
          ["Front-End Developer (Dash)"],
        ]}
        startDates={[
          "June 2022",
          "January 2022",
          "September 2021",
          "August 2021",
          "Fall 2022",
          "Fall 2022",
          "Spring 2022",
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
          "Spring 2022",
        ]}
        locations={[
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
          "Turkey (Remote)",
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
          "United States / DC – Baltimore Area",
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
          [
            "Used Dash to create a single page web application for linear regression",
            "Engaged in data visualizations",
            "Documented development process and user guide",
          ],
        ]}
        images={[
          milemarker,
          jhu_icon,
          jhu_icon,
          mySev,
          jhu_icon,
          jhu_icon,
          blue_jay,
          dash_icon,
        ]}
        links={[
          ["http://milemarker.me/"],
          [],
          ["https://academicsupport.jhu.edu/study-consulting/"],
          ["https://www.linkedin.com/company/mysev-bootcamp/"],
          ["https://www.linkedin.com/company/jhu-collab/mycompany/"],
          [
            "https://github.com/EgeSythn/hci_project_2",
            "https://egesythn.github.io/hci_project_2/",
          ],
          [
            "https://github.com/HopReview/HopReview",
            "https://www.figma.com/file/ryJtpAtK2IzIzZgqsswa1Q/T2?node-id=0%3A1&t=HMfJauiKtIyrodYA-1",
          ],
          [
            "https://github.com/ayousuf23/ai-final-project",
            "https://linear-regression-viz.herokuapp.com/",
          ],
        ]}
      />
    </Container>
  );
}

export default Experience;
