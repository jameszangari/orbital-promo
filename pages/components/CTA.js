import BackgroundAlt from "./BackgroundAlt.js";
import Link from "next/link";

export default function Time() {
  return (
    <div className="relative w-full text-center mb-8">
      <BackgroundAlt />
      <div className="relative p-4">
        <Link
          href={
            "https://www.gofundme.com/f/donate-to-the-orbital-project?utm_campaign=p_cf+share-flow-1&utm_medium=copy_link&utm_source=customer"
          }
          passHref
        >
          <a
            className="font-space text-blue-accent uppercase text-md font-normal cursor-pointer tracking-widest"
            target="_blank"
            rel="noopener noreferrer"
          >
            help us put this installation on
          </a>
        </Link>
      </div>
    </div>
  );
}
