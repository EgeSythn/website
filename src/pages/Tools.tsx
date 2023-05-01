import {
  Container,
  Title,
  Divider,
  useMantineTheme,
  Card,
  Accordion,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import hard_hat from "../assets/hard_hat.png";
import SideDrawer from "./pages-components/SideDrawer";

function Tools() {
  const theme = useMantineTheme();

  const content = (
    <div>
      <h1>Drawer Content</h1>
      <p>Here is the content of your custom drawer!</p>
    </div>
  );

  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Title>Tools</Title>
      <Divider
        style={{ marginTop: "1.5%" }}
        color={
          theme.colorScheme === "dark"
            ? theme.colors.blue[1]
            : theme.colors.blue[4]
        }
      />
      <Stack style={{ paddingTop: "2.5%" }} align="center">
        <Image src={hard_hat} maw={240} />
        <Text size={25} weight={700}>
          Page Under Construction
        </Text>
        <Text size={10}>
          <a
            href="https://www.flaticon.com/free-icons/work-in-progress"
            title="work in progress icons"
          >
            Work in progress icons created by Freepik - Flaticon
          </a>
        </Text>
      </Stack>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SideDrawer side="right" content={content}>
          <h3>Click me</h3>
        </SideDrawer>
      </div>
    </Container>
  );
}

export default Tools;
