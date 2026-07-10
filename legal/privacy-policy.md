# Privacy Policy

**Effective date:** [EFFECTIVE DATE]

> **Draft for legal review.** This is a template based on the product's actual
> data flows and has not been reviewed by a lawyer. It must be kept in sync with
> what the apps actually collect. Do not publish before counsel review and before
> replacing every `[PLACEHOLDER]`.

This Privacy Policy explains how [LEGAL ENTITY NAME] ("**Samskara Kula**", "**we**",
"**us**") collects, uses, shares, and protects personal data when you use the
Samskara Kula website at [WEBSITE URL], the customer app, and the priest app
(together, the "**Service**").

Because our users include the Hindu NRI diaspora across many countries, this
policy is written to address the **EU/UK GDPR**, the **India Digital Personal Data
Protection Act, 2023 (DPDP)** and applicable IT Rules, and the **US CCPA/CPRA**.
Where these laws grant you specific rights, the relevant sections below apply to
you based on your location.

**We handle religious, lineage, and birth data.** Some information we process
(Gotra, Veda/Shakha, Kula Devata, family lineage, and birth details used for
astrological calculation) can reveal religious or philosophical beliefs and is
treated as **sensitive/special-category personal data**. We process it only to
provide the Service you request, and only with the appropriate legal basis
(your explicit consent and/or performance of our contract with you).

## 1. Who is the controller

The data controller (and, under DPDP, the Data Fiduciary) is [LEGAL ENTITY NAME],
[REGISTERED ADDRESS]. Contact: [PRIVACY EMAIL]. Where required, our Data
Protection Officer / EU representative is [DPO CONTACT]. Our India grievance
officer is [GRIEVANCE OFFICER NAME + EMAIL].

## 2. What data we collect

**a) Account & contact data** — email address and/or phone number (used for
one-time-passcode sign-in), and your display name.

**b) Family member & lineage data** — for each family member you add: name,
birth date, birth time (optional), birth location (city / latitude / longitude),
and optional **Gotra, Veda/Shakha, and Kula Devata**. These fields are provided
by you. We never infer or default them; where you leave them blank they are
recorded as "unknown".

**c) Astrological / Kundali data** — birth details are used to compute a Vedic
birth chart (planetary positions, ascendant). You may also **upload your own
kundali document** (PDF/image), which we store as your private reference.

**d) Booking & marketplace data** — ceremonies you book, mode (in-person or
virtual), scheduled dates, venue or shipping address, assigned priest, ratings/
reviews you submit, and booking status history.

**e) Priest data (priest app)** — for priest users: profile details, tradition,
languages, service regions/locations, qualifications, availability, avatar, and
verification/vetting status.

**f) Proof-of-Ritual & Vault media** — videos captured as proof of a performed
ceremony, and media stored in your Generational Vault, together with content
hashes and capture metadata.

**g) Payment data** — payments are processed by **Stripe** and/or **Razorpay**.
We receive limited transaction metadata (amount, currency, status, a token/
reference). **We do not collect or store your full card number, CVV, or bank
credentials** — those go directly to the payment provider.

**h) Device & usage data** — app/device information, push-notification token,
language preference, and product-analytics events (screens viewed, actions taken)
used to operate and improve the Service. Analytics events are designed to avoid
sensitive lineage/birth fields.

**i) Location data** — birth locations you enter, and (for priests, with
permission) service-location data used for proximity features.

We do **not** knowingly collect data from anyone under 18 as an account holder.
Minors may appear only as family members added by a parent/guardian responsible
for that data.

## 3. Why we use it, and our legal basis

| Purpose | Legal basis (GDPR) |
|---|---|
| Create and secure your account (OTP sign-in) | Contract; legitimate interests (security) |
| Manage your family tree and lineage details | Contract; **explicit consent** for religious/sensitive data |
| Compute the Kundali and ritual calendar | Contract; **explicit consent** for special-category data |
| Store your uploaded kundali document | Contract; consent |
| Facilitate bookings, payments, and the priest marketplace | Contract |
| Capture and store Proof-of-Ritual and Vault media | Contract; **consent** of participants |
| Ship Samagri / Prasad | Contract |
| Send push notifications about your bookings | Contract; legitimate interests |
| Product analytics and improving the Service | Legitimate interests (or consent where required) |
| Comply with law, prevent fraud/abuse | Legal obligation; legitimate interests |

