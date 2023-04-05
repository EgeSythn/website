interface ExperienceCardProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  skills: string[];
  image: string; // path to image
  links: string[]; // array of links
}

function ExperienceCard(props: ExperienceCardProps) {
  const {
    name,
    description,
    startDate,
    endDate,
    location,
    skills,
    image,
    links,
  } = props;
  
  return <></>;
}

export default ExperienceCard;
