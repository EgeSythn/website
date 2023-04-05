import { Container } from "@mantine/core";

interface ProjectCardProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  links: string[];
}

function ProjectCard(props: ProjectCardProps) {
  const { name, description, startDate, endDate, skills, links } = props;

  return <Container></Container>;
}

export default ProjectCard;
