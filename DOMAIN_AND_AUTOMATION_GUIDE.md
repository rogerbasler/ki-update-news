# Anleitung: Eigene Domain & Automatisierung

## 1. Eigene Domain verbinden (WICHTIG!)

Um Ihre bestehende Domain (z.B. `ki-update.com` oder ähnlich) mit dieser Website zu verbinden:

1. **Gehen Sie zu den Repository Settings:**
   - https://github.com/rogerbasler/ki-update-news/settings/pages

2. **Scrollen Sie zu "Custom domain":**
   - Geben Sie Ihre Domain ein (z.B. `news.ki-update.com`)
   - Klicken Sie auf **"Save"**

3. **DNS-Einstellungen bei Ihrem Domain-Provider:**
   - Erstellen Sie einen **CNAME-Eintrag** für Ihre Subdomain (z.B. `news`)
   - Ziel: `rogerbasler.github.io`

## 2. GitHub Pages aktivieren

1. Gehen Sie zu: https://github.com/rogerbasler/ki-update-news/settings/pages
2. Unter **"Build and deployment"**:
   - **Source**: GitHub Actions (da wir Vite verwenden, ist dies besser)
   - ODER **Deploy from a branch**: `gh-pages` (wenn wir den Build-Ordner pushen)

*Empfehlung:* Ich habe das Projekt so vorbereitet, dass Sie einfach den `dist`-Ordner (den Build-Ordner) verwenden können.

## 3. Wöchentliche Updates automatisieren

Um die Website wöchentlich zu aktualisieren, müssen Sie nur die Datei `client/src/pages/Home.tsx` bearbeiten.

### Der einfache Weg (via GitHub Web-Interface):

1. Öffnen Sie `client/src/pages/Home.tsx` auf GitHub.
2. Suchen Sie den Bereich `const NEWS_DATA`.
3. Ändern Sie die Inhalte (Titel, Datum, Zusammenfassung).
4. Klicken Sie auf **"Commit changes"**.
5. Die Website wird automatisch neu gebaut und aktualisiert (sofern GitHub Actions eingerichtet ist).

### Der professionelle Weg (Lokal):

1. Repository klonen: `git clone https://github.com/rogerbasler/ki-update-news.git`
2. Änderungen machen.
3. `pnpm build` ausführen.
4. Pushen.

---

**Hinweis:** Da ich Ihre genaue Domain nicht kenne, habe ich die Standard-GitHub-URL vorbereitet. Sobald Sie Ihre Domain eintragen, funktioniert alles unter Ihrer gewohnten Adresse.
