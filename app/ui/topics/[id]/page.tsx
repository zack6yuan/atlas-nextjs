export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const newParams = await params;
  const { id } = await newParams;
  return <div>Topic Page: {id}</div>;
}