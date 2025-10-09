import { addQuestion } from "@/lib/actions";

export function AskQuestion({ topic }: { topic: string }) {
  return (
    <form className="relative my-8" action={ addQuestion }>
      <input type="hidden" name="topic-id" value={ topic }/>
      <input
        type="text"
        name="title"
        placeholder="Ask a question"
        className="mt-1 block w-full rounded-md border border-atlas-white-300 bg-inherit py-3 pl-3 pr-28 text-lg text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-3 focus:ring-atlas-teal"
      />
      <button className="absolute right-2 top-2 flex h-10 w-24 items-center justify-center rounded-md border bg-secondary px-4 text-lg text-white hover:bg-white hover:text-inherit hover:border-blue-950 hover:border-3 focus:bg-secondary">
        Ask
      </button>
    </form>
  );
}
