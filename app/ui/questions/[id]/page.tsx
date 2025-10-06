import { questions } from "@/lib/placeholder-data";
import Link from "next/link";
import { Question } from "@/components/Question";
import { fetchQuestions, fetchTopic } from "@/lib/data";

export default async function answerQuestions({ params, }: { params: Promise<{ id: string }>;}) {
  const {id} = await params;
  const topic = await fetchTopic(id);
  const questions = await fetchQuestions(id);

  return (
    <h1>Question here</h1>
  )
}