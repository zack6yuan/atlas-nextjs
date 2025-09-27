export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  return <div>Topics Page: {params.id}</div>;
}