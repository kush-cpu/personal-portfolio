import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "FoxTrot",
    description:
      "A Rust based game engine. Created entirely using Rust & Vulkan.",
    url: "https://youtu.be/x1UED0Evkjw",
    image: require(`${assetsDir}/botkube.png`),
    role: "Maintainer",
  },
  {
    title: "WebBoiler",
    description: "A webGL based game engine made for Web.",
    url: "https://im-rises.github.io/physical-engine-webgl/",
    image: require(`${assetsDir}/capact.png`),
    role: "Maintainer",
  },
  {
    title: "MyGit",
    description: "A Minimal Git-like Version Control CLI Tool in C++",
    url: "https://github.com/kush-cpu/mygit",
    image: require(`${assetsDir}/mongo-seeding.png`),
    role: "Author",
  },
  {
    title: "EA Sports FC 24",
    description: "A football simulation video game developed by EA Sports.",
    url: "https://www.ea.com/games/ea-sports-fc/fc-24",
    image: require(`${assetsDir}/fc-24-logo-alt.png`),
    role: "Senior Technical Artist",
  },
  {
    title: "Gophers Silesia",
    description: "Go & Cloud Native Meetup organized in Katowice, Poland",
    url: "https://www.meetup.com/GophersSilesia",
    image: require(`${assetsDir}/gophers-silesia.png`),
    role: "Organizer",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
