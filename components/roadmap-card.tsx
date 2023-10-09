import Link from "next/link";
import { JavascriptLogo } from "../icons/javascript";
import { ReactLogo } from "../icons/react";

const logoMap = {
  reactjs: {
    name: "React.js",
    logo: ReactLogo,
    href: "/roadmap/react-js",
  },
  javascript: {
    name: "JavaScript",
    logo: JavascriptLogo,
    href: "/roadmap/js",
  },
};

type Props = {
  roadmap: keyof typeof logoMap;
};

export const RoadmapCard = (props: Props) => {
  const { roadmap } = props;
  const { logo: Logo, name, href } = logoMap[roadmap] ?? {};

  return (
    <Link href={href} className="w-full sm:w-[30%]">
      <div className="flex items-center border-2 border-gray-800 px-3 py-4 rounded">
        <div>
          <Logo />
        </div>
        <p className="ml-2">{name}</p>
      </div>
    </Link>
  );
};

export const RoadmapCards = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {Object.keys(logoMap).map((roadmap) => (
        <RoadmapCard key={roadmap} roadmap={roadmap as keyof typeof logoMap} />
      ))}
    </div>
  );
};
