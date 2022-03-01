import { useState } from "react";
import Background from "./Background.js";
import Link from "./Link.js";
import Wrapper from "./Wrapper.js";
import Container from "./Container.js";
import * as ga from "../lib/ga";

export default function Creators() {
  const [query, setQuery] = useState("");

  const click = () => {
    ga.event({
      category: "CTA Links",
      action: "click",
      label: query,
    });
  };
  console.log(query);
  console.log(click());

  return (
    <Wrapper className="row-start-4 sm:col-start-2">
      <Container>
        <p className="font-space text-text-transparent font-medium uppercase text-xs pb-4 tracking-widest w-full">
          Created By:
        </p>
        <div className="h-4/5 flex flex-col justify-between w-full">
          <Link
            link="https://www.charleswollochdesigns.com/"
            name="Charles Wolloch"
            click={() => {
              setQuery("Charles");
              click();
            }}
          />
          <Link
            link="https://jamescliff.com/"
            name="James Zangari"
            click={() => {
              setQuery("James");
              click();
            }}
          />
          <Link
            link="https://themgdesign.com/"
            name="Melissa Gabriele"
            click={() => {
              setQuery("Melissa");
              click();
            }}
          />
          <Link
            link="https://reiddumont.com/"
            name="Reid Dumont"
            click={() => {
              setQuery("Reid");
              click();
            }}
          />
        </div>
      </Container>
      <Background />
    </Wrapper>
  );
}
