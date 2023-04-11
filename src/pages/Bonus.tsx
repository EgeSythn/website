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

function Bonus() {
  const theme = useMantineTheme();
  const gameUrl = "https://cs280fa22-homework.github.io/homework-2-EgeSythn/";

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
      <Card shadow="sm" padding="lg" radius="md" withBorder>
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
          <Image
            src={spaceinvader} // Replace with the desired image URL
            fit="cover"
            height="20%"
            radius={10}
          />
          <Stack spacing="xs" style={{ paddingTop: "5%" }}>
            <Text fw={500} style={{ paddingBottom: "0.5%" }}>
              &emsp;&emsp;As a little gift for you, you can play Space Invaders,
              one of the first things I programmed in my Full-Stack JavaScript
              course. I don't have the ability to outright share the source code
              with you, but if you are curious, you can contact me and I'll make
              sure to see what I can do.
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
    </Container>
  );
}

export default Bonus;
