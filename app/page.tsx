import { supabase } from "@/lib/supabase";
type Job = {
  id: string;
  title: string;
  company: string;
  tags: string[] | null;
  link: string | null;
  created_at: string;
};

export default async function Home() {
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return <main className="p-6">Error: {error.message}</main>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>
      <ul className="space-y-3">
        {jobs?.map((j: Job) => (
          <li key={j.id} className="border p-4 rounded">
            <div className="font-semibold">{j.title}</div>
            <div className="opacity-70">{j.company}</div>
            {j.tags?.length ? (
              <div className="mt-1 text-sm opacity-70">{j.tags.join(" · ")}</div>
            ) : null}
            {j.link && (
              <a className="text-sm underline mt-2 inline-block" href={j.link} target="_blank" rel="noreferrer">
                Apply
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
