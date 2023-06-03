import { Center, Container } from "@mantine/core";

function Map(props: { embedLink: string }) {
  const { embedLink } = props;
  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Center>
        <iframe
          src={embedLink}
          width="300"
          height="300"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Center>
    </Container>
  );
}

export default Map;
