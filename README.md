# ii-grile

Site static pentru pregatirea examenului de Informatica Industriala. Aplicatia ruleaza direct din GitHub Pages, fara backend si fara baza de date.

## Rulare locala

Deschide `index.html` in browser. Pentru verificarea bancii de intrebari:

```bash
node scripts/validate-questions.mjs
```

## GitHub Pages

In repository, mergi la `Settings -> Pages`, alege `Deploy from a branch`, apoi `main` si folderul `/root`. Dupa salvare, site-ul va fi disponibil la URL-ul GitHub Pages al repository-ului.

## Structura

- `index.html` - pagina statica principala
- `css/style.css` - stilurile aplicatiei
- `js/questions.js` - banca de intrebari
- `js/app.js` - logica pentru antrenament, examen, progres si statistici
- `scripts/validate-questions.mjs` - verificari pentru banca de intrebari

## Adaugare intrebari

Adauga obiecte noi in `QUESTION_BANK` din `js/questions.js`. Fiecare intrebare trebuie sa aiba `id` unic stabil, `course`, `difficulty`, `text`, exact patru `options`, `correct`, `explanation` si `source`.

## Progres separat pentru fiecare coleg

Progresul se salveaza in `localStorage`, cu cheia versionata `industrialInformaticsQuiz_v2`. Asta inseamna ca fiecare coleg care intra pe acelasi link are progresul lui, salvat local in propriul browser. Datele nu se trimit pe GitHub si nu se amesteca intre utilizatori.

Aplicatia include export/import progres JSON si resetare cu confirmare.
