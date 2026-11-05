LAMA OS – GitHub Pages Website Update – 04.11.2026

WHAT HAS BEEN DONE
- Homepage: visible Lamas Wächter invite buttons link directly to the OFFICIAL Discord install URL:
  https://discord.com/oauth2/authorize?client_id=1507164513479426239
- /invite/: matching premium invite landing page with working button for optional sharing.
- Terms (DE/EN): GitHub Pages identified as the static website host, distinct from the bot backend, with a link to GitHub Terms of Service.
- Privacy Policy (DE/EN): GitHub Pages and visitor IP logging for security, link to GitHub Privacy Statement, Discord install click and international processing described.
- Imprint (DE/EN): GitHub Pages mentioned.
- Original website design, LAMA colors, language switches, legal navigation and other site functions retained.
- Original images included as lama-banner.png and lama-logo.png.

DEPLOY TO EXISTING GITHUB PAGES (NO BOT RESTART)
1. Back up the current published website files in your GitHub repository.
2. Replace index.html, terms.html, privacy.html, imprint.html, and the invite/index.html folder in the SAME publishing directory (repo root or /docs depending on GitHub Pages settings).
3. Keep the two existing images or upload those included in this package.
4. Commit changes and wait for GitHub Pages to publish.
5. Open your website; test the Invite button, /invite/ page and both legal languages.

DISCORD CONFIGURATION
The link provided by the user is a Discord-provided installation link. In Discord Developer Portal > Installation, verify Guild Install and the configured default scopes (bot + applications.commands) and desired permissions. There is NO need to switch to Custom URL to use this link on your website.
If you want to use your GitHub Pages /invite/ page AS a Custom URL in Discord, it must be publicly deployed first. This landing page contains a manual Discord install button rather than an automatic redirect.

LEGAL ACTION ITEMS
- Provide the real legal name + serviceable address in Imprint and Privacy (placeholders remain, not invented).
- Review actual bot database backups, 48-hour guild cleanup (still NOT verified as running), and AI module status against production.
- GitHub Pages visitor IP logs are controlled by GitHub, not by the bot's home server.
- Website content is informative; review legal documents with a qualified professional before publication.

No changes have been made to your live GitHub repository, Discord settings, home server or bot database.
