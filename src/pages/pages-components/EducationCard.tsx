import {
  Container,
  Card,
  Flex,
  Image,
  Stack,
  Accordion,
  Text,
} from "@mantine/core";
import { IconCertificate, IconBackpack } from "@tabler/icons-react";

interface EducationCardProps {
  institution: string;
  degree: string;
  study: string;
  startDate: string;
  endDate: string;
  image: string; // path to image
  location: string;
}

function EducationCard(props: EducationCardProps) {
  const { institution, degree, study, startDate, endDate, image, location } =
    props;

  return (
    <Container style={{ paddingTop: "5%" }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion defaultValue={institution} defaultChecked>
          <Accordion.Item value={institution}>
            <Accordion.Control>
              <Flex direction="row" gap="md" align="center">
                <IconBackpack size={25} />
                <Text size={25} fw={700}>
                  {institution}
                </Text>
              </Flex>
              <Flex direction="row" gap="md" align="center">
                <IconBackpack size={25} visibility="hidden" />
                <Text size={16} fw={500}>
                  {startDate} - {endDate}
                </Text>
              </Flex>
            </Accordion.Control>
            <Accordion.Panel>
              <Flex direction="row" align="flex-start">
                <Image
                  maw={200}
                  radius="md"
                  src={image}
                  style={{ paddingRight: "2.5%" }}
                />
                <Stack align="flex-start">
                  <Text size={16} fw={500}>
                    <strong>Degree:</strong> {degree}
                  </Text>
                  <Text size={16} fw={500}>
                    <strong>Areas of Study:</strong> {study}
                  </Text>
                  <Text size={16} fw={500}>
                    <strong>Location:</strong> {location}
                  </Text>
                </Stack>
              </Flex>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Certifications">
            <Accordion.Control>
              <Flex direction="row" gap="md" align="center">
                <IconCertificate size={25} />
                <Text size={25} fw={700}>
                  Kaggle Certifications
                </Text>
              </Flex>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size={16} fw={500} style={{ paddingLeft: "2.5%" }}></Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Container>
  );
}

export default EducationCard;
