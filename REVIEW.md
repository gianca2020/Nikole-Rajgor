# Engineering review

Reviewed tracked source, routing, configuration, and service integrations.
Frontend markup, styles, and intended user flows were preserved in this cleanup.

## Assessment

The site has a straightforward page/card composition and a shared Supabase client.
The main maintenance gaps are inconsistent content normalization, repeated layout,
and an unfinished email backend. Lint and build alone cannot establish service
correctness.

## Findings requiring follow-up

1. **High if deployed — Contact Edge Function is a prototype.**
   `supabase/functions/contact-email/index.ts` ignores the submitted message,
   sends a fixed test email to a developer address, and reports success without
   checking the provider's returned error. Before enabling it, configure the
   recipient/sender, validate and bound input, reject unsupported methods, pass
   the actual message safely, handle provider errors, and add abuse controls.
   It is not called by the routed site; `ContactEmail.jsx` uses EmailJS and is
   itself currently unmounted.
2. **Medium — Database access policies cannot be assessed here.** No schema or
   row-level security migrations are included. Verify anonymous reads expose only
   intended public content and do not permit content writes. The admin companion
   must enforce authorized mutations on the server.
3. **Medium — Image handling differs between pages.** `About.jsx` rewrites the
   case-sensitive storage bucket path for full URLs and builds filename URLs with
   different casing. `journalism.jsx` passes stored values straight through.
   Confirm the actual bucket name before consolidating URL normalization into
   a tested helper; changing case blindly may break existing images.
4. **Medium — Request failure and data handling are inconsistent.** Journalism
   ignores query errors and assumes every title is a string; creative content
   assumes successful data is an array. Standardize data fallbacks, request
   cleanup, and error handling while retaining the current presentation.
5. **Low — Layout and inactive code need a separate refactor.** Headers repeat
   across routes. Footer and contact components are not mounted. Keep client
   documents until their intended use is confirmed; duplication alone does not
   prove an asset is safe to remove.

## Cleanup completed

- Removed tracked Supabase CLI temporary state and ignored future local state.
- Aligned Netlify and `.nvmrc` to Node.js 22 for the installed Vite toolchain.
- Removed the incorrect Netlify Functions mapping to Supabase Deno functions.
- Replaced successful-query debug logging with error-only logging.
- Added project documentation, public environment examples, and independent
  lint/build CI for this repository.

6. **Low — Existing CSS build warning.** The font `@import` follows other CSS
   rules. The production build succeeds but warns about import ordering. Left
   unchanged to keep this cleanup outside frontend styling.

## Verification limits

Lint and production build validate static correctness and bundling. The build does
not check the Deno Edge Function. Live database policies, storage assets, email
delivery, and visual browser behavior were not exercised.
