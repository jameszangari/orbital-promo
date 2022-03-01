import Background from "./Background.js";
import Link from "./Link.js";
import Wrapper from "./Wrapper.js";
import Container from "./Container.js";

export default function Creators() {
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
          />
          <Link link="https://jamescliff.com/" name="James Zangari" />
          <Link link="https://themgdesign.com/" name="Melissa Gabriele" />
          <Link link="https://reiddumont.com/" name="Reid Dumont" />
        </div>
      </Container>
      <Background />
    </Wrapper>
  );
}
