import { AskQuestion } from "@/components/AskQuestion";
import { Question } from "@/components/Question";
import { fetchQuestions, fetchTopic } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import trash from "../../../../assets/trash.png";


export default async function Page({ params, }: { params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const topic = await fetchTopic(id);
  const questions = await fetchQuestions(id);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" /> {topic.title}
        <button style={{cursor: "pointer"}}>
          <Image src={trash} className="w-7 ml-2 mb-1" alt="trash-icon"></Image>
        </button>
      </h1>
      <AskQuestion topic={topic.id} />
      {questions.map((question) => (
        <Link href={`/ui/questions/${question.id}`}>
        <Question
          key={question.id}
          id={question.id}
          text={question.title}
          votes={question.votes}
        />
        </Link>
      ))}
    </div>
  );
}