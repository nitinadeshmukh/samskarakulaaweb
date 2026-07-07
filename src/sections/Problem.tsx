const PROBLEMS = [
  {
    title: 'The knowledge gap',
    body: "Families no longer track the correct Vedic timing (Muhurta) for each life-cycle rite, or which rites apply to which family member.",
  },
  {
    title: 'The access gap',
    body: "NRIs and urban families often can't find a qualified, background-checked priest who matches their regional tradition and language.",
  },
  {
    title: 'The trust gap',
    body: 'When a ritual is outsourced or performed remotely, families have no reliable way to verify it was performed correctly, for the right person, at the right time.',
  },
];

export function Problem() {
  return (
    <section className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
          Tradition shouldn't get lost in distance.
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-kula-navy">{p.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
