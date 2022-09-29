import React from "react";
import Particles from "react-tsparticles";
import "./style.css"

export default function Particle() {
  return (  
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0
          },
          particles: {
            number: {
              value: 50,
              limit: 150,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "images/github.svg",
                width: 200,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                lineLinked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 2
              },
              repulse: {
                distance: 10
              },
              push: {
                particles_nb: 8
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 0,
                  g: 0,
                  b: 0
                }
              }
            }
          },
          retina_detect: true,
          fps_limit: 60,
         
          //COLORS:
          /*background: {
            image: "url('https://particles.js.org/images/background3.jpg')"
          }*/

        }}
      />
  );
}

