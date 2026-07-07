const STEPS = [
  { step: '1', title: 'Build your family tree', body: 'Add each family member — birth details, Gotra, Veda/Shakha, Kula Devata (or mark them unknown).' },
  { step: '2', title: 'Get your ritual calendar', body: 'We generate a personalized timeline of upcoming samskaras, automatically.' },
  { step: '3', title: 'Book a vetted priest', body: 'Choose in-person or virtual, filtered by tradition and language.' },
  { step: '4', title: 'Get verified Proof-of-Ritual', body: 'A tamper-evident video record lands in your family Vault, permanently.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-kula-navy px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kula-amber text-lg font-bold">
                {s.step}
              </div>
              <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
              <p className="text-sm text-white/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
