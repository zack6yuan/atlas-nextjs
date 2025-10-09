// Component that displays the answers to the questions
import { questions } from "@/lib/placeholder-data";
import Link from "next/link";
import { Question } from "@/components/Question";
import { Answer } from "@/components/Answer";
import { fetchQuestions, fetchTopic, fetchSelectedQuestion } from "@/lib/data";
import { GiveAnswer } from "@/components/GiveAnswer";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { useEffect } from 'react';

interface questionProps {
  questionTitle: string;
}

export default async function answerQuestions({ params }: { params: Promise<{ id: string }>;}) {
  const { id } = await params;
  console.log("fetching:", id)
  const topic = await fetchTopic(id);
  const answers = await fetchQuestions(id);
  const selectedQuestion = await fetchSelectedQuestion(id);

  console.log(selectedQuestion.id)

  return (
    <div className="">
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" /> { selectedQuestion.title }
      </h1>
      <GiveAnswer topic={id}/> {/* Answer input field */}
      <div className="">
      {/* Answers displayed post input*/}
      {answers.map((answer) => (
        <Answer
          key={answer.id}
          id={answer.id}
          text={answer.title}
          className="answers-results"
        />
      ))}
      </div>
    </div>
  )
}