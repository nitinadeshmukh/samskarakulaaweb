const FEATURES = [
  {
    icon: '📅',
    title: 'Ritual Calendar',
    body: 'Build your family tree and automatically get a personalized timeline of the 16 traditional Shodasha Samskaras for every member.',
  },
  {
    icon: '🕉️',
    title: 'Vetted Priest Marketplace',
    body: 'Book a background-checked priest — North Vedic or South Agamic tradition — in person or virtually, filtered by language and region.',
  },
  {
    icon: '🎥',
    title: 'Proof-of-Ritual',
    body: 'Every booking ends with a tamper-evident, hash-verified video record — real proof the rite was performed correctly, for the right person.',
  },
  {
    icon: '🔒',
    title: 'Generational Vault',
    body: "A permanent, private family archive of every ritual performed — yours to revisit and pass down, encrypted and access-controlled.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
          Everything a family needs, in one place.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm shadow-neutral-100"
            >
              <div className="text-3xl">{f.icon}</div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
