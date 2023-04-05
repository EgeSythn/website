import { Center, Container } from "@mantine/core";

function Map() {
  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200066.1412561952!2d26.93963684718978!3d38.41759168090275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWlyLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sus!4v1680709194534!5m2!1sen!2sus"
          width="600"
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
