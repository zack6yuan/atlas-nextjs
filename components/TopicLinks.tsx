import { fetchTopics } from "@/lib/data";
import TopicLink from "./TopicLink";

// const topics = [
//   { id: "1", title: "C#" },
//   { id: "2", title: "Python" },
//   { id: "3", title: "Golang" },
// ];

export default async function TopicLinks() {

  const topics = await fetchTopics();

  return (
    <>
      {topics.map((topic) => {
        return <TopicLink key={topic.id} id={topic.id} title={topic.title} />;
      })}
    </>
  );
}
