// Component that displays the answers to the questions
import { Answer } from "@/components/Answer";
import { fetchQuestions, fetchTopic, fetchSelectedQuestion } from "@/lib/data";
import { GiveAnswer } from "@/components/GiveAnswer";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function answerQuestions({ params }: { params: Promise<{ id: string }>;}) {
  const { id } = await params;
  console.log("fetching:", id)
  const topic = await fetchTopic(id);
  const answers = await fetchQuestions(id);
  const selectedQuestion = await fetchSelectedQuestion(id);

  return (
    <div className="">
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" /> { selectedQuestion.title }
      </h1>
      <GiveAnswer topic={id}/> {/* Answer input field */}
      <div className="">
      {/* Answers displayed post input*/}
      {answers.map((answers) => (
        <Answer
          key={answers.id}
          id={answers.id}
          text={answers.title}
          className="answers-results"
        />
      ))}
      </div>
    </div>
  )
}