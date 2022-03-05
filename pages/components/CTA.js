import { useState } from "react";
import * as gtag from "./../lib/gtag";
import BackgroundAlt from "./BackgroundAlt.js";
import Link from "next/link";

export default function Time() {
  const [cta, setCTA] = useState("");

  const click = () => {
    gtag.event({
      category: "CTA Links",
      action: "click",
      label: cta,
    });
  };
  return (
    <div className="relative w-full text-center mb-8 flex-none">
      <BackgroundAlt />
      <div className="relative p-2">
        <Link
          href={
            "https://www.gofundme.com/f/donate-to-the-orbital-project?utm_campaign=p_cf+share-flow-1&utm_medium=copy_link&utm_source=customer"
          }
          passHref
        >
          <a
            className="font-space text-blue-accent uppercase text-xs md:text-sm font-normal cursor-pointer tracking-widest"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setCTA("GoFundMe");
              click();
            }}
          >
            help us put this installation on
          </a>
        </Link>
      </div>
    </div>
  );
}
