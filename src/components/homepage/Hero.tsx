import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Kushagra Nigam</span>,
          <br />
          Game Engine Developer & Software Engineer.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Software engineer interested in low level systems and AI tech trends.
          <br /> Low-Level Software Engineer with Cloud-Native Full-Stack
          Capabilities.
        </p>
      </div>
    </header>
  );
};
