const QUESTION_BANK=[
  {
    "id": "q001",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce afirmă Principiul Responsabilității Unice (SRP)?",
    "options": [
      "O clasă ar trebui să aibă un singur motiv pentru a se schimba.",
      "O clasă ar trebui să gestioneze multiple responsabilități.",
      "O clasă ar trebui să fie deschisă pentru extindere.",
      "O clasă ar trebui să depindă de implementări concrete."
    ],
    "correct": "O clasă ar trebui să aibă un singur motiv pentru a se schimba.",
    "explanation": "SRP cere o singură responsabilitate și un singur motiv de modificare.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q002",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Cum beneficiază SRP designul software-ului?",
    "options": [
      "Face codul mai complex și mai greu de întreținut.",
      "Face codul mai ușor de înțeles și de modificat.",
      "Permite claselor să gestioneze multiple funcționalități.",
      "Necesită mai multe dependențe în fiecare clasă."
    ],
    "correct": "Face codul mai ușor de înțeles și de modificat.",
    "explanation": "Separarea responsabilităților reduce impactul schimbărilor și simplifică testarea.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q003",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care este ideea principală a Principiului Open/Closed (OCP)?",
    "options": [
      "Entitățile software trebuie să fie închise pentru extindere și deschise pentru modificare.",
      "Entitățile software trebuie să depindă de implementări concrete.",
      "Entitățile software trebuie să fie deschise pentru extindere, dar închise pentru modificare.",
      "Entitățile software trebuie să evite interfețele."
    ],
    "correct": "Entitățile software trebuie să fie deschise pentru extindere, dar închise pentru modificare.",
    "explanation": "OCP urmărește adăugarea comportamentelor noi prin extensie, fără rescrierea codului stabil.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q004",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care dintre următoarele este un exemplu de încălcare a OCP?",
    "options": [
      "Adăugarea unei subclase fără a modifica codul existent.",
      "Utilizarea interfețelor pentru extensii flexibile.",
      "Extinderea unei clase prin moștenire.",
      "Modificarea unei clase existente pentru a adăuga funcționalități noi."
    ],
    "correct": "Modificarea unei clase existente pentru a adăuga funcționalități noi.",
    "explanation": "Dacă fiecare funcționalitate nouă cere editarea aceleiași clase, codul nu este închis pentru modificare.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q005",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce asigură Principiul Substituției lui Liskov (LSP)?",
    "options": [
      "Subtipurile pot înlocui tipurile de bază fără a afecta corectitudinea programului.",
      "Subtipurile trebuie să depindă de implementări specifice.",
      "Subtipurile trebuie să evite moștenirea.",
      "Subtipurile trebuie să fie întotdeauna statice."
    ],
    "correct": "Subtipurile pot înlocui tipurile de bază fără a afecta corectitudinea programului.",
    "explanation": "Obiectul derivat trebuie să respecte contractul comportamental al tipului de bază.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q006",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce ar fi o încălcare a LSP?",
    "options": [
      "O subclasă poate înlocui superclasa fără a-i altera comportamentul.",
      "O subclasă suprascrie o metodă și aruncă o excepție neașteptată pentru apeluri valide.",
      "O subclasă adaugă o metodă nouă.",
      "O subclasă extinde o clasă abstractă."
    ],
    "correct": "O subclasă suprascrie o metodă și aruncă o excepție neașteptată pentru apeluri valide.",
    "explanation": "Comportamentul incompatibil cu promisiunile bazei rupe substituibilitatea.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q007",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care este ideea de bază a Principiului Segregării Interfețelor (ISP)?",
    "options": [
      "Clienții trebuie forțați să depindă de toate interfețele.",
      "Interfețele trebuie să fie cât mai mari posibil.",
      "Clienții nu trebuie forțați să depindă de interfețe pe care nu le folosesc.",
      "Interfețele nu trebuie folosite."
    ],
    "correct": "Clienții nu trebuie forțați să depindă de interfețe pe care nu le folosesc.",
    "explanation": "ISP recomandă interfețe mici și orientate pe nevoile reale ale clienților.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q008",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care variantă respectă cel mai bine ISP?",
    "options": [
      "O singură interfață complexă ce include toate operațiile posibile.",
      "O interfață care moștenește toate interfețele existente.",
      "Evitarea interfețelor și folosirea directă a claselor concrete.",
      "Mai multe interfețe mici și specifice pentru funcționalități diferite."
    ],
    "correct": "Mai multe interfețe mici și specifice pentru funcționalități diferite.",
    "explanation": "Interfețele focalizate evită metodele inutile și NotImplementedException.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q009",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care este ideea principală a Principiului Inversiunii Dependențelor (DIP)?",
    "options": [
      "Modulele de nivel înalt și cele de nivel scăzut trebuie să depindă de abstracții.",
      "Modulele de nivel înalt trebuie să depindă direct de modulele de nivel scăzut.",
      "Trebuie eliminate toate dependențele dintre module.",
      "Abstracțiile trebuie să depindă de implementări concrete."
    ],
    "correct": "Modulele de nivel înalt și cele de nivel scăzut trebuie să depindă de abstracții.",
    "explanation": "DIP decuplează logica de business de detaliile tehnice.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q010",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce urmărim să obținem printr-un design software bine structurat?",
    "options": [
      "Dependență directă a nivelului înalt față de nivelul scăzut.",
      "Decuplare și întreținere mai ușoară.",
      "Reducerea folosirii abstracțiilor.",
      "Creșterea cuplării dintre componente."
    ],
    "correct": "Decuplare și întreținere mai ușoară.",
    "explanation": "Un design bun limitează cuplarea și face schimbările locale și verificabile.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q011",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este un delegate în C#?",
    "options": [
      "O clasă care implementează un set de metode abstracte.",
      "Un array care stochează mai multe valori.",
      "Un tip care poate referi o metodă sau un grup de metode cu semnături compatibile.",
      "O metodă care returnează obligatoriu bool."
    ],
    "correct": "Un tip care poate referi o metodă sau un grup de metode cu semnături compatibile.",
    "explanation": "Delegatul este o referință type-safe către metode compatibile.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q012",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Care declarație definește corect un delegate?",
    "options": [
      "public class MyDelegate(string param);",
      "public void delegate MyDelegate(int param);",
      "public int MyDelegate delegate(int param);",
      "public delegate void MyDelegate(int param);"
    ],
    "correct": "public delegate void MyDelegate(int param);",
    "explanation": "Sintaxa începe cu delegate, urmat de tipul returnat, nume și parametri.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q013",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Cum este definit corect un eveniment în C#?",
    "options": [
      "public event EventHandler MyEvent;",
      "public class event MyEvent;",
      "public delegate EventHandler MyEvent;",
      "public Event MyEvent;"
    ],
    "correct": "public event EventHandler MyEvent;",
    "explanation": "Un eveniment se declară cu event și un tip delegate.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q014",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care sunt cele trei niveluri dintr-o arhitectură tipică 3-Tier?",
    "options": [
      "Prezentare, Aplicație, Bază de Date.",
      "Prezentare, Logică de Afaceri, Acces la Date.",
      "Client, Middleware, Server.",
      "Interfață, Controller, Model."
    ],
    "correct": "Prezentare, Logică de Afaceri, Acces la Date.",
    "explanation": "3-Tier separă interfața, regulile aplicației și persistența.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q015",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care nivel 3-Tier este responsabil pentru interacțiunea cu utilizatorul?",
    "options": [
      "Nivelul de Acces la Date.",
      "Nivelul Logicii de Afaceri.",
      "Nivelul de Prezentare.",
      "Nivelul Infrastructurii."
    ],
    "correct": "Nivelul de Prezentare.",
    "explanation": "Presentation Tier afișează date și preia acțiunile utilizatorului.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q016",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care nivel gestionează validarea și regulile de afaceri?",
    "options": [
      "Nivelul de Prezentare.",
      "Nivelul de Acces la Date.",
      "Nivelul Interfeței cu Utilizatorul.",
      "Nivelul Logicii de Afaceri."
    ],
    "correct": "Nivelul Logicii de Afaceri.",
    "explanation": "Business Logic Tier implementează regulile și procesele aplicației.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q017",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este scopul principal al genericelor în C#?",
    "options": [
      "Permit structuri și metode type-safe fără fixarea unui singur tip concret.",
      "Permit numai legarea târzie a metodelor.",
      "Permit exclusiv tiparea dinamică.",
      "Reduc obligatoriu numărul de linii de cod."
    ],
    "correct": "Permit structuri și metode type-safe fără fixarea unui singur tip concret.",
    "explanation": "Genericele păstrează verificarea de tip și permit reutilizarea algoritmilor.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q018",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este o declarație corectă a unei clase generice?",
    "options": [
      "public class MyClass<T>() { }",
      "public class MyClass<T> { }",
      "public generic class MyClass { }",
      "public class MyClass(generic T) { }"
    ],
    "correct": "public class MyClass<T> { }",
    "explanation": "Parametrul generic se scrie între paranteze unghiulare după numele clasei.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q019",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Cum restricționezi T astfel încât să implementeze IDisposable?",
    "options": [
      "public class MyClass<T> where T : struct { }",
      "public class MyClass<T> where T : new() { }",
      "public class MyClass<T> where T : IDisposable { }",
      "public class MyClass<T> where T : class { }"
    ],
    "correct": "public class MyClass<T> where T : IDisposable { }",
    "explanation": "Constrângerea where T : IDisposable acceptă tipuri care respectă interfața.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q020",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce reprezintă un fir de execuție în C#?",
    "options": [
      "Un tip de structură de date.",
      "O colecție de metode private.",
      "Un tip de bibliotecă publică.",
      "Un flux de execuție care poate rula concurent cu alte fire."
    ],
    "correct": "Un flux de execuție care poate rula concurent cu alte fire.",
    "explanation": "Un thread este o cale de execuție în interiorul unui proces.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q021",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce namespace este folosit în mod obișnuit pentru fire de execuție?",
    "options": [
      "System.Threading",
      "System.Collections",
      "System.IO",
      "System.Net"
    ],
    "correct": "System.Threading",
    "explanation": "Clasele Thread și Monitor se găsesc în System.Threading.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q022",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Care este scopul Thread.Sleep()?",
    "options": [
      "Pornește un thread nou.",
      "Suspendă temporar thread-ul curent pentru perioada specificată.",
      "Termină definitiv un thread.",
      "Sincronizează automat toate thread-urile."
    ],
    "correct": "Suspendă temporar thread-ul curent pentru perioada specificată.",
    "explanation": "Thread.Sleep blochează firul curent pentru intervalul transmis.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q023",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce înseamnă sincronizarea firelor de execuție?",
    "options": [
      "Toate firele sunt active exact în același moment.",
      "Firele rulează fără resurse comune.",
      "Coordonarea accesului și execuției pentru a păstra corectitudinea operațiilor.",
      "Toate firele, exceptând unul, sunt terminate."
    ],
    "correct": "Coordonarea accesului și execuției pentru a păstra corectitudinea operațiilor.",
    "explanation": "Sincronizarea protejează secțiunile critice și datele comune.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q024",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce este un deadlock?",
    "options": [
      "Un fir se termină din cauza unei excepții.",
      "Un fir consumă mai mult procesor.",
      "Mai multe fire finalizează simultan aceeași operație.",
      "Două sau mai multe fire se așteaptă reciproc pentru resurse și nu mai progresează."
    ],
    "correct": "Două sau mai multe fire se așteaptă reciproc pentru resurse și nu mai progresează.",
    "explanation": "Deadlock-ul apare printr-un ciclu de așteptare între resurse blocate.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q025",
    "course": "Curs 3 – Aplicații desktop",
    "text": "În MVC, care este rolul Controller-ului?",
    "options": [
      "Procesează intrarea și coordonează Modelul cu View-ul.",
      "Randează exclusiv interfața și stochează toate datele.",
      "Administrează direct baza de date și regulile de business.",
      "Reprezintă numai datele persistente."
    ],
    "correct": "Procesează intrarea și coordonează Modelul cu View-ul.",
    "explanation": "Controller-ul interpretează acțiunile utilizatorului și coordonează fluxul.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q026",
    "course": "Curs 5 – Entity Framework",
    "text": "Care este scopul principal al Entity Framework?",
    "options": [
      "Crearea interfețelor grafice.",
      "Maparea obiect-relațională (ORM).",
      "Implementarea algoritmilor numerici.",
      "Gestionarea manuală a memoriei."
    ],
    "correct": "Maparea obiect-relațională (ORM).",
    "explanation": "EF mapează clasele aplicației la tabele și înregistrări.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q027",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce metodă salvează modificările în baza de date?",
    "options": [
      "SaveDatabase()",
      "Commit()",
      "SaveChanges()",
      "Submit()"
    ],
    "correct": "SaveChanges()",
    "explanation": "SaveChanges generează comenzile pentru entitățile urmărite.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q028",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce clasă acționează de obicei ca unitate de lucru în EF?",
    "options": [
      "DbEntity",
      "ObjectSet",
      "ModelBuilder",
      "DbContext"
    ],
    "correct": "DbContext",
    "explanation": "DbContext coordonează interogările, stările și persistența.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q029",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce metodă LINQ filtrează datele?",
    "options": [
      "Where()",
      "Get()",
      "Retrieve()",
      "SelectFrom()"
    ],
    "correct": "Where()",
    "explanation": "Where aplică un predicat și păstrează elementele care îl satisfac.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q030",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce atribut specifică explicit cheia primară?",
    "options": [
      "[KeyValue]",
      "[Key]",
      "[Id]",
      "[Primary]"
    ],
    "correct": "[Key]",
    "explanation": "Data Annotation [Key] marchează cheia primară.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q031",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce se întâmplă dacă nu se apelează SaveChanges()?",
    "options": [
      "Baza de date este ștearsă.",
      "Modificările sunt salvate automat.",
      "Modificările nu sunt persistate în baza de date.",
      "Se salvează doar prima modificare."
    ],
    "correct": "Modificările nu sunt persistate în baza de date.",
    "explanation": "Schimbările rămân în context, dar baza nu este actualizată.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q032",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce clasă centrală expune colecțiile de entități în EF?",
    "options": [
      "DataSet",
      "DbTable",
      "SchemaBuilder",
      "DbContext"
    ],
    "correct": "DbContext",
    "explanation": "O clasă derivată din DbContext expune DbSet-urile modelului.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": "Marcajul din fotografie pare greșit; răspunsul tehnic este DbContext."
  },
  {
    "id": "q033",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce metodă elimină o entitate dintr-un DbSet?",
    "options": [
      "Remove()",
      "Delete()",
      "Destroy()",
      "Clear()"
    ],
    "correct": "Remove()",
    "explanation": "Remove marchează entitatea Deleted până la SaveChanges.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q034",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce este scaffolding-ul în EF?",
    "options": [
      "Un stil de interfață grafică.",
      "Generarea automată de cod pe baza structurii bazei de date.",
      "Crearea unei ferestre desktop.",
      "Optimizarea automată a codului C#."
    ],
    "correct": "Generarea automată de cod pe baza structurii bazei de date.",
    "explanation": "Database First generează entitățile și DbContext-ul din schemă.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q035",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce descrie cel mai bine un delegate in C#?",
    "options": [
      "Un component UI.",
      "O clasă de bază pentru date.",
      "Un tip care poate referi o metodă compatibilă.",
      "Un thread."
    ],
    "correct": "Un tip care poate referi o metodă compatibilă.",
    "explanation": "Delegatul descrie semnătura metodelor pe care le poate referi.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q036",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce cuvânt-cheie declară un delegate?",
    "options": [
      "method",
      "func",
      "event",
      "delegate"
    ],
    "correct": "delegate",
    "explanation": "Cuvântul-cheie delegate introduce definiția tipului.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q037",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce permite un multicast delegate?",
    "options": [
      "Apelarea mai multor metode din lista de invocare.",
      "Apelarea unei singure metode.",
      "Declararea mai multor excepții.",
      "Afișarea alertelor în UI."
    ],
    "correct": "Apelarea mai multor metode din lista de invocare.",
    "explanation": "Metodele sunt apelate în ordinea înregistrării.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q038",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este un eveniment în C#?",
    "options": [
      "Un tip de clasă.",
      "Un mecanism de notificare între obiecte.",
      "O metodă statică obligatorie.",
      "Un thread de sistem."
    ],
    "correct": "Un mecanism de notificare între obiecte.",
    "explanation": "Evenimentele implementează modelul publisher–subscriber.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q039",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce cuvânt-cheie definește un eveniment?",
    "options": [
      "delegate",
      "raise",
      "event",
      "signal"
    ],
    "correct": "event",
    "explanation": "event limitează invocarea la clasa care îl declară.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q040",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Cum este declanșat de obicei un eveniment?",
    "options": [
      "call",
      "send",
      "fire()",
      "Invoke()"
    ],
    "correct": "Invoke()",
    "explanation": "Sintaxa uzuală este MyEvent?.Invoke(sender,args).",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q041",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce operator abonează un handler la un eveniment?",
    "options": [
      "+=",
      "event += handler; ca un cuvânt-cheie distinct",
      "link",
      "delegate +"
    ],
    "correct": "+=",
    "explanation": "+= adaugă handler-ul în lista de invocare.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q042",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Un delegate poate referi:",
    "options": [
      "Numai metode statice.",
      "Metode statice și metode de instanță compatibile.",
      "Numai metode de instanță.",
      "Numai metode abstracte."
    ],
    "correct": "Metode statice și metode de instanță compatibile.",
    "explanation": "Contează semnătura, nu caracterul static al metodei.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q043",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Cum se dezabonează un handler?",
    "options": [
      "delete",
      "unsubscribe",
      "-= handler",
      "remove(handler)"
    ],
    "correct": "-= handler",
    "explanation": "-= elimină metoda din lista de abonați.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q044",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este EventHandler?",
    "options": [
      "O clasă UI.",
      "Un nume rezervat.",
      "Un manager de thread-uri.",
      "Un delegate predefinit pentru evenimente."
    ],
    "correct": "Un delegate predefinit pentru evenimente.",
    "explanation": "EventHandler are semnătura object sender, EventArgs e.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q045",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce namespace este folosit pentru threading clasic?",
    "options": [
      "System.Threading",
      "System.IO",
      "System.Linq",
      "System.Threading.Tasks"
    ],
    "correct": "System.Threading",
    "explanation": "System.Threading conține Thread și mecanismele de sincronizare.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q046",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă pornește un obiect Thread?",
    "options": [
      "Begin()",
      "Start()",
      "Run()",
      "Launch()"
    ],
    "correct": "Start()",
    "explanation": "Start programează executarea metodei asociate.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q047",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă așteaptă terminarea unui Thread?",
    "options": [
      "Await()",
      "Stop()",
      "Join()",
      "WaitFor()"
    ],
    "correct": "Join()",
    "explanation": "Join blochează apelantul până la încheierea thread-ului țintă.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q048",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă suspendă voluntar și temporar thread-ul curent?",
    "options": [
      "Wait()",
      "Pause()",
      "Kill()",
      "Sleep()"
    ],
    "correct": "Sleep()",
    "explanation": "Thread.Sleep suspendă temporar firul curent.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": "Formularea din fotografie este ambiguă; răspunsul tehnic este Sleep()."
  },
  {
    "id": "q049",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce cuvânt-cheie protejează o secțiune critică?",
    "options": [
      "lock",
      "block",
      "if(lock)",
      "mutex"
    ],
    "correct": "lock",
    "explanation": "lock asigură exclusivitate mutuală pe obiectul de sincronizare.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q050",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Cum eviți accesul simultan necontrolat la o resursă?",
    "options": [
      "Delay()",
      "lock sau Monitor",
      "Start()",
      "Print()"
    ],
    "correct": "lock sau Monitor",
    "explanation": "lock este construit peste Monitor și protejează secțiunile critice.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q051",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce este un ThreadPool?",
    "options": [
      "O listă de thread-uri terminate.",
      "Un UI manager.",
      "Un colectiv de thread-uri reutilizabile gestionate de runtime.",
      "O zonă de memorie partajată."
    ],
    "correct": "Un colectiv de thread-uri reutilizabile gestionate de runtime.",
    "explanation": "ThreadPool reduce costul creării repetate a thread-urilor.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q052",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce efect are Thread.Sleep(0)?",
    "options": [
      "Blochează întregul proces.",
      "Oprește definitiv thread-ul.",
      "Repornește thread-ul.",
      "Cedează execuția altui thread eligibil, fără întârziere impusă."
    ],
    "correct": "Cedează execuția altui thread eligibil, fără întârziere impusă.",
    "explanation": "Sleep(0) permite scheduler-ului să aleagă alt thread pregătit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q053",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă face un thread să aștepte terminarea altuia?",
    "options": [
      "Thread.Join()",
      "Thread.Suspend()",
      "Thread.Abort()",
      "Thread.Stop()"
    ],
    "correct": "Thread.Join()",
    "explanation": "Join este mecanismul direct de așteptare a finalizării.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q054",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce face base() într-un constructor?",
    "options": [
      "Apelează metoda Main().",
      "Apelează constructorul clasei de bază.",
      "Inițializează o interfață.",
      "Creează automat o clasă nouă."
    ],
    "correct": "Apelează constructorul clasei de bază.",
    "explanation": "base(...) transmite controlul către constructorul părinte.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q055",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce este o clasă abstractă?",
    "options": [
      "O clasă cu numai metode statice.",
      "O clasă care nu poate avea constructor.",
      "O clasă ce poate conține membri fără implementare și nu poate fi instanțiată direct.",
      "O clasă cu numai câmpuri readonly."
    ],
    "correct": "O clasă ce poate conține membri fără implementare și nu poate fi instanțiată direct.",
    "explanation": "Clasele abstracte combină comportament comun cu membri abstracți.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q056",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce cuvânt-cheie marchează o clasă care nu poate fi moștenită?",
    "options": [
      "static",
      "final",
      "private",
      "sealed"
    ],
    "correct": "sealed",
    "explanation": "C# folosește sealed; final nu este cuvântul-cheie potrivit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": "Marcajul din fotografie pare greșit; în C# răspunsul este sealed."
  },
  {
    "id": "q057",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce înseamnă polimorfismul?",
    "options": [
      "Un obiect poate fi tratat sub mai multe forme, în funcție de context.",
      "Moștenire multiplă de clase.",
      "Ascunderea tuturor membrilor.",
      "Suprasarcină obligatorie a operatorilor."
    ],
    "correct": "Un obiect poate fi tratat sub mai multe forme, în funcție de context.",
    "explanation": "Polimorfismul alege comportamentul potrivit printr-o referință comună.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q058",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce definește o interfață?",
    "options": [
      "O clasă abstractă cu implementare completă.",
      "Un contract de membri pe care implementatorii trebuie să îi ofere.",
      "O clasă care nu poate fi instanțiată.",
      "O metodă generică."
    ],
    "correct": "Un contract de membri pe care implementatorii trebuie să îi ofere.",
    "explanation": "Interfața descrie capabilități fără a impune o bază concretă.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q059",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce se întâmplă când o derivată suprascrie o metodă virtuală?",
    "options": [
      "Nu mai poate accesa metoda de bază.",
      "Trebuie să folosească abstract.",
      "Poate implementa propria versiune folosind override.",
      "Nu mai poate apela constructorul de bază."
    ],
    "correct": "Poate implementa propria versiune folosind override.",
    "explanation": "override activează polimorfismul dinamic.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q060",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce simbol specifică moștenirea în C#?",
    "options": [
      "inherits",
      "extends",
      "base",
      ":"
    ],
    "correct": ":",
    "explanation": "Clasa de bază sau interfețele apar după două puncte.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q061",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce este încapsularea?",
    "options": [
      "Ascunderea datelor interne și expunerea unei interfețe controlate.",
      "Ascunderea erorilor de execuție.",
      "Moștenirea automată de clase.",
      "Crearea exclusivă de interfețe."
    ],
    "correct": "Ascunderea datelor interne și expunerea unei interfețe controlate.",
    "explanation": "Încapsularea protejează starea obiectului și controlează accesul.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q062",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care sunt straturile principale 3-Tier?",
    "options": [
      "API, Frontend, Backend.",
      "Presentation, Business Logic, Data Access.",
      "View, Controller, Model.",
      "Controller, Service, Repository."
    ],
    "correct": "Presentation, Business Logic, Data Access.",
    "explanation": "Aceste straturi separă interfața, regulile și accesul la date.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q063",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce responsabilitate are Business Logic?",
    "options": [
      "Afișarea interfeței.",
      "Conectarea fizică la baza de date.",
      "Implementarea regulilor și proceselor de business.",
      "Stocarea efectivă a datelor."
    ],
    "correct": "Implementarea regulilor și proceselor de business.",
    "explanation": "Business Logic orchestrează cazurile de utilizare și validările.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q064",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Cum comunică Presentation cu baza de date într-un 3-Tier corect?",
    "options": [
      "Direct prin SQL.",
      "Exclusiv prin WCF.",
      "Prin fișiere XML locale.",
      "Prin Business Logic și apoi Data Access."
    ],
    "correct": "Prin Business Logic și apoi Data Access.",
    "explanation": "Presentation nu trebuie să sară peste straturi.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q065",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "De ce separăm straturile?",
    "options": [
      "Pentru modularitate, mentenanță și testabilitate.",
      "Pentru a reduce obligatoriu numărul de clase.",
      "Pentru a face aplicația mai lentă.",
      "Pentru a ajuta numai UI-ul."
    ],
    "correct": "Pentru modularitate, mentenanță și testabilitate.",
    "explanation": "Separarea limitează impactul schimbărilor și permite testarea izolată.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q066",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce înseamnă litera S din SOLID?",
    "options": [
      "Simplification",
      "Single Responsibility Principle",
      "Strong Coupling",
      "Static Class"
    ],
    "correct": "Single Responsibility Principle",
    "explanation": "S reprezintă principiul responsabilității unice.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q067",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care este scopul Open/Closed?",
    "options": [
      "Clasa poate fi modificată ori de câte ori apare o funcție nouă.",
      "Clasa poate fi instanțiată oriunde.",
      "Clasa este deschisă pentru extindere, dar închisă pentru modificare.",
      "Permite moștenire multiplă de clase."
    ],
    "correct": "Clasa este deschisă pentru extindere, dar închisă pentru modificare.",
    "explanation": "Funcționalitatea nouă se adaugă fără editarea codului stabil.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q068",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce exprimă Liskov Substitution?",
    "options": [
      "Derivatele pot modifica complet contractul bazei.",
      "O clasă abstractă nu trebuie moștenită.",
      "Toate clasele implementează IDisposable.",
      "O instanță derivată poate fi folosită oriunde este așteptată baza."
    ],
    "correct": "O instanță derivată poate fi folosită oriunde este așteptată baza.",
    "explanation": "LSP păstrează corectitudinea când baza este substituită cu un subtip.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q069",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce înseamnă Interface Segregation?",
    "options": [
      "Interfețele trebuie să fie mici și specifice.",
      "Trebuie folosit un număr cât mai mic de interfețe, indiferent de dimensiune.",
      "Trebuie implementată o singură interfață mare.",
      "Interfețele nu se pot moșteni."
    ],
    "correct": "Interfețele trebuie să fie mici și specifice.",
    "explanation": "Clasele nu trebuie forțate să implementeze metode inutile.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q070",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce afirmă Dependency Inversion?",
    "options": [
      "Clasele mari trebuie să depindă de clase mici.",
      "Nivelul înalt și nivelul jos trebuie să depindă de abstracții.",
      "Nu trebuie folosite interfețe.",
      "Dependențele trebuie instanțiate direct în fiecare clasă."
    ],
    "correct": "Nivelul înalt și nivelul jos trebuie să depindă de abstracții.",
    "explanation": "DIP separă politica aplicației de detaliile tehnologice.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q071",
    "course": "Modele de proiectare – din subiecte",
    "text": "Ce asigură Singleton?",
    "options": [
      "Mai multe instanțe partajate sunt create automat.",
      "Clasa poate fi moștenită de mai multe ori.",
      "O singură instanță a clasei este creată și reutilizată.",
      "Toate metodele devin statice."
    ],
    "correct": "O singură instanță a clasei este creată și reutilizată.",
    "explanation": "Singleton controlează instanțierea și punctul de acces.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q072",
    "course": "Modele de proiectare – din subiecte",
    "text": "Care este o implementare simplă thread-safe de Singleton?",
    "options": [
      "Constructor public și variabilă statică modificabilă.",
      "Clasă partial fără constructor.",
      "Doar atributul sealed.",
      "Câmp static readonly inițializat și constructor privat."
    ],
    "correct": "Câmp static readonly inițializat și constructor privat.",
    "explanation": "Inițializarea statică .NET este thread-safe, iar constructorul privat blochează instanțierea externă.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q073",
    "course": "Modele de proiectare – din subiecte",
    "text": "Care este scopul Facade?",
    "options": [
      "Oferă o interfață simplificată către un subsistem complex.",
      "Creează obiecte complexe.",
      "Optimizează automat performanța.",
      "Criptează date sensibile."
    ],
    "correct": "Oferă o interfață simplificată către un subsistem complex.",
    "explanation": "Facade ascunde coordonarea mai multor componente.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q074",
    "course": "Modele de proiectare – din subiecte",
    "text": "Ce diferențiază Singleton de Facade?",
    "options": [
      "Singleton este întotdeauna thread-safe, iar Facade nu.",
      "Singleton controlează instanțierea; Facade simplifică un subsistem.",
      "Facade folosește numai metode statice.",
      "Au exact același scop."
    ],
    "correct": "Singleton controlează instanțierea; Facade simplifică un subsistem.",
    "explanation": "Cele două pattern-uri rezolvă probleme diferite.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q075",
    "course": "Modele de proiectare – din subiecte",
    "text": "Ce descrie cel mai bine rolul unei clase Facade?",
    "options": [
      "O clasă abstractă pentru toate serviciile.",
      "O clasă de configurare.",
      "O interfață unificată care apelează mai multe clase interne.",
      "O metodă statică pentru apeluri directe."
    ],
    "correct": "O interfață unificată care apelează mai multe clase interne.",
    "explanation": "Facade coordonează obiectele subsistemului și expune operații simple.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q076",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care componentă execută codul gestionat și oferă servicii precum garbage collection?",
    "options": [
      "BCL",
      "NuGet",
      "MSIL",
      "CLR"
    ],
    "correct": "CLR",
    "explanation": "Common Language Runtime gestionează execuția codului .NET și serviciile runtime.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q077",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "În ce formă intermediară este compilat, de regulă, codul C# înainte de execuție?",
    "options": [
      "CIL/MSIL",
      "Cod mașină x64 fix",
      "Java bytecode",
      "SQL intermediar"
    ],
    "correct": "CIL/MSIL",
    "explanation": "Compilatorul produce CIL, iar runtime-ul îl transformă în cod nativ.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q078",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este rolul principal al compilatorului JIT?",
    "options": [
      "Elimină automat toate excepțiile.",
      "Transformă CIL în cod nativ la execuție.",
      "Convertește SQL în obiecte.",
      "Desenează interfața grafică."
    ],
    "correct": "Transformă CIL în cod nativ la execuție.",
    "explanation": "JIT compilează metodele pentru arhitectura procesorului pe care rulează aplicația.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q079",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Ce descrie cel mai bine Base Class Library?",
    "options": [
      "Un editor vizual pentru formulare.",
      "Un server obligatoriu pentru C#.",
      "Un set reutilizabil de tipuri și API-uri .NET.",
      "Un manager exclusiv de baze de date."
    ],
    "correct": "Un set reutilizabil de tipuri și API-uri .NET.",
    "explanation": "BCL oferă colecții, fișiere, rețea, text și multe alte funcții comune.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q080",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Ce se întâmplă la boxing în C#?",
    "options": [
      "O referință este transformată obligatoriu în struct.",
      "Un obiect este șters de Garbage Collector.",
      "Un assembly este comprimat într-un pachet NuGet.",
      "O valoare de tip value type este împachetată într-o referință object sau interfață."
    ],
    "correct": "O valoare de tip value type este împachetată într-o referință object sau interfață.",
    "explanation": "Boxing mută reprezentarea valorii într-un obiect gestionat pe heap.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q081",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care afirmație despre tipurile valoare este corectă?",
    "options": [
      "La atribuire se copiază, în mod obișnuit, valoarea.",
      "Două variabile indică obligatoriu același obiect.",
      "Pot fi declarate numai în clase statice.",
      "Sunt colectate exclusiv prin IDisposable."
    ],
    "correct": "La atribuire se copiază, în mod obișnuit, valoarea.",
    "explanation": "Pentru value types, atribuirea produce în mod normal o copie independentă.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q082",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Pentru ce se folosește using într-un fișier C#?",
    "options": [
      "Moștenește automat o clasă.",
      "Importă un namespace sau definește un alias.",
      "Pornește un thread nou.",
      "Marchează metoda drept virtuală."
    ],
    "correct": "Importă un namespace sau definește un alias.",
    "explanation": "Directiva using simplifică referirea la tipuri din namespace-uri.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q083",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este diferența esențială dintre var și dynamic?",
    "options": [
      "var este netipat; dynamic este tipat static.",
      "Ambele pot fi folosite numai pentru numere.",
      "var este tipat static la compilare; dynamic amână rezolvarea operațiilor până la execuție.",
      "dynamic este doar un alias pentru string."
    ],
    "correct": "var este tipat static la compilare; dynamic amână rezolvarea operațiilor până la execuție.",
    "explanation": "Compilatorul deduce tipul lui var, în timp ce dynamic mută verificarea membrilor la runtime.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q084",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Ce mecanism este potrivit pentru eliberarea deterministă a unei resurse precum un fișier deschis?",
    "options": [
      "Doar Garbage Collector.",
      "O proprietate statică.",
      "Suprascrierea metodei Main.",
      "IDisposable împreună cu using."
    ],
    "correct": "IDisposable împreună cu using.",
    "explanation": "using apelează Dispose chiar și când apare o excepție în bloc.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q085",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care afirmație separă corect Garbage Collector de Dispose?",
    "options": [
      "GC gestionează memoria; Dispose eliberează explicit resurse externe sau limitate.",
      "Dispose compactează heap-ul, iar GC închide fișierele imediat.",
      "Ambele execută exact aceeași operație.",
      "GC se aplică numai structurilor, iar Dispose numai enumerărilor."
    ],
    "correct": "GC gestionează memoria; Dispose eliberează explicit resurse externe sau limitate.",
    "explanation": "Colectorul nu garantează eliberarea imediată a handle-urilor, conexiunilor sau stream-urilor.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q086",
    "course": "Curs 2 – OOP în C#",
    "text": "Care situație ilustrează abstractizarea?",
    "options": [
      "Toate câmpurile unei clase sunt publice.",
      "Consumatorul folosește metoda Porneste fără să cunoască detaliile motorului.",
      "Două metode au același corp.",
      "Un obiect este convertit în string."
    ],
    "correct": "Consumatorul folosește metoda Porneste fără să cunoască detaliile motorului.",
    "explanation": "Abstractizarea expune ceea ce este relevant și ascunde detaliile de implementare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q087",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce condiție trebuie îndeplinită pentru suprascriere dinamică în C#?",
    "options": [
      "Ambele metode trebuie să fie private.",
      "Derivata folosește numai new.",
      "Metoda de bază este virtual sau abstract, iar derivata folosește override.",
      "Metoda de bază trebuie să fie statică."
    ],
    "correct": "Metoda de bază este virtual sau abstract, iar derivata folosește override.",
    "explanation": "virtual/abstract și override păstrează același contract polimorfic.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q088",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce efect are new asupra unei metode cu același nume din clasa de bază?",
    "options": [
      "Transformă automat metoda în abstractă.",
      "Șterge metoda din clasa de bază.",
      "Permite moștenire multiplă.",
      "Ascunde membrul bazei; nu realizează override polimorfic."
    ],
    "correct": "Ascunde membrul bazei; nu realizează override polimorfic.",
    "explanation": "Alegerea metodei ascunse depinde de tipul static al referinței.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q089",
    "course": "Curs 2 – OOP în C#",
    "text": "Care este diferența dintre overload și override?",
    "options": [
      "Overload schimbă lista de parametri; override înlocuiește implementarea virtuală moștenită.",
      "Overload cere moștenire; override nu permite moștenire.",
      "Ambele descriu numai operatori.",
      "Override schimbă obligatoriu tipul returnat."
    ],
    "correct": "Overload schimbă lista de parametri; override înlocuiește implementarea virtuală moștenită.",
    "explanation": "Supraincărcarea se rezolvă la compilare, suprascrierea participă la polimorfism.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q090",
    "course": "Curs 2 – OOP în C#",
    "text": "Poate o clasă abstractă să aibă constructor?",
    "options": [
      "Nu, deoarece nu poate fi instanțiată direct.",
      "Da, constructorul poate inițializa partea comună a obiectelor derivate.",
      "Da, dar numai dacă este static.",
      "Nu, constructorii apar numai în structuri."
    ],
    "correct": "Da, constructorul poate inițializa partea comună a obiectelor derivate.",
    "explanation": "Constructorul abstractei este apelat în lanț la crearea unei derivate.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q091",
    "course": "Curs 2 – OOP în C#",
    "text": "Când este preferabilă compoziția în locul moștenirii?",
    "options": [
      "Când orice clasă trebuie să expună toate detaliile bazei.",
      "Când tipurile nu au nicio colaborare.",
      "Când relația este „are un” și comportamentele trebuie combinate flexibil.",
      "Numai când toate metodele sunt statice."
    ],
    "correct": "Când relația este „are un” și comportamentele trebuie combinate flexibil.",
    "explanation": "Compoziția reduce cuplarea față de o ierarhie forțată de tip „este un”.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q092",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce acces oferă modificatorul protected?",
    "options": [
      "Membrul este accesibil numai în același namespace.",
      "Membrul este public în orice assembly.",
      "Membrul este vizibil numai metodei Main.",
      "Membrul este accesibil clasei și claselor derivate."
    ],
    "correct": "Membrul este accesibil clasei și claselor derivate.",
    "explanation": "protected susține reutilizarea controlată în ierarhia de moștenire.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q093",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce avantaj oferă o interfață față de o clasă de bază concretă?",
    "options": [
      "Permite dependența de un contract și implementări alternative.",
      "Conține obligatoriu starea tuturor implementărilor.",
      "Poate fi instanțiată direct.",
      "Elimină nevoia de orice clasă."
    ],
    "correct": "Permite dependența de un contract și implementări alternative.",
    "explanation": "Consumatorul poate lucra cu mai multe implementări fără a cunoaște clasele lor.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q094",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce apel permite accesarea implementării suprascrise din clasa de bază?",
    "options": [
      "this.override()",
      "base.NumeMetoda()",
      "parent::NumeMetoda()",
      "super.NumeMetoda()"
    ],
    "correct": "base.NumeMetoda()",
    "explanation": "C# folosește base pentru membrii accesibili ai clasei părinte.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q095",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce restricție are o metodă abstractă?",
    "options": [
      "Trebuie să fie private.",
      "Poate exista numai într-o interfață statică.",
      "Nu are corp în clasa abstractă și trebuie implementată de o derivată concretă.",
      "Nu poate fi suprascrisă."
    ],
    "correct": "Nu are corp în clasa abstractă și trebuie implementată de o derivată concretă.",
    "explanation": "Metoda abstractă declară o obligație pentru clasele concrete.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q096",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Ce model de programare este caracteristic aplicațiilor WinForms?",
    "options": [
      "Procesare exclusiv batch.",
      "Execuție fără fir UI.",
      "Arhitectură obligatoriu distribuită.",
      "Programare orientată pe evenimente."
    ],
    "correct": "Programare orientată pe evenimente.",
    "explanation": "Interacțiunile utilizatorului generează evenimente tratate de handlere.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q097",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Ce rol are XAML în WPF?",
    "options": [
      "Descrie declarativ interfața și poate configura binding-uri.",
      "Compilează interogări SQL.",
      "Înlocuiește CLR.",
      "Gestionează thread-urile procesului."
    ],
    "correct": "Descrie declarativ interfața și poate configura binding-uri.",
    "explanation": "XAML separă descrierea vizuală de codul comportamental.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q098",
    "course": "Curs 3 – Aplicații desktop",
    "text": "În MVVM, ce componentă expune starea și comenzile pentru interfață?",
    "options": [
      "Model",
      "ViewModel",
      "View",
      "DbContext"
    ],
    "correct": "ViewModel",
    "explanation": "ViewModel intermediază între View și logica/datele aplicației.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q099",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Care este avantajul principal al data binding-ului?",
    "options": [
      "Elimină toate erorile de validare.",
      "Mută automat baza de date în memorie.",
      "Sincronizează proprietățile UI cu sursa de date, reducând codul manual.",
      "Transformă aplicația în serviciu web."
    ],
    "correct": "Sincronizează proprietățile UI cu sursa de date, reducând codul manual.",
    "explanation": "Binding-ul leagă elementele vizuale de proprietăți și notificări.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q100",
    "course": "Curs 3 – Aplicații desktop",
    "text": "De ce o operație lungă nu trebuie executată direct pe firul UI?",
    "options": [
      "Șterge automat controalele.",
      "Forțează recompilarea XAML.",
      "Transformă toate controalele în statice.",
      "Blochează procesarea mesajelor și interfața pare înghețată."
    ],
    "correct": "Blochează procesarea mesajelor și interfața pare înghețată.",
    "explanation": "UI-ul rămâne responsiv când munca este mutată asincron sau pe fundal.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q101",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Ce framework .NET este orientat spre aplicații multiplatformă dintr-o bază comună de cod?",
    "options": [
      ".NET MAUI",
      "WinForms",
      "WCF",
      "ASP.NET Web Forms"
    ],
    "correct": ".NET MAUI",
    "explanation": "MAUI vizează aplicații native pentru mai multe platforme.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q102",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Ce caracterizează WPF față de WinForms?",
    "options": [
      "Rulează numai fără CLR.",
      "Folosește XAML, binding bogat și un sistem vizual mai flexibil.",
      "Nu permite evenimente.",
      "Poate crea exclusiv aplicații de consolă."
    ],
    "correct": "Folosește XAML, binding bogat și un sistem vizual mai flexibil.",
    "explanation": "WPF oferă stiluri, template-uri și separare mai bună a interfeței.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q103",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Ce înseamnă side-by-side execution în ecosistemul .NET?",
    "options": [
      "Două ferestre trebuie afișate una lângă alta.",
      "Aplicația rulează obligatoriu pe două monitoare.",
      "Versiuni diferite de runtime sau componente pot coexista fără înlocuire globală.",
      "Două thread-uri folosesc aceeași stivă."
    ],
    "correct": "Versiuni diferite de runtime sau componente pot coexista fără înlocuire globală.",
    "explanation": "Coexistența versiunilor reduce conflictele dintre aplicații.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q104",
    "course": "Curs 3 – Aplicații desktop",
    "text": "În Visual Studio, unde este organizată în mod obișnuit structura proiectelor și fișierelor?",
    "options": [
      "Toolbox",
      "Properties Window",
      "Output",
      "Solution Explorer"
    ],
    "correct": "Solution Explorer",
    "explanation": "Solution Explorer afișează soluția, proiectele, referințele și fișierele.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q105",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Care alegere este mai potrivită pentru un ecran WPF complex, testabil, cu binding intens?",
    "options": [
      "MVVM cu ViewModel separat.",
      "Toată logica în click handler-ele ferestrei.",
      "Câmpuri globale pentru fiecare control.",
      "Interogări SQL direct în XAML."
    ],
    "correct": "MVVM cu ViewModel separat.",
    "explanation": "MVVM reduce code-behind-ul și permite testarea logicii de prezentare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q106",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Când poate o metodă fi atribuită unui delegate?",
    "options": [
      "Numai dacă metoda este public static.",
      "Când semnătura ei este compatibilă cu semnătura delegate-ului.",
      "Numai dacă nu are parametri.",
      "Când aparține aceleiași clase ca delegate-ul."
    ],
    "correct": "Când semnătura ei este compatibilă cu semnătura delegate-ului.",
    "explanation": "Compatibilitatea privește parametrii și tipul returnat.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q107",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce conține un multicast delegate?",
    "options": [
      "O singură clasă abstractă.",
      "Mai multe thread-uri obligatorii.",
      "O listă de metode invocate, de regulă, în ordinea abonării.",
      "O colecție de excepții filtrate."
    ],
    "correct": "O listă de metode invocate, de regulă, în ordinea abonării.",
    "explanation": "Operatorii += și -= modifică lista de invocare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q108",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce reprezintă o expresie lambda atribuită unui delegate?",
    "options": [
      "Un namespace temporar.",
      "Un constructor fără parametri.",
      "O proprietate calculată exclusiv la compilare.",
      "O funcție anonimă compatibilă cu semnătura cerută."
    ],
    "correct": "O funcție anonimă compatibilă cu semnătura cerută.",
    "explanation": "Lambda oferă o sintaxă scurtă pentru comportament transmis ca valoare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q109",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Pentru ce este potrivit Action<int,string>?",
    "options": [
      "Pentru o metodă cu int și string care nu returnează valoare.",
      "Pentru o metodă fără parametri ce returnează bool.",
      "Pentru un eveniment care returnează int.",
      "Pentru o clasă generică cu două câmpuri."
    ],
    "correct": "Pentru o metodă cu int și string care nu returnează valoare.",
    "explanation": "Action descrie delegate-uri cu rezultat void.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q110",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce semnătură descrie Func<int,bool>?",
    "options": [
      "Primește bool și returnează int.",
      "Primește un int și returnează bool.",
      "Primește două valori și nu returnează nimic.",
      "Nu primește parametri și returnează int."
    ],
    "correct": "Primește un int și returnează bool.",
    "explanation": "La Func, ultimul argument generic este tipul returnat.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q111",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce descrie Predicate<T>?",
    "options": [
      "Un eveniment fără expeditor.",
      "O metodă ce returnează întotdeauna T.",
      "Un delegate care primește T și returnează bool.",
      "O colecție generică de delegate-uri."
    ],
    "correct": "Un delegate care primește T și returnează bool.",
    "explanation": "Predicate<T> exprimă o condiție asupra unui obiect T.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q112",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "De ce se expune un delegate prin event, nu direct ca proprietate publică?",
    "options": [
      "Event permite returnarea mai multor valori.",
      "Event rulează automat pe un thread nou.",
      "Delegate-urile publice nu pot avea parametri.",
      "Codul extern poate doar abona/dezabona, nu poate declanșa sau înlocui lista."
    ],
    "correct": "Codul extern poate doar abona/dezabona, nu poate declanșa sau înlocui lista.",
    "explanation": "event protejează controlul publisher-ului asupra notificării.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q113",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce rol are parametrul sender în modelul EventHandler?",
    "options": [
      "Identifică obiectul care a emis evenimentul.",
      "Conține obligatoriu mesajul erorii.",
      "Este lista tuturor abonaților.",
      "Indică thread-ul principal."
    ],
    "correct": "Identifică obiectul care a emis evenimentul.",
    "explanation": "Subscriber-ul poate identifica sursa notificării prin sender.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q114",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce trebuie făcut pentru a evita invocarea unui eveniment fără abonați?",
    "options": [
      "Se declară evenimentul static.",
      "Se verifică null sau se folosește operatorul ?.Invoke.",
      "Se apelează Dispose înainte de Invoke.",
      "Se adaugă atributul async."
    ],
    "correct": "Se verifică null sau se folosește operatorul ?.Invoke.",
    "explanation": "Invocarea condiționată evită NullReferenceException.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q115",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce risc apare dacă un subscriber cu viață lungă rămâne abonat la publisher?",
    "options": [
      "Delegate-ul devine automat abstract.",
      "Evenimentul se transformă în metodă statică.",
      "Poate apărea o referință nedorită și obiectul nu mai este colectat.",
      "Publisher-ul își pierde constructorul."
    ],
    "correct": "Poate apărea o referință nedorită și obiectul nu mai este colectat.",
    "explanation": "Dezabonarea este importantă când relația de viață poate produce retenție în memorie.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q116",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce problemă rezolvă în principal un ORM?",
    "options": [
      "Înlocuiește sistemul de operare.",
      "Compilează interfața grafică.",
      "Creează automat thread-uri pentru fiecare tabel.",
      "Mapează obiectele aplicației la structurile relaționale ale bazei de date."
    ],
    "correct": "Mapează obiectele aplicației la structurile relaționale ale bazei de date.",
    "explanation": "ORM reduce codul repetitiv pentru citirea și persistarea entităților.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q117",
    "course": "Curs 5 – Entity Framework",
    "text": "În abordarea Code First, de unde pornește modelul aplicației?",
    "options": [
      "De la clasele și configurațiile definite în cod.",
      "De la o bază de date existentă obligatoriu.",
      "De la fișiere XAML.",
      "De la un serviciu SOAP."
    ],
    "correct": "De la clasele și configurațiile definite în cod.",
    "explanation": "Schema poate fi creată și evoluată pe baza modelului din cod.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q118",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce se întâmplă în Database First?",
    "options": [
      "Baza de date este creată numai după scrierea UI-ului.",
      "Clasele și contextul sunt generate pornind de la o schemă existentă.",
      "Interogările sunt interzise.",
      "Entitățile trebuie declarate ca structuri."
    ],
    "correct": "Clasele și contextul sunt generate pornind de la o schemă existentă.",
    "explanation": "Scaffolding-ul reflectă tabelele și relațiile într-un model EF.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q119",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce reprezintă DbSet<Product> într-un DbContext?",
    "options": [
      "O conexiune fizică separată pentru fiecare produs.",
      "Un formular de editare.",
      "Punctul de acces pentru interogarea și modificarea entităților Product.",
      "Un thread care salvează date."
    ],
    "correct": "Punctul de acces pentru interogarea și modificarea entităților Product.",
    "explanation": "DbSet modelează colecția de entități aferentă unui tip.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q120",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce este o entitate POCO?",
    "options": [
      "O procedură stocată compilată.",
      "Un tabel fără cheie.",
      "Un obiect exclusiv pentru interfață.",
      "O clasă simplă, fără dependență obligatorie de o clasă de bază EF."
    ],
    "correct": "O clasă simplă, fără dependență obligatorie de o clasă de bază EF.",
    "explanation": "POCO păstrează modelul de domeniu relativ independent de infrastructură.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q121",
    "course": "Curs 5 – Entity Framework",
    "text": "Cum poate fi configurat un model EF fără a folosi atribute pe clase?",
    "options": [
      "Prin Fluent API în OnModelCreating.",
      "Prin metoda Main.",
      "Prin Thread.Join.",
      "Prin XAML binding."
    ],
    "correct": "Prin Fluent API în OnModelCreating.",
    "explanation": "Fluent API permite configurări explicite și complexe ale modelului.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q122",
    "course": "Curs 5 – Entity Framework",
    "text": "Care este efectul lui Include(x => x.Orders) într-o interogare?",
    "options": [
      "Șterge comenzile asociate.",
      "Încarcă anticipat relația Orders împreună cu entitatea principală.",
      "Transformă relația în cheie primară.",
      "Dezactivează tracking-ul."
    ],
    "correct": "Încarcă anticipat relația Orders împreună cu entitatea principală.",
    "explanation": "Include realizează eager loading pentru navigația indicată.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q123",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce face Change Tracker?",
    "options": [
      "Criptează conexiunea la baza de date.",
      "Compilează LINQ în CIL.",
      "Urmărește starea entităților pentru a genera operațiile de persistare.",
      "Închide contextul după fiecare citire."
    ],
    "correct": "Urmărește starea entităților pentru a genera operațiile de persistare.",
    "explanation": "EF compară stările Added, Modified, Deleted sau Unchanged la SaveChanges.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q124",
    "course": "Curs 5 – Entity Framework",
    "text": "Când este util AsNoTracking()?",
    "options": [
      "Când vrem să ștergem toate înregistrările.",
      "Când fiecare rezultat trebuie salvat automat.",
      "Numai pentru migrații.",
      "La interogări doar pentru citire, unde nu urmează actualizarea entităților."
    ],
    "correct": "La interogări doar pentru citire, unde nu urmează actualizarea entităților.",
    "explanation": "Eliminarea tracking-ului reduce costul pentru scenarii read-only.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q125",
    "course": "Curs 5 – Entity Framework",
    "text": "Care este rolul unei migrații în Code First?",
    "options": [
      "Descrie și aplică incremental modificările de schemă.",
      "Încarcă relațiile în memorie.",
      "Mută aplicația pe alt thread.",
      "Înlocuiește toate interogările LINQ cu SQL scris manual."
    ],
    "correct": "Descrie și aplică incremental modificările de schemă.",
    "explanation": "Migrațiile mențin baza de date sincronizată cu evoluția modelului.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q126",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Care este diferența corectă dintre proces și thread?",
    "options": [
      "Thread-ul conține mai multe procese.",
      "Un proces are spațiu de resurse propriu; thread-urile lui împart resursele procesului.",
      "Procesul nu are memorie.",
      "Thread-urile nu pot rula concurent."
    ],
    "correct": "Un proces are spațiu de resurse propriu; thread-urile lui împart resursele procesului.",
    "explanation": "Firele aceluiași proces împart memoria, dar au stive și stare de execuție proprii.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q127",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce este o race condition?",
    "options": [
      "Un thread rulează întotdeauna mai repede decât altul.",
      "Procesul nu mai are memorie disponibilă.",
      "Rezultatul depinde de ordinea imprevizibilă a acceselor concurente.",
      "Două task-uri au aceeași prioritate."
    ],
    "correct": "Rezultatul depinde de ordinea imprevizibilă a acceselor concurente.",
    "explanation": "Lipsa sincronizării poate produce rezultate diferite de la o rulare la alta.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q128",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce este o secțiune critică?",
    "options": [
      "Orice metodă care poate arunca excepții.",
      "Codul executat numai la pornire.",
      "O clasă fără constructor public.",
      "O zonă de cod care accesează o resursă partajată și trebuie protejată."
    ],
    "correct": "O zonă de cod care accesează o resursă partajată și trebuie protejată.",
    "explanation": "Accesul simultan necontrolat în secțiunea critică poate corupe starea.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q129",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Care situație poate produce deadlock?",
    "options": [
      "Două thread-uri țin resurse diferite și așteaptă circular resursa celuilalt.",
      "Un task se termină prea repede.",
      "Un thread apelează Sleep(0).",
      "Două metode citesc date imutabile."
    ],
    "correct": "Două thread-uri țin resurse diferite și așteaptă circular resursa celuilalt.",
    "explanation": "Așteptarea circulară împiedică progresul tuturor participanților.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q130",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Cum se reduce riscul de deadlock când sunt necesare mai multe lock-uri?",
    "options": [
      "Se adaugă cât mai multe lock-uri aleatorii.",
      "Se impune aceeași ordine de achiziție a lock-urilor peste tot.",
      "Se folosesc numai variabile globale.",
      "Se apelează Thread.Abort după fiecare operație."
    ],
    "correct": "Se impune aceeași ordine de achiziție a lock-urilor peste tot.",
    "explanation": "O ordine globală elimină una dintre condițiile clasice ale așteptării circulare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q131",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce descrie starvation?",
    "options": [
      "Toate thread-urile se termină simultan.",
      "Memoria heap este colectată complet.",
      "Un thread nu primește suficient acces la resurse pentru a progresa.",
      "Un task este convertit în proces."
    ],
    "correct": "Un thread nu primește suficient acces la resurse pentru a progresa.",
    "explanation": "Planificarea sau lock-urile nedrepte pot amâna repetat un participant.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q132",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Pentru ce este potrivit Task.Run într-o aplicație desktop?",
    "options": [
      "Pentru a face orice apel I/O automat mai rapid.",
      "Pentru a accesa controalele UI din orice thread.",
      "Pentru a înlocui baza de date.",
      "Pentru mutarea unei operații CPU-bound de pe firul UI."
    ],
    "correct": "Pentru mutarea unei operații CPU-bound de pe firul UI.",
    "explanation": "Task.Run folosește, de regulă, ThreadPool și evită blocarea interfeței.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q133",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce avantaj are await față de apelarea blocantă Wait() într-un flux asincron?",
    "options": [
      "Permite continuarea fără blocarea thread-ului apelant.",
      "Creează obligatoriu un proces nou.",
      "Garantează paralelism pe toate nucleele.",
      "Elimină necesitatea tratării excepțiilor."
    ],
    "correct": "Permite continuarea fără blocarea thread-ului apelant.",
    "explanation": "await suspendă logic metoda și reia continuarea când operația se încheie.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q134",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce face Task.WhenAll pentru mai multe task-uri?",
    "options": [
      "Oprește toate task-urile imediat.",
      "Produce un task care se încheie după finalizarea tuturor.",
      "Execută task-urile strict unul după altul.",
      "Blochează permanent thread-ul principal."
    ],
    "correct": "Produce un task care se încheie după finalizarea tuturor.",
    "explanation": "WhenAll coordonează finalizarea unui grup fără a impune execuție secvențială.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q135",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Cum se transmite în mod cooperant o cerere de anulare în TPL?",
    "options": [
      "Prin Thread.Abort în orice situație.",
      "Prin ștergerea obiectului Task.",
      "Prin CancellationToken.",
      "Prin modificarea priorității procesului."
    ],
    "correct": "Prin CancellationToken.",
    "explanation": "Operația verifică token-ul și se oprește controlat când anularea este cerută.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q136",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Ce oferă un API unui consumator?",
    "options": [
      "Acces direct la toate detaliile interne.",
      "O bază de date locală obligatorie.",
      "Un thread dedicat pentru fiecare metodă.",
      "Un contract controlat pentru accesarea funcționalității unui sistem."
    ],
    "correct": "Un contract controlat pentru accesarea funcționalității unui sistem.",
    "explanation": "API-ul ascunde implementarea și expune operații stabile.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q137",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Care afirmație despre API și serviciu web este corectă?",
    "options": [
      "Orice serviciu web expune un API, dar nu orice API este accesat prin web.",
      "Orice API folosește obligatoriu SOAP.",
      "Serviciile web nu au contracte.",
      "API-urile pot exista numai între procese de pe aceeași mașină."
    ],
    "correct": "Orice serviciu web expune un API, dar nu orice API este accesat prin web.",
    "explanation": "API este conceptul general; serviciul web este o formă de comunicare prin rețea.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q138",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "În arhitectura client–server, cine inițiază de regulă cererea?",
    "options": [
      "Serverul de baze de date",
      "Clientul",
      "Garbage Collector",
      "Compilatorul JIT"
    ],
    "correct": "Clientul",
    "explanation": "Clientul solicită o resursă sau operație, iar serverul răspunde.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q139",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Ce format este specific mesajelor SOAP clasice?",
    "options": [
      "Numai JSON fără metadate.",
      "Cod binar CIL.",
      "XML într-un envelope standardizat.",
      "Fișiere XAML."
    ],
    "correct": "XML într-un envelope standardizat.",
    "explanation": "SOAP definește structura mesajului prin XML Envelope, Header și Body.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q140",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Ce descrie WSDL?",
    "options": [
      "Structura vizuală a unui formular.",
      "Schema internă a unui thread pool.",
      "Regulile de garbage collection.",
      "Contractul operațiilor și mesajelor unui serviciu SOAP."
    ],
    "correct": "Contractul operațiilor și mesajelor unui serviciu SOAP.",
    "explanation": "WSDL permite descrierea formală și generarea de clienți pentru servicii SOAP.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q141",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Ce avantaj este asociat frecvent cu SOAP în integrarea enterprise?",
    "options": [
      "Standarde extinse pentru securitate, contracte și tranzacții.",
      "Mesaje întotdeauna mai mici decât JSON.",
      "Lipsa totală a unui contract.",
      "Necesită numai browser, fără server."
    ],
    "correct": "Standarde extinse pentru securitate, contracte și tranzacții.",
    "explanation": "Familia WS-* acoperă scenarii enterprise stricte.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q142",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Într-un API REST, ce reprezintă de regulă URI-ul?",
    "options": [
      "Un thread de execuție.",
      "O resursă sau o colecție de resurse.",
      "O clasă abstractă.",
      "O migrație de bază de date."
    ],
    "correct": "O resursă sau o colecție de resurse.",
    "explanation": "REST modelează domeniul prin resurse adresabile.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q143",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Care metodă HTTP este folosită în mod obișnuit pentru citirea unei resurse fără modificare?",
    "options": [
      "POST",
      "DELETE",
      "GET",
      "PATCH"
    ],
    "correct": "GET",
    "explanation": "GET este destinat recuperării unei reprezentări și ar trebui să fie sigur.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q144",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Ce înseamnă că un serviciu REST este stateless?",
    "options": [
      "Serverul nu poate avea bază de date.",
      "Clientul nu poate trimite antete.",
      "Răspunsurile nu au coduri de stare.",
      "Fiecare cerere conține informația necesară, fără sesiune obligatorie păstrată pe server."
    ],
    "correct": "Fiecare cerere conține informația necesară, fără sesiune obligatorie păstrată pe server.",
    "explanation": "Lipsa stării conversaționale pe server simplifică scalarea.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q145",
    "course": "Curs 7 – API, SOAP și REST",
    "text": "Ce alegere este mai potrivită pentru un API public simplu, consumat de aplicații web și mobile?",
    "options": [
      "REST cu reprezentări JSON, dacă nu există cerințe enterprise speciale.",
      "SOAP este obligatoriu pentru orice aplicație mobilă.",
      "Acces SQL direct din client.",
      "Partajarea fișierelor bazei de date."
    ],
    "correct": "REST cu reprezentări JSON, dacă nu există cerințe enterprise speciale.",
    "explanation": "REST/JSON are de regulă integrare mai simplă și overhead mai mic în astfel de scenarii.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q146",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce definește un sistem distribuit?",
    "options": [
      "O singură aplicație cu mai multe clase.",
      "Componente aflate pe noduri diferite colaborează prin comunicație pentru un scop comun.",
      "Un program care nu folosește rețeaua.",
      "O bază de date cu mai multe tabele."
    ],
    "correct": "Componente aflate pe noduri diferite colaborează prin comunicație pentru un scop comun.",
    "explanation": "Distribuirea privește componente independente și coordonarea lor prin rețea.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q147",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce înseamnă reziliența într-o arhitectură distribuită?",
    "options": [
      "Sistemul nu mai necesită monitorizare.",
      "Toate componentele rulează pe un singur server.",
      "Sistemul continuă sau se recuperează controlat când apar defecțiuni.",
      "Datele nu sunt niciodată replicate."
    ],
    "correct": "Sistemul continuă sau se recuperează controlat când apar defecțiuni.",
    "explanation": "Toleranța la defecte limitează impactul căderii unui nod sau serviciu.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q148",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce este scalarea orizontală?",
    "options": [
      "Creșterea memoriei unui singur server.",
      "Reducerea numărului de utilizatori.",
      "Mutarea codului într-o singură clasă.",
      "Adăugarea mai multor instanțe sau noduri."
    ],
    "correct": "Adăugarea mai multor instanțe sau noduri.",
    "explanation": "Scale-out distribuie sarcina peste mai multe instanțe.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q149",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care este scopul edge computing în industrie?",
    "options": [
      "Procesează date aproape de sursă pentru latență mai mică și autonomie locală.",
      "Mută toate datele exclusiv într-un cloud îndepărtat.",
      "Elimină orice nevoie de rețea.",
      "Înlocuiește toate PLC-urile cu baze de date."
    ],
    "correct": "Procesează date aproape de sursă pentru latență mai mică și autonomie locală.",
    "explanation": "Prelucrarea locală reduce timpul de reacție și traficul către centru.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q150",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care este un avantaj al monolitului pentru o aplicație mică?",
    "options": [
      "Scalarea fiecărei funcții independent este automată.",
      "Implementare și deployment inițial mai simple.",
      "Defecțiunile sunt izolate perfect.",
      "Fiecare modul are obligatoriu propria bază de date."
    ],
    "correct": "Implementare și deployment inițial mai simple.",
    "explanation": "Monolitul are cost operațional mai mic la început, dar poate deveni greu de evoluat.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q151",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce limitare apare frecvent într-un model 2-tier cu mulți clienți conectați direct la baza de date?",
    "options": [
      "Nu poate exista nicio interfață grafică.",
      "Clienții nu pot citi date.",
      "Cuplare mare și control mai slab al logicii și securității.",
      "Baza de date devine automat stateless."
    ],
    "correct": "Cuplare mare și control mai slab al logicii și securității.",
    "explanation": "Lipsa stratului intermediar face evoluția și guvernanța mai dificile.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q152",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce strat ar trebui să conțină validarea unei reguli precum limita maximă de comandă?",
    "options": [
      "Presentation",
      "Data Access exclusiv",
      "Sistemul de operare",
      "Business Logic"
    ],
    "correct": "Business Logic",
    "explanation": "Regula aparține politicii aplicației, nu modului de afișare sau persistare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q153",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce caracterizează microserviciile?",
    "options": [
      "Servicii mici, deployabile independent, organizate în jurul unor capabilități.",
      "O singură unitate de deployment pentru întregul sistem.",
      "Acces direct al UI-ului la toate bazele de date.",
      "Lipsa totală a comunicării între componente."
    ],
    "correct": "Servicii mici, deployabile independent, organizate în jurul unor capabilități.",
    "explanation": "Independența oferă flexibilitate, dar crește complexitatea distribuției.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q154",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Cum diferă SOA de o aplicație monolitică?",
    "options": [
      "SOA interzice rețeaua.",
      "Funcționalitățile sunt expuse ca servicii interoperabile, nu numai ca module interne.",
      "SOA cere o singură clasă pentru toate operațiile.",
      "Monolitul are obligatoriu mai multe servicii autonome."
    ],
    "correct": "Funcționalitățile sunt expuse ca servicii interoperabile, nu numai ca module interne.",
    "explanation": "SOA pune accent pe contracte și integrarea serviciilor.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q155",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce avantaj oferă o arhitectură event-driven?",
    "options": [
      "Toate componentele trebuie să se apeleze sincron.",
      "Ordinea globală este întotdeauna garantată fără mecanisme suplimentare.",
      "Producătorii și consumatorii pot fi slab cuplați și procesa asincron evenimente.",
      "Nu mai este necesară tratarea erorilor."
    ],
    "correct": "Producătorii și consumatorii pot fi slab cuplați și procesa asincron evenimente.",
    "explanation": "Brokerul sau fluxul de evenimente permite integrare flexibilă, dar cere gestionarea livrării și consistenței.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q156",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Ce diferențiază programarea strategică de cea tactică?",
    "options": [
      "Strategica evită orice planificare.",
      "Tactica impune întotdeauna mai multe straturi.",
      "Nu există nicio diferență de obiectiv.",
      "Strategica investește în structură pentru costuri mici pe termen lung; tactica optimizează doar livrarea imediată."
    ],
    "correct": "Strategica investește în structură pentru costuri mici pe termen lung; tactica optimizează doar livrarea imediată.",
    "explanation": "Codul tactic repetat acumulează complexitate și încetinește schimbările viitoare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q157",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Ce urmărește Separation of Concerns?",
    "options": [
      "Fiecare zonă a sistemului tratează o responsabilitate distinctă.",
      "Toată logica este concentrată într-un singur modul.",
      "Interfața accesează direct orice detaliu intern.",
      "Fiecare clasă trebuie să aibă exact o metodă."
    ],
    "correct": "Fiecare zonă a sistemului tratează o responsabilitate distinctă.",
    "explanation": "Separarea preocupărilor reduce cuplarea și clarifică modificările.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q158",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Care este regula dependențelor în Clean Architecture?",
    "options": [
      "Domeniul depinde de framework-ul UI.",
      "Dependențele de cod indică spre straturile interioare.",
      "Application depinde direct de baza de date concretă.",
      "Toate straturile depind unele de altele circular."
    ],
    "correct": "Dependențele de cod indică spre straturile interioare.",
    "explanation": "Politicile centrale nu trebuie să cunoască detaliile exterioare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q159",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Ce conține în principal stratul Domain?",
    "options": [
      "Controllere HTTP și componente vizuale.",
      "Implementări concrete de baze de date.",
      "Entități și reguli de business independente de infrastructură.",
      "Fișiere de configurare ale deployment-ului."
    ],
    "correct": "Entități și reguli de business independente de infrastructură.",
    "explanation": "Domeniul modelează conceptele și invarianta afacerii.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q160",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Care este rolul stratului Application?",
    "options": [
      "Desenează controalele UI.",
      "Configurează exclusiv serverul web.",
      "Stochează fizic toate datele.",
      "Orchestrează cazurile de utilizare și definește porturi către exterior."
    ],
    "correct": "Orchestrează cazurile de utilizare și definește porturi către exterior.",
    "explanation": "Application coordonează fluxul fără a depinde de tehnologia concretă.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q161",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Unde ar trebui implementat un repository bazat pe Entity Framework?",
    "options": [
      "În Infrastructure, conform unei interfețe definite spre interior.",
      "În Domain, împreună cu toate detaliile SQL.",
      "Direct în View.",
      "Într-un atribut al entității."
    ],
    "correct": "În Infrastructure, conform unei interfețe definite spre interior.",
    "explanation": "EF este un detaliu de infrastructură substituibil.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q162",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "De ce Clean Architecture facilitează testarea?",
    "options": [
      "Testele nu mai trebuie scrise.",
      "Cazurile de utilizare pot fi testate cu implementări false ale dependențelor externe.",
      "Baza de date reală este obligatorie pentru orice test.",
      "Toate clasele devin automat statice."
    ],
    "correct": "Cazurile de utilizare pot fi testate cu implementări false ale dependențelor externe.",
    "explanation": "Dependența de abstracții permite izolarea logicii centrale.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q163",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Ce separă CQRS?",
    "options": [
      "Thread-urile de procese.",
      "UI-ul de compilator.",
      "Operațiile care modifică starea de cele care citesc date.",
      "Clasele de structuri."
    ],
    "correct": "Operațiile care modifică starea de cele care citesc date.",
    "explanation": "Command-urile și query-urile pot avea modele și fluxuri diferite.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q164",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Care afirmație despre o comandă CQRS este corectă?",
    "options": [
      "Trebuie să returneze o colecție complexă pentru afișare.",
      "Este identică unei interogări read-only.",
      "Poate fi executată numai în UI.",
      "Exprimă intenția de a modifica starea și poate fi tratată de un handler."
    ],
    "correct": "Exprimă intenția de a modifica starea și poate fi tratată de un handler.",
    "explanation": "Comanda modelează o acțiune, nu simpla recuperare de date.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q165",
    "course": "Curs 9 – Clean Architecture, CQRS și Mediator",
    "text": "Ce avantaj oferă pattern-ul Mediator?",
    "options": [
      "Expeditorul trimite cererea printr-un mediator, fără să cunoască handler-ul concret.",
      "Elimină orice obiect intermediar.",
      "Face toate metodele statice.",
      "Înlocuiește automat baza de date."
    ],
    "correct": "Expeditorul trimite cererea printr-un mediator, fără să cunoască handler-ul concret.",
    "explanation": "Mediator reduce dependențele directe dintre componentele care comunică.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q166",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce semnal indică încălcarea SRP într-o clasă Invoice?",
    "options": [
      "Are un constructor și două proprietăți.",
      "Calculează totalul, salvează în bază și trimite e-mailul.",
      "Folosește o interfață pentru persistare.",
      "Validează o singură regulă de facturare."
    ],
    "correct": "Calculează totalul, salvează în bază și trimite e-mailul.",
    "explanation": "Responsabilitățile independente produc motive diferite de schimbare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q167",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Cum se repară o clasă care calculează, persistă și afișează rapoarte?",
    "options": [
      "Se mută toate metodele într-o clasă statică mai mare.",
      "Se adaugă încă un switch central.",
      "Se separă calculul, persistența și prezentarea în colaboratori dedicați.",
      "Se fac toate câmpurile publice."
    ],
    "correct": "Se separă calculul, persistența și prezentarea în colaboratori dedicați.",
    "explanation": "Separarea reduce impactul schimbării unei singure preocupări.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q168",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce beneficiu de testare aduce SRP?",
    "options": [
      "Testele devin imposibile fără baza reală.",
      "Fiecare clasă trebuie testată numai prin interfața grafică.",
      "Nu mai sunt necesare mock-uri în nicio situație.",
      "Logica izolată poate fi verificată fără infrastructură sau UI nerelevante."
    ],
    "correct": "Logica izolată poate fi verificată fără infrastructură sau UI nerelevante.",
    "explanation": "Responsabilitățile mici au dependențe și scenarii mai clare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q169",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce structură respectă OCP pentru calcularea mai multor tipuri de discount?",
    "options": [
      "O interfață IDiscount cu implementări separate selectate prin polimorfism.",
      "Un switch modificat la fiecare discount nou.",
      "O metodă de 500 de linii cu toate cazurile.",
      "Câmpuri publice verificate din UI."
    ],
    "correct": "O interfață IDiscount cu implementări separate selectate prin polimorfism.",
    "explanation": "Un nou algoritm poate fi adăugat ca implementare fără editarea calculatorului stabil.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q170",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "De ce un switch pe tip concret, extins la fiecare cerință, poate încălca OCP?",
    "options": [
      "Switch nu poate compara valori.",
      "Codul existent trebuie modificat pentru fiecare variantă nouă.",
      "C# interzice switch în clase.",
      "Fiecare ramură rulează pe alt thread."
    ],
    "correct": "Codul existent trebuie modificat pentru fiecare variantă nouă.",
    "explanation": "Extensia ar trebui realizată prin componente noi, nu prin editarea repetată a centrului.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q171",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce înseamnă „închis pentru modificare” în OCP?",
    "options": [
      "Codul nu mai poate fi corectat niciodată.",
      "Clasa trebuie declarată sealed în toate cazurile.",
      "Comportamentul stabil nu trebuie editat pentru orice extensie nouă.",
      "Metodele trebuie să fie private."
    ],
    "correct": "Comportamentul stabil nu trebuie editat pentru orice extensie nouă.",
    "explanation": "OCP nu interzice mentenanța; cere puncte de extensie bine proiectate.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q172",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce mecanism susține frecvent OCP?",
    "options": [
      "Accesul global la starea internă.",
      "Copierea codului în fiecare clasă.",
      "Conversiile dynamic pentru orice apel.",
      "Polimorfismul prin abstracții stabile."
    ],
    "correct": "Polimorfismul prin abstracții stabile.",
    "explanation": "Consumatorul depinde de contract, iar comportamentele noi implementează contractul.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q173",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Un sistem adaugă tipuri noi de senzori. Ce design este mai extensibil?",
    "options": [
      "Fiecare senzor implementează ISensor, iar procesorul lucrează cu ISensor.",
      "Procesorul verifică numele clasei prin zeci de if-uri.",
      "UI-ul citește direct registrele fiecărui dispozitiv.",
      "Toți senzorii moștenesc o clasă cu metode care aruncă excepții pentru funcții lipsă."
    ],
    "correct": "Fiecare senzor implementează ISensor, iar procesorul lucrează cu ISensor.",
    "explanation": "Abstracția permite adăugarea unui senzor fără schimbarea procesorului.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q174",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Cum se leagă SRP și OCP?",
    "options": [
      "SRP elimină nevoia de abstracții.",
      "Clasele focalizate au puncte de schimbare mai clare și sunt mai ușor de extins controlat.",
      "OCP cere ca fiecare clasă să aibă multe responsabilități.",
      "Cele două principii se exclud reciproc."
    ],
    "correct": "Clasele focalizate au puncte de schimbare mai clare și sunt mai ușor de extins controlat.",
    "explanation": "Responsabilitățile bine delimitate reduc modificările în cascadă.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q175",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care este un risc al aplicării mecanice a SRP?",
    "options": [
      "Clasele devin automat imposibil de testat.",
      "Moștenirea multiplă este activată.",
      "Fragmentarea excesivă în clase fără valoare clară poate crește complexitatea.",
      "Compilatorul nu mai poate genera CIL."
    ],
    "correct": "Fragmentarea excesivă în clase fără valoare clară poate crește complexitatea.",
    "explanation": "Principiul cere coeziune, nu împărțirea fiecărei linii în alt tip.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q176",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce trebuie păstrat pentru respectarea LSP?",
    "options": [
      "Numele exact al tuturor câmpurilor private.",
      "Aceeași implementare internă linie cu linie.",
      "Numărul de constructori.",
      "Contractul observabil al tipului de bază."
    ],
    "correct": "Contractul observabil al tipului de bază.",
    "explanation": "Clientul bazei trebuie să funcționeze corect și cu orice subtip valid.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q177",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care modificare în subtip amenință LSP?",
    "options": [
      "Impune precondiții mai stricte decât tipul de bază.",
      "Acceptă toate intrările permise de bază.",
      "Păstrează invarianta obiectului.",
      "Oferă un rezultat cel puțin la fel de puternic."
    ],
    "correct": "Impune precondiții mai stricte decât tipul de bază.",
    "explanation": "Clientul bazei ar putea trimite o intrare validă pe care subtipul o refuză.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q178",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "De ce un subtip care aruncă NotSupportedException pentru o operație promisă de bază este suspect?",
    "options": [
      "Excepțiile sunt interzise în C#.",
      "Nu mai poate substitui baza pentru toate utilizările contractului.",
      "Clasa de bază devine automat statică.",
      "Interfața este transformată în delegate."
    ],
    "correct": "Nu mai poate substitui baza pentru toate utilizările contractului.",
    "explanation": "Operația aparent disponibilă nu este, de fapt, susținută de subtip.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q179",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce alternativă poate evita o ierarhie care încalcă LSP?",
    "options": [
      "Mai multe if-uri după tipul concret în fiecare client.",
      "O singură interfață cu toate operațiile posibile.",
      "Compoziție sau contracte mai precise pentru capabilități diferite.",
      "Ascunderea excepției într-un catch gol."
    ],
    "correct": "Compoziție sau contracte mai precise pentru capabilități diferite.",
    "explanation": "Modelarea capabilităților reale evită promisiuni false în bază.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q180",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce problemă are o interfață IMachine cu Print, Scan și Fax pentru o imprimantă simplă?",
    "options": [
      "Interfața are prea puține metode.",
      "Nu poate fi folosită cu dependency injection.",
      "Toate metodele devin automat statice.",
      "Clientul este forțat să implementeze operații pe care nu le suportă."
    ],
    "correct": "Clientul este forțat să implementeze operații pe care nu le suportă.",
    "explanation": "Aceasta este încălcarea clasică rezolvată de ISP.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q181",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Cum se aplică ISP în cazul imprimantelor?",
    "options": [
      "Se separă IPrinter, IScanner și IFax, iar fiecare clasă implementează doar ce poate.",
      "Se păstrează o interfață unică și metodele inutile returnează null.",
      "Se mută toate operațiile într-o clasă de bază concretă.",
      "Se elimină complet interfețele."
    ],
    "correct": "Se separă IPrinter, IScanner și IFax, iar fiecare clasă implementează doar ce poate.",
    "explanation": "Interfețele mici modelează capabilități independente.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q182",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Cui trebuie adaptată o interfață conform ISP?",
    "options": [
      "Numărului maxim de metode posibile.",
      "Nevoilor clientului care o consumă.",
      "Structurii bazei de date.",
      "Numele framework-ului folosit."
    ],
    "correct": "Nevoilor clientului care o consumă.",
    "explanation": "Contractul trebuie să ofere exact operațiile relevante pentru client.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q183",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care design respectă DIP pentru trimiterea notificărilor?",
    "options": [
      "NotificationService creează direct new SmtpClient în fiecare metodă.",
      "UI-ul modifică membrii private ai serviciului.",
      "NotificationService depinde de IMessageSender, injectat din exterior.",
      "Clasa de nivel înalt moștenește implementarea bazei de date."
    ],
    "correct": "NotificationService depinde de IMessageSender, injectat din exterior.",
    "explanation": "Politica de notificare rămâne independentă de mecanismul concret de livrare.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q184",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care este diferența dintre DIP și dependency injection?",
    "options": [
      "Sunt două denumiri pentru Singleton.",
      "DIP este un framework, iar injection un limbaj.",
      "Dependency injection cere întotdeauna un container extern.",
      "DIP este principiul; injection este o tehnică de furnizare a dependențelor."
    ],
    "correct": "DIP este principiul; injection este o tehnică de furnizare a dependențelor.",
    "explanation": "Constructor injection poate aplica DIP chiar și fără un container DI.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q185",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "De ce constructor injection ajută testarea?",
    "options": [
      "Testul poate furniza o implementare fake a abstracției.",
      "Constructorul elimină toate dependențele.",
      "Obiectul nu mai are stare.",
      "Toate metodele devin pure automat."
    ],
    "correct": "Testul poate furniza o implementare fake a abstracției.",
    "explanation": "Colaboratorii sunt expliciți și pot fi înlocuiți controlat.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q186",
    "course": "Modele de proiectare – din subiecte",
    "text": "De ce constructorul unui Singleton este privat?",
    "options": [
      "Permite moștenirea multiplă.",
      "Împiedică instanțierea directă din exterior.",
      "Face toate metodele asincrone.",
      "Înregistrează automat clasa în DI."
    ],
    "correct": "Împiedică instanțierea directă din exterior.",
    "explanation": "Clasa păstrează controlul asupra creării instanței.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q187",
    "course": "Modele de proiectare – din subiecte",
    "text": "Care este un dezavantaj frecvent al Singleton-ului folosit excesiv?",
    "options": [
      "Nu poate conține nicio metodă.",
      "Creează obligatoriu câte o instanță pe thread.",
      "Introduce stare globală și dependențe ascunse greu de testat.",
      "Nu poate fi utilizat în C#."
    ],
    "correct": "Introduce stare globală și dependențe ascunse greu de testat.",
    "explanation": "Accesul global poate cupla componentele și ordinea testelor.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q188",
    "course": "Modele de proiectare – din subiecte",
    "text": "Ce oferă Lazy<T> într-o implementare Singleton?",
    "options": [
      "Crearea unei instanțe noi la fiecare acces.",
      "Serializare automată în XML.",
      "Moștenire de la toate implementările T.",
      "Inițializare la prima utilizare și suport sigur pentru concurență în configurația implicită."
    ],
    "correct": "Inițializare la prima utilizare și suport sigur pentru concurență în configurația implicită.",
    "explanation": "Lazy<T> amână construirea și gestionează inițializarea concurentă.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q189",
    "course": "Modele de proiectare – din subiecte",
    "text": "Facade trebuie să ascundă complet toate clasele subsistemului?",
    "options": [
      "Nu; oferă un punct simplu de acces, fără a interzice utilizarea avansată directă.",
      "Da, clasele interne trebuie șterse.",
      "Da, toate clasele devin private la nivel de assembly.",
      "Nu, deoarece Facade nu poate apela alte clase."
    ],
    "correct": "Nu; oferă un punct simplu de acces, fără a interzice utilizarea avansată directă.",
    "explanation": "Pattern-ul simplifică scenariul comun, nu rescrie neapărat întregul subsistem.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  },
  {
    "id": "q190",
    "course": "Modele de proiectare – din subiecte",
    "text": "Cum diferă Facade de Adapter?",
    "options": [
      "Facade creează obiecte, Adapter controlează o singură instanță.",
      "Facade simplifică un subsistem; Adapter convertește o interfață într-alta așteptată.",
      "Ambele rezolvă exclusiv concurența.",
      "Adapter este numai o metodă statică."
    ],
    "correct": "Facade simplifică un subsistem; Adapter convertește o interfață într-alta așteptată.",
    "explanation": "Scopul Facade este simplificarea, iar al Adapter-ului compatibilizarea contractelor.",
    "source": "Generată din curs",
    "difficulty": "mediu",
    "official": false,
    "exam": null,
    "note": null
  }
];
