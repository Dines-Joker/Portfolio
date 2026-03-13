# Portfolio - Dines Nimalthas

Modernes, responsives Portfolio für Dines Nimalthas - M365 Consultant & Cloud Application Developer bei Joker IT AG.

## Features

- Modernes Design mit Glasmorphism-Effekten
- Vollständig responsiv für alle Geräte
- Interaktive Animationen und Scroll-Effekte
- SEO-freundlich mit semantischem HTML

## Technologien

- **HTML5** - Semantische Struktur
- **CSS3** - Moderne Styling mit Custom Properties
- **JavaScript ES6+** - Interaktive Funktionalität
- **Font Awesome 6.5** - Icons
- **Google Fonts** - Typografie (Inter, JetBrains Mono)

## Projektstruktur

```
Portfolio/
├── index.html                  # Haupt-HTML-Datei
├── staticwebapp.config.json    # Azure SWA Konfiguration
├── README.md                   # Diese Datei
└── assets/
    ├── css/
    │   └── styles.css          # CSS-Styling
    ├── js/
    │   └── main.js             # JavaScript-Funktionalität
    └── images/
        └── profilbild.png      # Profilbild
```

## Lokale Entwicklung

Einfach `index.html` im Browser öffnen oder einen lokalen Server starten:

```bash
# Mit Python
python -m http.server 8080

# Mit Node.js (http-server)
npx http-server -p 8080
```

## Deployment

### Azure Static Web Apps

```bash
# SWA CLI installieren
npm install -g @azure/static-web-apps-cli

# Lokal testen
swa start

# Deployen
swa deploy --app-location "."
```

### Andere Hosting-Optionen

Das Portfolio kann auf jedem statischen Webhosting deployed werden:
- GitHub Pages
- Netlify
- Vercel
- Azure Blob Storage (Static Website)

## Wartung

### Dateien bearbeiten

- **Inhalte ändern:** `index.html`
- **Styling anpassen:** `assets/css/styles.css`
- **Interaktionen ändern:** `assets/js/main.js`
- **Bilder austauschen:** `assets/images/`

### Skills aktualisieren

Skills befinden sich in `index.html` im Abschnitt `<section id="skills">`. Jeder Skill hat einen `data-progress` Wert (0-100).

### Erfahrung hinzufügen

Timeline-Einträge befinden sich im Abschnitt `<section id="experience">`. Neue Einträge als `<div class="timeline-item">` hinzufügen.

---

© 2024 Dines Nimalthas
