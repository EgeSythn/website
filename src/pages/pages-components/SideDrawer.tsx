import React, { useState } from "react";
import { Paper } from "@mantine/core";
import { Transition } from "@mantine/core";

interface SideDrawerProps {
  side: "left" | "right";
  content: any;
  children: any;
}

function SideDrawer(props: SideDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const drawerStyle: any = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    overflow: "hidden",
    zIndex: 1,
    transform: isOpen
      ? "translateX(0)"
      : `translateX(${props.side === "right" ? "100%" : "-100%"})`,
    transition: "transform 200ms ease",
    boxShadow: isOpen ? "rgba(0, 0, 0, 0.1) 0px 4px 12px" : "none",
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Paper
        style={{
          position: "relative",
          zIndex: 2,
          cursor: "pointer",
          padding: "md",
        }}
        onClick={toggleOpen}
      >
        {props.children}
      </Paper>
      <div style={{ ...drawerStyle, [props.side]: 0 }}>{props.content}</div>
    </div>
  );
}

export default SideDrawer;
