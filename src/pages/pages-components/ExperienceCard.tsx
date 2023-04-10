import {
  Container,
  Card,
  Button,
  Accordion,
  Text,
  Flex,
  List,
  Image,
  Stack,
} from "@mantine/core";
import {
  IconExternalLink,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface ExperienceCardProps {
  names: string[];
  descriptions: string[];
  startDates: string[];
  endDates: string[];
  locations: string[];
  skills: string[][];
  images: string[]; // path to image
  links: string[]; // array of links
}

function ExperienceCard(props: ExperienceCardProps) {
  const {
    names,
    descriptions,
    startDates,
    endDates,
    locations,
    skills,
    images,
    links,
  } = props;

  return (
    <Container style={{ paddingTop: "5%" }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={[names[0]]}>
          {names.map((name, index) => (
            <Accordion.Item key={index} value={name}>
              <Accordion.Control>
                <Text size={25} fw={700}>
                  {name}
                </Text>
                <Text
                  fw={600}
                >{`${startDates[index]} - ${endDates[index]}`}</Text>
                <Text fw={600}>{locations[index]}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Flex direction="row" align="flex-start">
                  <Image
                    maw={200}
                    radius="md"
                    src={images[index]}
                    style={{ paddingRight: "2.5%" }}
                  />
                  <Stack align="flex-start">
                    <Text size={15} fw={600}>
                      Role:
                    </Text>
                    <Text size={15} fw={400} style={{ paddingLeft: "5%" }}>
                      {descriptions[index]}
                    </Text>
                    <Text size={15} fw={600}>
                      Skills:
                    </Text>
                    <List style={{ paddingLeft: "2.5%" }}>
                      {skills[index].map((skill, skillIndex) => (
                        <List.Item key={skillIndex} fw={400}>
                          {skill}
                        </List.Item>
                      ))}
                    </List>
                    {links[index] !== "" ? (
                      <>
                        <Flex direction="column" gap="md" align="center">
                          {links[index].includes("linkedin") ? (
                            <Button
                              variant="outline"
                              radius="xl"
                              leftIcon={<IconBrandLinkedin size={15} />}
                              rightIcon={<IconExternalLink size={15} />}
                              onClick={() =>
                                window.open(links[index], "_blank")
                              }
                            >
                              LinkedIn
                            </Button>
                          ) : links[index].includes("github") ? (
                            <Button
                              variant="outline"
                              radius="xl"
                              leftIcon={<IconBrandGithub size={15} />}
                              rightIcon={<IconExternalLink size={15} />}
                              onClick={() =>
                                window.open(links[index], "_blank")
                              }
                            >
                              GitHub
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              radius="xl"
                              rightIcon={<IconExternalLink size={15} />}
                              onClick={() =>
                                window.open(links[index], "_blank")
                              }
                            >
                              Link
                            </Button>
                          )}
                        </Flex>
                      </>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card>
    </Container>
  );
}

export default ExperienceCard;
