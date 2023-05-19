import {
  Container,
  Card,
  Flex,
  Image,
  Stack,
  Accordion,
  Text,
  Button,
  Title,
  Badge,
  Group,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconPencil,
  IconBackpack,
  IconCertificate,
  IconExternalLink,
} from "@tabler/icons-react";

interface EducationCardProps {
  institution: string;
  degree: string;
  study: string;
  startDate: string;
  endDate: string;
  gpa: string;
  image: string;
  location: string;
  skills: { name: string; skills: string[]; note: string }[];
  certifications: { name: string; source: string }[];
}

function EducationCard(props: EducationCardProps) {
  const {
    institution,
    degree,
    study,
    startDate,
    endDate,
    gpa,
    image,
    location,
    skills,
    certifications,
  } = props;

  const institution_control = (
    <>
      <Flex direction="row" gap="md" align="center">
        {useMediaQuery("(min-width: 600px)") && <IconBackpack size={25} />}
        <Text size={25} fw={700}>
          {institution}
        </Text>
      </Flex>
    </>
  );

  const institution_panel = (
    <Flex direction="row" align="flex-start">
      {!useMediaQuery("(max-width: 600px)") && (
        <Image
          maw={200}
          radius="md"
          src={image}
          style={{ paddingRight: "2.5%" }}
        />
      )}
      <Stack align="flex-start">
        <Text size={15} fw={500}>
          <strong>Degree:</strong> {degree}
        </Text>
        <Text size={15} fw={500}>
          <strong>Areas of Study:</strong> {study}
        </Text>
        <Text size={15} fw={500}>
          <strong>Location:</strong> {location}
        </Text>
        <Text size={15} fw={500}>
          <strong>Attendance:</strong> {startDate} - {endDate}
        </Text>
        <Text size={15} fw={500}>
          <strong>Graduating GPA:</strong> {gpa}
        </Text>
      </Stack>
    </Flex>
  );

  const skills_control = (
    <>
      <Flex direction="row" gap="md" align="center">
        {useMediaQuery("(min-width: 600px)") && <IconPencil size={25} />}
        <Text size={25} fw={700}>
          Skills
        </Text>
      </Flex>
    </>
  );

  const skills_panel = (
    <Stack style={{ paddingTop: "2.5%" }}>
      {skills.map((skill, index) => {
        return (
          <div key={skill.name}>
            <Text size={20} fw={500} style={{ paddingLeft: "2.5%" }}>
              {skill.name}
            </Text>
            {skill.note && (
              <Text size={10} fw={200} style={{ paddingLeft: "2.5%" }}>
                * {skill.note}
              </Text>
            )}
            <Flex
              wrap="wrap"
              align="start"
              gap={5}
              style={{
                paddingTop: "1.5%",
                paddingLeft: "1.5%",
                paddingBottom: "2.5%",
              }}
            >
              {skill.skills.map((sk, index) => (
                <Badge
                  key={`${skill.name}-${index}`}
                  fw={500}
                  size="lg"
                  style={{ margin: "0.25rem" }}
                >
                  {sk}
                </Badge>
              ))}
            </Flex>
          </div>
        );
      })}
    </Stack>
  );

  const certifications_control = (
    <Flex direction="row" gap="md" align="center">
      {useMediaQuery("(min-width: 600px)") && <IconCertificate size={25} />}
      <Text size={25} fw={700}>
        Kaggle Certifications
      </Text>
    </Flex>
  );

  const certifications_panel = (
    <Group style={{ paddingTop: "2.5%" }}>
      {certifications.map((cert) => (
        <Card
          key={`Certification ${cert.name}`}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Flex direction="column" gap="md" align="center">
            <Text key={cert.name} size={15} fw={500}>
              {cert.name}
            </Text>
            <Button
              variant="outline"
              radius="xl"
              rightIcon={<IconExternalLink size={15} />}
              onClick={() => window.open(cert.source, "_blank")}
            >
              Certificate
            </Button>
          </Flex>
        </Card>
      ))}
    </Group>
  );

  return (
    <Container style={{ paddingTop: "5%" }}>
      <Title order={2} style={{ paddingBottom: "2.5%" }}>
        College
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={[institution]} defaultChecked>
          <Accordion.Item value={institution} style={{ borderBottom: "none" }}>
            <Accordion.Control>{institution_control}</Accordion.Control>
            <Accordion.Panel>{institution_panel}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Card>
      <Title order={2} style={{ paddingTop: "5%", paddingBottom: "2.5%" }}>
        Skills & Certifications
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={["Skills"]}>
          <Accordion.Item value="Skills">
            <Accordion.Control>{skills_control}</Accordion.Control>
            <Accordion.Panel>{skills_panel}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            value="Certifications"
            style={{ borderBottom: "none" }}
          >
            <Accordion.Control>{certifications_control}</Accordion.Control>
            <Accordion.Panel>{certifications_panel}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Container>
  );
}

export default EducationCard;
