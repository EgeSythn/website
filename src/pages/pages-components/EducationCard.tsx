import { Container } from "@mantine/core";

interface EducationCardProps {
  instituion: string;
  degree: string;
  startDate: string;
  endDate: string;
  image: string; // path to image
}

function EducationCard(props: EducationCardProps) {
  const { instituion, degree, startDate, endDate, image } = props;

  return (
    <Container>
        
    </Container>
  );
}

export default EducationCard;
