# Legal documents — Samskara Kula

This folder holds the source (Markdown) for Samskara Kula's customer-facing legal
documents, covering the marketing website (`samskarakula.com`) and the mobile
apps (customer + priest):

| File | Purpose |
|---|---|
| `terms-and-conditions.md` | Terms of Use / Terms & Conditions for the website and apps |
| `privacy-policy.md` | Privacy Policy (GDPR, India DPDP Act, US CCPA/CPRA), incl. app-store disclosures |
| `refund-and-cancellation-policy.md` | Booking cancellations, priest no-shows, Samagri/Prasad shipping, refunds |
| `kundali-astrology-disclaimer.md` | Disclaimer that computed Muhurta/Kundali is informational, not authoritative |

## ⚠️ These are drafts — have a lawyer review before publishing

These documents were drafted from the product's actual data flows and features, but
they are **templates, not legal advice**, and have **not** been reviewed by a
qualified lawyer. Before going live you **must**:

1. Have them reviewed by counsel qualified in each jurisdiction you operate in
   (at minimum India, the EU/UK, and the US, given the NRI-diaspora user base).
2. Fill in every `[PLACEHOLDER]` (see below).
3. Confirm the data-handling descriptions still match the live system — the
   Privacy Policy in particular must be kept in sync with what the apps actually
   collect (birth data, Gotra/lineage, Proof-of-Ritual video, payment tokens,
   uploaded kundali documents, device/analytics data).

## Placeholders to fill

Search-and-replace these across all four documents:

- `[LEGAL ENTITY NAME]` — the registered company/entity operating Samskara Kula
- `[ENTITY TYPE]` — e.g. "a private limited company", "an LLC"
- `[COUNTRY OF INCORPORATION]` — where the entity is registered
- `[REGISTERED ADDRESS]` — full registered/postal address
- `[GOVERNING LAW]` — governing-law jurisdiction (e.g. "the laws of India")
- `[COURTS / VENUE]` — exclusive courts/venue for disputes (e.g. "the courts of Bengaluru, India")
- `[SUPPORT EMAIL]` — general support (e.g. support@samskarakula.com)
- `[PRIVACY EMAIL]` — privacy/data-protection contact (e.g. privacy@samskarakula.com)
- `[GRIEVANCE OFFICER NAME + EMAIL]` — India DPDP/IT-Rules grievance officer
- `[DPO CONTACT]` — Data Protection Officer / EU representative, if appointed
- `[EFFECTIVE DATE]` — date the document takes effect
- `[WEBSITE URL]` — canonical site URL (e.g. https://samskarakula.com)

## Surfacing on the site & apps

- **Website:** render these at stable URLs (e.g. `/legal/terms`, `/legal/privacy`,
  `/legal/refunds`, `/legal/kundali-disclaimer`) and link them from the footer.
- **Apps:** the app stores require a public Privacy Policy URL — point Apple App
  Store Connect and Google Play Console at the hosted Privacy Policy. Link Terms,
  Privacy, and the Refund policy from each app's Profile/Settings.
- The Kundali disclaimer is also surfaced **in-app** on the Birth Chart screen
  (customer-app), which links back to the full document here.
