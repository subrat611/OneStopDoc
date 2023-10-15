export const InterviewPreparation = () => {
  return (
    <div className="mt-8">
      <p className="text-2xl font-medium">
        Frontend Interview Preparation Resources 🚀
      </p>
      <ul className="mt-3">
        <li className="text-lg my-3">
          <a
            href="https://bigfrontend.dev/"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            BigFrontEnd.dev (Free){" "}
            <span className="text-slate-400">[Questions, System Design]</span>
          </a>
        </li>
        <li className="text-lg my-3">
          <a
            href="https://codedamn.com/problems?page=1"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            CodeDamn (Free + paid){" "}
            <span className="text-slate-400">
              [Questions, Practice Project idea]
            </span>
          </a>
        </li>
        <li className="text-lg my-3">
          <a
            href="https://www.techinterviewhandbook.org/"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            Tech Interview Handbook (Free){" "}
            <span className="text-slate-400">[Handbook]</span>
          </a>
        </li>
        <li className="text-lg my-3">
          <a
            href="https://www.frontendinterviewhandbook.com/"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            Front End Interview Handbook (Free){" "}
            <span className="text-slate-400">
              [trivias, coding, algorithms, front end system design and more!]
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
