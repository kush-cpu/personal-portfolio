import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import UnrealEngine5ShowcaseDescription from "./assets/talks/_unreal-engine-5-showcase.md";
import GameAIPatternsDescription from "./assets/talks/_game-ai-patterns.md";
import ModernRenderingTechDescription from "./assets/talks/_modern-rendering-tech.md";

const talks: TalkMetadata[] = [
  {
    title: "Unreal Engine 5: Next-Gen Game Development Features",
    description: <UnrealEngine5ShowcaseDescription />,
    events: [
      {
        name: "Game Developers Conference 2024",
        location: "San Francisco, USA",
        date: new Date(2024, 2, 18),
      },
      {
        name: "Unreal Fest 2023",
        location: "New Orleans, USA",
        date: new Date(2023, 9, 5),
      }
    ],
    recordingURL: "https://www.youtube.com/watch?v=example1",
    slidesURL: "https://www.example.com/ue5-showcase-slides",
  },
  {
    title: "Modern Game AI: Patterns and Best Practices",
    description: <GameAIPatternsDescription />,
    events: [
      {
        name: "Game AI Conference",
        location: "Virtual Event",
        date: new Date(2024, 1, 15),
      }
    ],
    slidesURL: "https://www.example.com/game-ai-patterns",
    repoURL: "https://github.com/yourusername/game-ai-demos",
  },
  {
    title: "Next-Gen Rendering Techniques in Modern Game Engines",
    description: <ModernRenderingTechDescription />,
    events: [
      {
        name: "Digital Dragons",
        location: "Krakow, Poland",
        date: new Date(2023, 11, 8),
      }
    ],
    recordingURL: "https://www.youtube.com/watch?v=example2",
    slidesURL: "https://www.example.com/rendering-tech-slides",
  },
];

const title = "Game Tech Talks";
const description = "Featured presentations on game development and engine technology.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
