// Component that displays the answers to the questions
import { questions } from "@/lib/placeholder-data";
import Link from "next/link";
import { Question } from "@/components/Question";
import { fetchQuestions, fetchTopic, fetchSelectedQuestion } from "@/lib/data";
import { GiveAnswer } from "@/components/GiveAnswer";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function answerQuestions({ params }: { params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const topic = await fetchTopic(id);
  const questions = await fetchQuestions(id);
  const selectedQuestion = await fetchSelectedQuestion(id);

  return (
    <div className="">
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" />
      </h1>
      <GiveAnswer topic={id}/>
      {questions.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          text={question.title}
          votes={question.votes}
        />
      ))}
    </div>
  )
}