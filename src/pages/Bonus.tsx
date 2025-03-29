import {
  useMantineTheme,
  Container,
  Title,
  Divider,
  Card,
  Image,
  Text,
  Flex,
  Stack,
  Button,
  Center,
  Badge,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import spaceinvader from "../assets/spaceinvader.png";
import anatolian from "../assets/anatolian.jpg";
import flying_saucer from "../assets/flying_saucer.gif";
import swirl from "../assets/swirl.gif";
import { gameUrl } from "../assets/data";
import { ebruUrl } from "../assets/data";
import { anatolianUrl } from "../assets/data";
import { useMediaQuery } from "@mantine/hooks";

function Bonus() {
  const theme = useMantineTheme();

  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title>Development</Title>
      <Divider
        style={{ marginTop: "1.5%", marginBottom: "5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
      <Center>
        <Text
          style={{
            paddingBottom: "2.5%",
          }}
          ta="center"
          size={10}
          fw={700}
        >
          This is a place to share some fun little personal endeavors with you.
        </Text>
      </Center>
      {/* <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ marginBottom: "2.5%" }}
      >
        <Flex direction="column" align="stretch">
          <Badge fw={500} size="sm" style={{ margin: "0.25rem" }} color="lime">
            Active
          </Badge>
          <Flex direction="row" style={{ paddingBottom: "2.5%" }}>
            <Text style={{}} size={25} fw={700}>
              &nbsp;Space Invaders&nbsp;
            </Text>
            <Image
              src={flying_saucer}
              alt="A flying saucer gif"
              maw="5%"
              radius={10}
            />
          </Flex>
          <Flex direction="row">
            {!useMediaQuery("(max-width: 600px)") && (
              <Image
                src={spaceinvader}
                alt="Image of an alien invader from the famous game Space Invaders"
                title="Image of an alien invader from the famous game Space Invaders"
                maw="20%"
                radius={10}
              />
            )}
            <Stack spacing="xs" style={{ paddingLeft: "2.5%" }}>
              <Text fw={400} style={{ paddingBottom: "0.5%" }}>
                Nothing special, but as one of the first things I programmed
                while learning web development (like many other developers), I
                wanted to share it with you.{" "}
              </Text>
              <Center>
                <Text fw={400} style={{ paddingBottom: "2.5%" }}>
                  Good luck brave explorer 🚀
                </Text>
              </Center>

              <Button
                variant="outline"
                radius="xl"
                rightIcon={<IconExternalLink size={15} />}
                onClick={() => window.open(gameUrl, "_blank")}
              >
                Play
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Card> */}
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ marginBottom: "2.5%" }}
      >
        <Flex direction="column" align="stretch">
          <Badge
            fw={500}
            size="sm"
            style={{ margin: "0.25rem" }}
            color="yellow"
          >
            In Progress
          </Badge>
          <Flex direction="row" style={{ paddingBottom: "2.5%" }}>
            <Text style={{}} size={25} fw={700}>
              &nbsp;Ebru Visualizer&nbsp;
            </Text>
          </Flex>
          <Flex direction="row">
            {!useMediaQuery("(max-width: 600px)") && (
              <Image
                src={swirl}
                alt="Swirling colors on water representing Ebru Art"
                title="Swirling colors on water representing Ebru Art"
                maw="20%"
                radius={10}
              />
            )}
            <Stack spacing="xs" style={{ paddingLeft: "2.5%" }}>
              <Text fw={400} style={{ paddingBottom: "0.5%" }}>
                This is a visualizer for Ebru Art, a traditional Turkish art
                form of water marbling. You can hop on, and create a simple
                version of Ebru art. Give it a try!{" "}
              </Text>

              <Button
                variant="outline"
                radius="xl"
                disabled
                rightIcon={<IconExternalLink size={15} />}
                onClick={() => window.open(ebruUrl, "_blank")}
              >
                Experience
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Card>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ marginBottom: "2.5%" }}
      >
        <Flex direction="column" align="stretch">
          <Badge
            fw={500}
            size="sm"
            style={{ margin: "0.25rem" }}
            color="yellow"
          >
            In Progress
          </Badge>
          <Flex direction="row" style={{ paddingBottom: "2.5%" }}>
            <Text style={{}} size={25} fw={700}>
              &nbsp;Anatolian Music Catalog&nbsp;
            </Text>
          </Flex>
          <Flex direction="row">
            {!useMediaQuery("(max-width: 600px)") && (
              <Image
                src={anatolian}
                alt="An Anatolian string instrument called saz resting on a chair"
                title="An Anatolian string instrument called saz resting on a chair"
                maw="20%"
                radius={10}
              />
            )}
            <Stack spacing="xs" style={{ paddingLeft: "2.5%" }}>
              <Text fw={400} style={{ paddingBottom: "0.5%" }}>
                &emsp;&emsp;This is a catalog and an API for Anatolian music and
                musicians across generations, aimed at contributing to the
                revitalization and promotion of Anatolian music.{" "}
              </Text>

              <Button
                variant="outline"
                radius="xl"
                disabled
                rightIcon={<IconExternalLink size={15} />}
                onClick={() => window.open(anatolianUrl, "_blank")}
              >
                Explore
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

export default Bonus;
