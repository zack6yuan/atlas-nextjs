import { questions } from "@/lib/placeholder-data";
import Link from "next/link";
import { Question } from "@/components/Question";
import { fetchQuestions, fetchTopic } from "@/lib/data";
import CreateTopicForm from "@/components/CreateTopicForm";

export default async function answerQuestions({ params, }: { params: Promise<{ id: string }>;}) {
  const {id} = await params;
  const topic = await fetchTopic(id);
  const questions = await fetchQuestions(id);

  return (
    <div className="">
      <h1>Hello!</h1>
    </div>
  )
}