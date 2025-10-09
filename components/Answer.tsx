"use client"
import VoteButton from "./VoteButton";
import uncheck from "../assets/uncheck.png"
import checked from "../assets/check.png"
import { useState } from 'react';

type AnswerProps = {
  id: string;
  text: string;
  className: string;
};

export function Answer({ id, text, className }: AnswerProps) {
  const [check, changeCheck] = useState(uncheck)

  const changeImage = () => {
    if (check === uncheck) {
      changeCheck(checked);
    } else {
      changeCheck(uncheck)
    }
  }

  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <div className="mr-2 rounded-xl bg-secondary px-2 text-sm text-white">
      </div>
      <p className="text w-full text-left font-medium -ml-6 mr-4">{text}</p>
      <div className="w-7">
        <button className="cursor-pointer">
          <img src={ check.src } alt="unchecked-button" onClick={ changeImage }/>
        </button>
      </div>
    </div>
  );
}
