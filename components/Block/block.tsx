import Link from "next/link";
import { roadmaps } from "../../utils/roadmap";

function Block() {
  return (
    <div className="mt-3 flex items-center flex-wrap gap-3">
      {roadmaps.map((roadmap, i) => (
        <Link href={roadmap.path}>
          <div className="p-3 rounded border-2 border-slate-700 capitalize font-medium w-[250px] cursor-pointer hover:bg-purple-600	hover:border-0">
            {roadmap.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Block;
