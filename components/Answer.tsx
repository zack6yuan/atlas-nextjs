import VoteButton from "./VoteButton";
import uncheck from "../assets/uncheck.png"

type AnswerProps = {
  id: string;
  text: string;
  className: string;
};

export function Answer({ id, text, className }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <div className="mr-2 rounded-xl bg-secondary px-2 text-sm text-white">
      </div>
      <p className="text w-full text-left font-semibold -ml-6">{text}</p>
      <div className="w-7">
        <button className="cursor-pointer">
          <img src={uncheck.src} alt="unchecked-button" />
        </button>
      </div>
    </div>
  );
}
