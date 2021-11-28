import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          color: {
            value: ["#FFC5D0", "#FF0080", "#F8F9FC"]
          },
          links: {
            color: "#FF0080",
            enable: true
          },
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
          },
          move: {
            direction: ["right","left","down","up"],
            speed: 5,
          },
          size: {
            value: 3,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
