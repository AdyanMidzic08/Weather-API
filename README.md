# Weather API V2

Dies ist eine interaktive Wetter-Webanwendung, die es Benutzern ermöglicht, aktuelle Wetterdaten und Vorhersagen für Städte auf der ganzen Welt abzurufen. Das Projekt wurde mit HTML, CSS und JavaScript erstellt und nutzt die OpenWeatherMap API.

## 📋 Inhaltsverzeichnis

- [Funktionen](#funktionen)
- [Technologien](#technologien)
- [Installation & Einrichtung](#installation--einrichtung)
- [Benutzung](#benutzung)
- [Projektstruktur](#projektstruktur)

## ✨ Funktionen

- **Stadtsuche**: Geben Sie den Namen einer beliebigen Stadt ein, um die Wetterdaten abzurufen.
- **Detaillierte Wetterdaten**:
  - Temperatur in Celsius (°C)
  - Wetterzustand (z.B. Klar, Regen, Wolkig)
  - Sichtweite (in Metern)
  - Windgeschwindigkeit (in m/s)
  - Luftfeuchtigkeit (%)
- **Windrichtung**: Ein visueller Pfeil zeigt die aktuelle Windrichtung an.
- **Vorhersage-Navigation**: Buttons ("Gestern" / "Morgen"), um durch verschiedene Zeitpunkte der Vorhersagedaten zu navigieren.
- **Fehlerbehandlung**: Visuelles Feedback, wenn keine weiteren Daten verfügbar sind (z.B. Ende der Vorhersage).

## 🛠 Technologien

- **HTML5**: Struktur der Webseite.
- **CSS3**: Styling und Layout (inklusive Flexbox/Grid).
- **JavaScript (ES6+)**: Logik für API-Aufrufe, DOM-Manipulation und Event-Handling.
- **API**: [OpenWeatherMap API](https://openweathermap.org/api) (Forecast Endpoint).

## 🚀 Installation & Einrichtung

Um dieses Projekt lokal auf Ihrem Computer auszuführen, folgen Sie diesen Schritten:

1. **Projekt herunterladen**:
   Klonen Sie das Repository oder laden Sie den Ordner herunter.

2. **Dateien öffnen**:
   Navigieren Sie in den Projektordner `Weather-API-V2`.

3. **Starten**:
   Öffnen Sie die Datei `index.html` in einem modernen Webbrowser (z.B. Chrome, Firefox, Safari).

   > **Hinweis**: Eine aktive Internetverbindung ist erforderlich, da die Wetterdaten live von der OpenWeatherMap API abgerufen werden.

## 📖 Benutzung

1. **Stadt eingeben**:
   Geben Sie im Eingabefeld oben den Namen der gewünschten Stadt ein (z.B. "Berlin", "London", "New York").

2. **Wetter abrufen**:
   Klicken Sie auf den Button **"Select"**.
3. **Daten ansehen**:
   Die Wetterdaten für die ausgewählte Stadt werden angezeigt, inklusive Datum, Icon und Details.

4. **Navigieren**:
   - Klicken Sie auf **"Morgen"**, um die Vorhersage für den nächsten Zeitraum/Tag zu sehen.
   - Klicken Sie auf **"Gestern"**, um zurück zu navigieren.
   - Wenn Sie das Ende der verfügbaren Daten erreichen, wird eine entsprechende Meldung angezeigt und der Button deaktiviert.

## 📂 Projektstruktur

```text
Weather-API-V2/
├── index.html      # Hauptstruktur der Webseite
├── style.css       # Design und Styling
├── script.js       # Anwendungslogik und API-Verbindung
├── README.md       # Projektdokumentation
└── Font/           # Schriftarten (falls vorhanden)
```

## ⚠️ Hinweise

- Der API-Key ist im JavaScript-Code zu Demonstrationszwecken enthalten. Für produktive Anwendungen sollte dieser sicher verwahrt werden.
- Die Navigation "Gestern"/"Morgen" springt durch die von der API gelieferten Vorhersage-Intervalle.

---

Erstellt für das Schulprojekt im Fach Systemtechnik & Software.
