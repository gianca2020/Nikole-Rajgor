# Nikole Rajgor Portfolio

A client project built for journalist Nikole Rajgor. The public portfolio presents
her biography, journalism, creative work, and resume. Content is read from
Supabase; its companion administration app lives in
[Nikole_privv](https://github.com/gianca2020/Nikole_privv).

Built with React, Vite, React Router, Tailwind CSS, and Supabase.

## Local development

Use Node.js 22 (`nvm use`) and npm. From this repository's root:

```sh
npm ci
cp .env.example .env
# Fill in the public client configuration in .env.
npm run dev
```

```sh
npm run lint     # Static checks
npm run build    # Production bundle in dist/
npm run preview # Preview the production bundle locally
```

The GitHub Actions workflow runs lint and build for pushes and pull requests.
These checks do not exercise a live Supabase project or verify database policies.
Vite embeds `VITE_*` values in browser code: use the public anon key, never a
service-role key or an email-provider secret. Keep local environment files out of Git.

## Structure

- `src/`: application entry, routing, styles, and Supabase client.
- `components/`: pages, layout, cards, and shared UI.
- `assets/`: source images and client-provided documents.
- `public/`: files served directly, including the displayed resume.
- `supabase/functions/contact-email/`: separate Deno email function prototype.

## Deployment and external services

`netlify.toml` builds with Node.js 22, publishes `dist/`, and routes SPA requests
to `index.html`. Configure the public Supabase values in Netlify before building.
Supabase Edge Functions run separately on Supabase's Deno runtime; they are not
Netlify Functions and are not deployed by this site's build.

The contact component uses EmailJS with existing service/template identifiers and
`VITE_EMAILJS_PUBLIC_KEY`, but is not mounted by the current routes. The separate
Supabase email function is a prototype and should not be enabled as a production
contact endpoint without the changes described in [REVIEW.md](REVIEW.md).
The Supabase schema, storage setup, and database access policies are managed
outside this repository.
