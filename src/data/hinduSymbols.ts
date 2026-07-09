// A general set of commonly recognized Hindu sacred symbols — not a single
// canonical "24," since no one universally standard list exists; compiled
// per direct user request for decorative/informational use across the site.
// `icon` names below map to <SacredSymbolIcon name=.../> for the subset that
// has bespoke line-art; the rest are listed for completeness/accuracy but
// rendered as text-only entries (drawing a distinct, recognizable icon for
// all 24 was out of scope for this pass).
//
// The swastika is deliberately included here (it predates and is unrelated
// to its unrelated 20th-century misappropriation, and is a genuine ancient
// symbol of auspiciousness) but is NOT rendered as a standalone visual icon
// anywhere on the site — a public-facing, Western-audience-adjacent
// marketing page risks real misreading/backlash from displaying it visually,
// independent of its authentic meaning. Flag this to the user if that
// judgment call should be reconsidered.
export interface HinduSymbol {
  name: string;
  meaning: string;
  icon?: string;
}

export const HINDU_SYMBOLS: HinduSymbol[] = [
  { name: 'Om (ॐ)', meaning: 'The primordial sound — the vibration of the universe itself', icon: 'om' },
  { name: 'Trishula', meaning: "Lord Shiva's trident, representing the three gunas", icon: 'trishula' },
  { name: 'Shankha', meaning: "The conch shell — Vishnu's, its sound dispels negativity", icon: 'shankha' },
  { name: 'Sudarshana Chakra', meaning: "Vishnu's discus, protector of dharma" },
  { name: 'Padma', meaning: 'The lotus — purity and divine beauty rising above attachment', icon: 'padma' },
  { name: 'Diya', meaning: 'The oil lamp — light dispelling ignorance', icon: 'diya' },
  { name: 'Kalash', meaning: 'The sacred pot — abundance and auspicious beginnings', icon: 'kalash' },
  { name: 'Tilaka', meaning: 'The forehead mark of spiritual devotion' },
  { name: 'Rudraksha', meaning: 'Sacred beads used for japa and meditation' },
  { name: 'Damaru', meaning: "Shiva's hand-drum — the sound of creation", icon: 'damaru' },
  { name: 'Peacock feather', meaning: 'Associated with Krishna — beauty and grace' },
  { name: 'Surya', meaning: 'The sun — source of life, honored in Surya Namaskar', icon: 'surya' },
  { name: 'Ganga', meaning: 'The sacred river — purification' },
  { name: 'Tulsi', meaning: 'Holy basil — a sacred plant of devotion' },
  { name: 'Bilva leaf', meaning: 'The trifoliate leaf offered to Shiva' },
  { name: 'Nandi', meaning: "The bull — Shiva's vehicle, devotion and strength" },
  { name: 'Mala', meaning: 'Prayer beads for mantra repetition', icon: 'mala' },
  { name: 'Ghanti', meaning: 'The temple bell, invoking divine presence', icon: 'ghanti' },
  { name: 'Toran', meaning: 'Mango-leaf door garlands for auspicious occasions' },
  { name: 'Sriphal', meaning: 'The coconut — purity and selfless offering' },
  { name: 'Shesha Naga', meaning: 'The cosmic serpent of eternity' },
  { name: 'Sri Yantra', meaning: 'Sacred geometry representing cosmic energy' },
  { name: 'Akshaya Patra', meaning: "Annapurna's inexhaustible vessel of nourishment" },
  { name: 'Swastika', meaning: 'An ancient symbol of auspiciousness and well-being' },
];
