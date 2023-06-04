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
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import spaceinvader from "../assets/spaceinvader.png";
import hard_hat from "../assets/hard_hat.png";
import { gameUrl } from "../assets/data";

function Bonus() {
  const theme = useMantineTheme();

  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title>Bonus Content!</Title>
      <Divider
        style={{ marginTop: "1.5%", marginBottom: "5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
      <Flex direction="row" gap="6%" justify="center">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ width: "47%" }}
        >
          <Flex direction="column" align="stretch">
            <Center>
              <Text
                style={{
                  paddingTop: "2.5%",
                  paddingBottom: "2.5%",
                }}
                size={25}
                fw={700}
              >
                🛸Space Invaders🛸
              </Text>
            </Center>
            <Image src={spaceinvader} fit="cover" height={100} radius={10} />
            <Stack spacing="xs" style={{ paddingTop: "5%" }}>
              <Text fw={500} style={{ paddingBottom: "0.5%" }} align="justify">
                &emsp;&emsp;You can play Space Invaders here! This was one of
                the one of the first things I (and perhaps a lot of people)
                programmed while learning web development. I don't have the
                ability to outright share the source code with you, but if you
                are curious, you can contact me and I'll make sure to see what I
                can do.
              </Text>
              <Text fw={500} style={{ paddingBottom: "0.5%" }} align="justify">
                &emsp;&emsp;Unfortunately, the game is not compatible with
                mobile devices, but if you are on a computer, give it a try!
              </Text>
              <Center>
                <Text fw={500} style={{ paddingBottom: "2.5%" }}>
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
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{
            width: "47%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack style={{ paddingTop: "2.5%" }} align="center">
            <Image src={hard_hat} maw={240} />
            <Text size={10}>
              <a
                href="https://www.flaticon.com/free-icons/work-in-progress"
                title="work in progress icons"
                style={{ color: "black", textDecoration: "none" }}
              >
                Work in progress icons created by Freepik - Flaticon
              </a>
            </Text>
          </Stack>
        </Card>
      </Flex>
    </Container>
  );
}

export default Bonus;
