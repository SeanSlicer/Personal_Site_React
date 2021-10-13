import React from "react";
import "./Project.css";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <a href="https://seanslicer.com" target="_blank" rel="noreferrer">
        Personal Site
      </a>
      <a
        href="https://github.com/SeanSlicer/DS3DungeonApp"
        target="_blank"
        rel="noreferrer"
      >
        DungeonApp
      </a>
      <a
        href="https://github.com/SeanSlicer/StoreFront"
        target="_blank"
        rel="noreferrer"
      >
        Storefront
      </a>
    </section>
  );
}
