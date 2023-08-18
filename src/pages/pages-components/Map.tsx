import { Center, Container, Loader } from "@mantine/core";
import { useState } from "react";

function Map(props: { alt: string; embedLink: string }) {
  const { alt, embedLink } = props;
  const [isLoading, setIsLoading] = useState(true);

  const iframeContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "300px",
    height: "300px",
  };

  const loaderStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  };

  return (
    <Container style={{ paddingTop: "2.5%" }}>
      <Center>
        <div style={iframeContainerStyle}>
          {isLoading && (
            <div style={loaderStyle}>
              <Loader />
            </div>
          )}
          <iframe
            title="map"
            src={embedLink}
            aria-label={alt}
            width="300"
            height="300"
            style={{
              backgroundColor: "#F8F9F9",
              border: 0,
              borderRadius: "20px",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </Center>
    </Container>
  );
}

export default Map;
