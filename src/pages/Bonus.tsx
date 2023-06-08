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
import flying_saucer from "../assets/flying_saucer.gif";
import { gameUrl } from "../assets/data";
import { useMediaQuery } from "@mantine/hooks";

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
          ta="center"
          size={10}
          fw={700}
        >
          This is a place to share some fun little personal endeavors with you.
          If the page looks a bit barren, don't worry, as there is more content
          in the works!
        </Text>
      </Center>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex direction="column" align="stretch">
          <Flex direction="row" style={{ paddingBottom: "2.5%" }}>
            <Text style={{}} size={25} fw={700}>
              &nbsp;Space Invaders&nbsp;
            </Text>
            <Image src={flying_saucer} maw="5%" radius={10} />
          </Flex>
          <Flex direction="row">
            {!useMediaQuery("(max-width: 600px)") && (
              <Image src={spaceinvader} maw="40%" radius={10} />
            )}
            <Stack spacing="xs" style={{ paddingLeft: "2.5%" }}>
              <Text fw={400} style={{ paddingBottom: "0.5%" }}>
                &emsp;&emsp;Nothing special, but as one of the first things I
                programmed while learning web development (like many other
                developers), I wanted to share it with you.{" "}
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
      </Card>
    </Container>
  );
}

export default Bonus;
