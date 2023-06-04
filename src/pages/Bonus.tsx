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
      <Center>
        <Text
          style={{
            paddingBottom: "2.5%",
          }}
          size={10}
          fw={700}
        >
          This is a place to share fun, little things with you. If the page
          looks a bit barren, don't worry, as there is more content is in the
          works!
        </Text>
      </Center>
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
          <Image src={spaceinvader} fit="cover" height="20%" radius={10} />
          <Stack spacing="xs" style={{ paddingTop: "5%" }}>
            <Text fw={400} style={{ paddingBottom: "0.5%" }}>
              &emsp;&emsp;You can play Space Invaders here! This is nothing
              special, but as one of the first things I programmed while
              learning web development (ike many other developers), I wanted to
              share it with you. I don't have the ability to outright share the
              source code with you, but if you are curious, you can contact me
              and I'll make sure to see what I can do.{" "}
            </Text>
            <Text fw={400} style={{ paddingBottom: "0.5%" }}>
              &emsp;&emsp;Unfortunately the game is not compatible with mobile
              devices, but if you're on a computer, give it a go and enjoy!
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
      </Card>
    </Container>
  );
}

export default Bonus;