Under **DPDP**, we rely primarily on your **consent** and on the legitimate uses
permitted by the Act. Under **CCPA/CPRA**, we process the categories above for the
listed business purposes; **we do not "sell" your personal information and do not
"share" it for cross-context behavioural advertising.**

## 4. How we share data

We share personal data only as needed to run the Service:

- **Priests** you book — receive the booking details necessary to perform the
  ceremony (e.g. the relevant family member's ceremony details, venue/address,
  and, for religious correctness, lineage fields you choose to provide).
- **Payment processors** (Stripe, Razorpay) — to take payment.
- **Logistics/shipping** partners (e.g. Shiprocket and its carriers) — to ship
  Samagri/Prasad, using the shipping address you provide.
- **Infrastructure & tooling** — our self-hosted Supabase backend, cloud/VPS
  hosting, push-notification delivery (Expo/Apple/Google), geocoding/maps, and
  streaming providers for virtual ceremonies.
- **Legal & safety** — where required by law, to enforce our Terms, or to protect
  rights and safety.
- **Business transfers** — in a merger, acquisition, or asset sale, subject to
  this policy.

We do **not** sell your personal data or use your Vault media, uploaded documents,
or lineage data for advertising or model training.

## 5. International transfers

We operate for a global diaspora, so your data may be processed in countries other
than your own (including [LIST PRIMARY HOSTING REGIONS]). Where data is transferred
out of the EU/UK, we rely on appropriate safeguards such as Standard Contractual
Clauses. Data-residency requirements under DPDP, where applicable, are addressed at
[DATA RESIDENCY APPROACH — confirm with counsel].

## 6. How long we keep it

We keep personal data for as long as your account is active and as needed to
provide the Service, then for the period required to meet legal, tax, accounting,
dispute-resolution, and fraud-prevention obligations. Proof-of-Ritual and Vault
media are retained as part of your archive until you delete them or close your
account, subject to any legal hold. When no longer needed, data is deleted or
anonymised.

## 7. How we protect it

- Cross-family isolation is enforced at the database layer (row-level security),
  not only in the UI — a family cannot access another family's data.
- Proof-of-Ritual and Vault media live in **private** storage, encrypted at rest,
  and are served only through **time-limited signed URLs**, never public links.
- We do not store raw card/bank credentials; payment data is tokenised by the
  provider.
- We avoid logging sensitive birth/lineage fields in plaintext.
- Priest verification status is enforced server-side on every read path.

No system is perfectly secure; we cannot guarantee absolute security, but we work
to protect your data and to notify you and regulators of breaches where the law
requires.

## 8. Your rights

Depending on where you live, you may have the right to: access your data; correct
it; delete it; restrict or object to processing; withdraw consent (without
affecting prior processing); data portability; and to lodge a complaint with a
supervisory authority.

- **EU/UK (GDPR):** the rights above; complain to your local Data Protection
  Authority (EU) or the ICO (UK).
- **India (DPDP):** access, correction, erasure, grievance redressal, and the
  right to nominate another person to exercise your rights; contact our Grievance
  Officer above, and you may approach the Data Protection Board of India.
- **California (CCPA/CPRA):** know/access, delete, correct, and opt out of sale/
  sharing (we do not sell or share for advertising); you will not be discriminated
  against for exercising these rights.

To exercise any right, contact [PRIVACY EMAIL]. We will verify your request and
respond within the timeframe the applicable law requires. You may also edit or
delete much of your data directly in the app.

## 9. Cookies & analytics (website)

The website uses only what is necessary to function and privacy-respecting product
analytics. Where required by law, we ask for your consent before setting non-
essential cookies/trackers, and default to the most privacy-preserving option.
See [COOKIE POLICY / this section] for details and controls.

## 10. Third-party links & services

The Service links to and integrates third parties (payment, shipping, streaming,
maps). Their handling of your data is governed by their own privacy policies. We
encourage you to review them.

## 11. Changes to this policy

We may update this policy. Where changes are material, we will notify you (in-app
or by email) and update the effective date. Continued use after changes take
effect constitutes acceptance where permitted by law.

## 12. Contact

Privacy questions or requests: [PRIVACY EMAIL].
Data Protection Officer / EU representative: [DPO CONTACT].
India Grievance Officer: [GRIEVANCE OFFICER NAME + EMAIL].
Postal: [REGISTERED ADDRESS].
