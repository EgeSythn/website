import {
  Container,
  Card,
  Button,
  Accordion,
  Grid,
  Text,
  Flex,
  List,
  Image,
  Stack,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconExternalLink,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFigma,
  IconBrandYoutube,
  IconBrandGoogleDrive,
} from "@tabler/icons-react";

interface ExperienceCardProps {
  names: string[];
  descriptions: string[][];
  startDates: string[];
  endDates: string[];
  locations: string[];
  skills: string[][];
  images: string[];
  images_alt: string[];
  links: string[][];
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
    images_alt,
    links,
  } = props;

  const employmentNames = names.slice(0, 4);
  const projectNames = names.slice(4);

  const renderAccordionItems = (start: number, end: number) =>
    names.slice(start, end).map((name, currIndex) => {
      const index = start + currIndex;
      const isLastItem = currIndex === end - start - 1;

      return (
        <Accordion.Item
          key={index}
          value={name}
          style={isLastItem ? { borderBottom: "none" } : {}}
        >
          <Accordion.Control>
            <Text size={25} fw={700}>
              {name}
            </Text>
            <Text fw={600}>{`${startDates[index]} - ${endDates[index]}`}</Text>
            <Text fw={600}>{locations[index]}</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Flex direction="row" align="flex-start" wrap="wrap">
              <Grid>
                <Grid.Col span={4} style={{ maxWidth: 200 }}>
                  {!useMediaQuery("(max-width: 600px)") && (
                    <Image
                      maw={150}
                      mah={150}
                      radius="md"
                      src={images[index]}
                      alt={images_alt[index]}
                      title={images_alt[index]}
                    />
                  )}
                </Grid.Col>
                <Grid.Col span={!useMediaQuery("(max-width: 600px)") ? 8 : 12}>
                  <Stack align="flex-start">
                    <Text size={15} fw={600}>
                      Role:
                    </Text>
                    <List style={{ paddingLeft: "2.5%" }}>
                      {descriptions[index].map((description, index) => (
                        <List.Item key={index} fw={400}>
                          {description}
                        </List.Item>
                      ))}
                    </List>
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
                    <Flex direction="row" gap="md" align="center" wrap="wrap">
                      {links[index].map((link, linksIndex) => {
                        return (
                          <div key={linksIndex}>
                            {link.includes("linkedin") ? (
                              <Button
                                variant="outline"
                                radius="xl"
                                leftIcon={<IconBrandLinkedin size={15} />}
                                rightIcon={<IconExternalLink size={15} />}
                                onClick={() => window.open(link, "_blank")}
                              >
                                LinkedIn
                              </Button>
                            ) : link.includes("github") &&
                              !link.includes("egesythn") ? (
                              <Button
                                variant="outline"
                                radius="xl"
                                leftIcon={<IconBrandGithub size={15} />}
                                rightIcon={<IconExternalLink size={15} />}
                                onClick={() => window.open(link, "_blank")}
                              >
                                GitHub
                              </Button>
                            ) : link.includes("figma") ? (
                              <Button
                                variant="outline"
                                radius="xl"
                                leftIcon={<IconBrandFigma size={15} />}
                                rightIcon={<IconExternalLink size={15} />}
                                onClick={() => window.open(link, "_blank")}
                              >
                                Figma
                              </Button>
                            ) : link.includes("youtu") ? (
                              <Button
                                variant="outline"
                                radius="xl"
                                leftIcon={<IconBrandYoutube size={15} />}
                                rightIcon={<IconExternalLink size={15} />}
                                onClick={() => window.open(link, "_blank")}
                              >
                                Video
                              </Button>
                            ) : link.includes("drive") ? (
                              <Button
                                variant="outline"
                                radius="xl"
                                leftIcon={<IconBrandGoogleDrive size={15} />}
                                rightIcon={<IconExternalLink size={15} />}
                                onClick={() => window.open(link, "_blank")}
                              >
                                File
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                radius="xl"
                                rightIcon={<IconExternalLink size={15} />}
                                onClick={() => window.open(link, "_blank")}
                              >
                                Link
                              </Button>
                            )}
                          </div>
                        );
                      })}
                    </Flex>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
      );
    });

  return (
    <Container style={{ paddingTop: "5%" }}>
      <Title order={2} style={{ paddingBottom: "2.5%" }}>
        Employment
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={[employmentNames[0]]}>
          {renderAccordionItems(0, 4)}
        </Accordion>
      </Card>
      <Title order={2} style={{ paddingTop: "5%", paddingBottom: "2.5%" }}>
        Projects
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={[projectNames[0]]}>
          {renderAccordionItems(4, names.length)}
        </Accordion>
      </Card>
    </Container>
  );
}

export default ExperienceCard;
