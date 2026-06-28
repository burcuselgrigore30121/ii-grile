const QUESTION_BANK=[
  {
    "id": "q017",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este scopul principal al genericelor în C#?",
    "options": [
      "Permit legarea târzie a metodelor.",
      "Permit structuri și metode type-safe fără fixarea dinainte a unui tip concret.",
      "Permit exclusiv tipizarea dinamică.",
      "Reduc automat numărul liniilor de cod."
    ],
    "correct": "Permit structuri și metode type-safe fără fixarea dinainte a unui tip concret.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q018",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este declarația corectă a unei clase generice?",
    "options": [
      "public class MyClass<T> { }",
      "public class MyClass { T }",
      "public generic class MyClass { }",
      "public class MyClass(generic T) { }"
    ],
    "correct": "public class MyClass<T> { }",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q019",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Cum restricționezi un parametru generic pentru a implementa o anumită interfață?",
    "options": [
      "public class MyClass<T : struct> { }",
      "public class MyClass<T : new()> { }",
      "public class MyClass<T : IDisposable> { }",
      "public class MyClass<T : class> { }"
    ],
    "correct": "public class MyClass<T : IDisposable> { }",
    "explanation": "Răspuns conform textului primit. În textul primit, răspunsul marcat corect este: „Nicio variantă nu este sintactic corectă în C#”. Aplicația cere alegerea uneia dintre cele patru variante, așa că este folosită varianta C ca intenție probabilă, cu această observație păstrată.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": "În textul primit, răspunsul marcat corect este: „Nicio variantă nu este sintactic corectă în C#”.\nAplicația cere alegerea uneia dintre cele patru variante, așa că este folosită varianta C ca intenție probabilă, cu această observație păstrată."
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
      "Transformă automat codul C# în interogări SQL.",
      "Mută verificarea tipurilor din compilator în runtime.",
      "Leagă metoda apelată doar după numele parametrilor."
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
      "Înlocuiește conversiile explicite cu boxing automat.",
      "Forțează toate valorile să fie tratate ca object."
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
      "Aplică garbage collection imediat după fiecare apel.",
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
      "O referință este transformată obligatoriu în struct, păstrând aceeași semnătură observabilă în cod.",
      "Un obiect este șters de Garbage Collector, fără să schimbe verificarea statică a tipurilor.",
      "Un assembly este comprimat într-un pachet NuGet, înainte ca runtime-ul să execute codul nativ.",
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
      "Pot fi declarate numai în clase statice, fără să schimbe verificarea statică a tipurilor.",
      "Sunt colectate exclusiv prin IDisposable, înainte ca runtime-ul să execute codul nativ."
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
      "Compilează direct fiecare expresie în cod mașină fix.",
      "Importă un namespace sau definește un alias.",
      "Amână rezolvarea tipurilor până la execuție.",
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
      "var este netipat; dynamic este tipat static, înainte ca runtime-ul să execute codul nativ.",
      "Ambele pot fi folosite numai pentru numere, fără să schimbe verificarea statică a tipurilor.",
      "var este tipat static la compilare; dynamic amână rezolvarea operațiilor până la execuție.",
      "dynamic este doar un alias pentru string, păstrând aceeași semnătură observabilă în cod."
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
      "Doar Garbage Collector, fără să schimbe verificarea statică a tipurilor.",
      "O proprietate statică, păstrând aceeași semnătură observabilă în cod.",
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
      "Dispose compactează heap-ul, iar GC închide fișierele imediat, păstrând aceeași semnătură observabilă în cod.",
      "Ambele execută exact aceeași operație, înainte ca runtime-ul să execute codul nativ.",
      "GC se aplică numai structurilor, iar Dispose numai enumerărilor, fără să schimbe verificarea statică a tipurilor."
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
    "id": "q054",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce face `base()` într-un constructor?",
    "options": [
      "Apelează metoda `Main()`.",
      "Apelează constructorul clasei de bază.",
      "Inițializează o interfață.",
      "Creează o clasă nouă."
    ],
    "correct": "Apelează constructorul clasei de bază.",
    "explanation": "Răspuns conform textului primit.",
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
      "O clasă care are doar metode statice.",
      "O clasă care nu poate avea constructor.",
      "O clasă care poate conține metode fără implementare și nu poate fi instanțiată direct.",
      "O clasă cu numai câmpuri `readonly`."
    ],
    "correct": "O clasă care poate conține metode fără implementare și nu poate fi instanțiată direct.",
    "explanation": "Răspuns conform textului primit.",
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
    "explanation": "Răspuns conform textului primit. Varianta `final`, încercuită în fotografie, este greșită în C#.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": "Varianta `final`, încercuită în fotografie, este greșită în C#."
  },
  {
    "id": "q057",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce înseamnă polimorfismul?",
    "options": [
      "Posibilitatea ca un obiect să aibă forme sau comportamente diferite printr-un contract comun.",
      "Moștenirea multiplă de clase.",
      "Ascunderea membrilor.",
      "Suprasarcina operatorilor."
    ],
    "correct": "Posibilitatea ca un obiect să aibă forme sau comportamente diferite printr-un contract comun.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q058",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce definește o interfață în C#?",
    "options": [
      "O clasă abstractă cu implementare.",
      "O clasă care nu poate fi instanțiată.",
      "Un contract care definește membrii ce trebuie furnizați de implementări.",
      "O metodă generică."
    ],
    "correct": "Un contract care definește membrii ce trebuie furnizați de implementări.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q059",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce se întâmplă când o clasă derivată suprascrie o metodă virtuală?",
    "options": [
      "Nu mai poate accesa metoda de bază.",
      "Poate furniza propria implementare folosind `override`.",
      "Trebuie să folosească `abstract`.",
      "Nu mai poate apela constructorul de bază."
    ],
    "correct": "Poate furniza propria implementare folosind `override`.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q060",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce simbol este folosit pentru moștenire în C#?",
    "options": [
      "inherits",
      "extends",
      ":",
      "base"
    ],
    "correct": ":",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q061",
    "course": "Curs 2 – OOP în C#",
    "text": "Ce este încapsularea în OOP?",
    "options": [
      "Ascunderea erorilor de execuție.",
      "Ascunderea datelor interne și expunerea doar a funcționalității relevante.",
      "Moștenirea claselor.",
      "Crearea interfețelor."
    ],
    "correct": "Ascunderea datelor interne și expunerea doar a funcționalității relevante.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q086",
    "course": "Curs 2 – OOP în C#",
    "text": "Care situație ilustrează abstractizarea?",
    "options": [
      "Leagă apelul de tipul variabilei, nu de obiectul real, păstrând aceeași relație sintactică de moștenire.",
      "Consumatorul folosește metoda Porneste fără să cunoască detaliile motorului.",
      "Două metode au același corp, fără să respecte neapărat contractul polimorfic.",
      "Un obiect este convertit în string, dar fără dispatch virtual la apel prin baza comună."
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
      "Leagă apelul de tipul variabilei, nu de obiectul real, păstrând aceeași relație sintactică de moștenire.",
      "Derivata folosește numai new, fără să respecte neapărat contractul polimorfic.",
      "Metoda de bază este virtual sau abstract, iar derivata folosește override.",
      "Metoda de bază trebuie să fie statică, dar fără dispatch virtual la apel prin baza comună."
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
      "Înlocuiește moștenirea cu o conversie explicită, dar fără dispatch virtual la apel prin baza comună.",
      "Obligă derivata să repete constructorii bazei, fără să respecte neapărat contractul polimorfic.",
      "Permite reutilizare, dar rupe contractul public, păstrând aceeași relație sintactică de moștenire.",
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
      "Overload cere moștenire; override nu permite moștenire, fără să respecte neapărat contractul polimorfic.",
      "Ambele descriu numai operatori, fără să respecte neapărat contractul polimorfic, dar fără dispatch virtual la apel prin baza comună.",
      "Override schimbă obligatoriu tipul returnat, păstrând aceeași relație sintactică de moștenire."
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
      "Expune câmpurile interne prin proprietăți publice, păstrând aceeași relație sintactică de moștenire.",
      "Da, constructorul poate inițializa partea comună a obiectelor derivate.",
      "Leagă apelul de tipul variabilei, nu de obiectul real, fără să respecte neapărat contractul polimorfic.",
      "Nu, constructorii apar numai în structuri, dar fără dispatch virtual la apel prin baza comună."
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
      "Când orice clasă trebuie să expună toate detaliile bazei, fără să respecte neapărat contractul polimorfic.",
      "Leagă apelul de tipul variabilei, nu de obiectul real, păstrând aceeași relație sintactică de moștenire.",
      "Când relația este „are un” și comportamentele trebuie combinate flexibil.",
      "Numai când toate metodele sunt statice, dar fără dispatch virtual la apel prin baza comună."
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
      "Membrul este public în orice assembly, dar fără dispatch virtual la apel prin baza comună.",
      "Membrul este vizibil numai metodei Main, păstrând aceeași relație sintactică de moștenire.",
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
      "Conține obligatoriu starea tuturor implementărilor, păstrând aceeași relație sintactică de moștenire.",
      "Înlocuiește moștenirea cu o conversie explicită, dar fără dispatch virtual la apel prin baza comună.",
      "Obligă derivata să repete constructorii bazei, fără să respecte neapărat contractul polimorfic."
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
      "Trebuie să fie private, fără să respecte neapărat contractul polimorfic.",
      "Poate exista numai într-o interfață statică, păstrând aceeași relație sintactică de moștenire.",
      "Nu are corp în clasa abstractă și trebuie implementată de o derivată concretă.",
      "Nu poate fi suprascrisă, dar fără dispatch virtual la apel prin baza comună."
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
    "id": "q025",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Care este responsabilitatea Controller-ului în MVC?",
    "options": [
      "Randează interfața și gestionează exclusiv afișarea.",
      "Reprezintă datele și regulile domeniului.",
      "Intermediază între Model și View, procesează intrarea și coordonează răspunsul.",
      "Reprezintă datele și logica de afaceri ale aplicației."
    ],
    "correct": "Intermediază între Model și View, procesează intrarea și coordonează răspunsul.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q096",
    "course": "Curs 3 – Aplicații desktop",
    "text": "Ce model de programare este caracteristic aplicațiilor WinForms?",
    "options": [
      "Programare orientată pe evenimente.",
      "Mută starea UI direct în Model.",
      "Execuție fără fir UI.",
      "Arhitectură obligatoriu distribuită."
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
      "Compilează interogări SQL, fără să separe clar starea interfeței.",
      "Descrie declarativ interfața și poate configura binding-uri.",
      "Amestecă validarea cu desenarea controalelor.",
      "Gestionează thread-urile procesului, fără să separe clar starea interfeței."
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
      "View",
      "ViewModel",
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
      "Elimină toate erorile de validare, păstrând dependența directă dintre ecran și date.",
      "Mută automat baza de date în memorie, în loc să separe clar responsabilitățile UI.",
      "Transformă aplicația în serviciu web, fără să izoleze fluxul de interacțiune al utilizatorului.",
      "Sincronizează proprietățile UI cu sursa de date, reducând codul manual."
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
      "Blochează procesarea mesajelor și interfața pare înghețată.",
      "Șterge automat controalele, fără să separe clar starea interfeței.",
      "Forțează recompilarea XAML, fără să separe clar starea interfeței.",
      "Transformă toate controalele în statice."
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
      "WinForms",
      ".NET MAUI",
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
      "Rulează numai fără CLR, fără să separe clar starea interfeței.",
      "Nu permite evenimente, fără să separe clar starea interfeței.",
      "Folosește XAML, binding bogat și un sistem vizual mai flexibil.",
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
      "Două ferestre trebuie afișate una lângă alta, în loc să separe clar responsabilitățile UI.",
      "Aplicația rulează obligatoriu pe două monitoare.",
      "Două thread-uri folosesc aceeași stivă, păstrând dependența directă dintre ecran și date.",
      "Versiuni diferite de runtime sau componente pot coexista fără înlocuire globală."
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
      "Solution Explorer",
      "Toolbox",
      "Properties Window",
      "Output"
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
      "Toată logica în click handler-ele ferestrei.",
      "MVVM cu ViewModel separat.",
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
    "id": "q011",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este un delegate în C#?",
    "options": [
      "O clasă care implementează metode abstracte.",
      "Un tip care poate referi o metodă sau un grup de metode cu semnături compatibile.",
      "O structură care stochează mai multe valori.",
      "O metodă care returnează `bool`."
    ],
    "correct": "Un tip care poate referi o metodă sau un grup de metode cu semnături compatibile.",
    "explanation": "Răspuns conform textului primit.",
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
      "public delegate void MyDelegate(int param);",
      "public class MyDelegate(int param);",
      "public void delegate MyDelegate(int param);",
      "public int MyDelegate(int param);"
    ],
    "correct": "public delegate void MyDelegate(int param);",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q013",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Cum este definit corect un eveniment?",
    "options": [
      "public event EventHandler MyEvent;",
      "public class event MyEvent;",
      "public delegate EventHandler MyEvent;",
      "public Event MyEvent;"
    ],
    "correct": "public event EventHandler MyEvent;",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q035",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este un delegate în C#?",
    "options": [
      "Un component UI.",
      "O clasă pentru baze de date.",
      "Un tip care poate referi o metodă.",
      "Un thread."
    ],
    "correct": "Un tip care poate referi o metodă.",
    "explanation": "Răspuns conform textului primit.",
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
      "delegate",
      "func",
      "event"
    ],
    "correct": "delegate",
    "explanation": "Răspuns conform textului primit.",
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
      "Apelarea unei singure metode.",
      "Apelarea mai multor metode din lista sa de invocare.",
      "Tratarea mai multor excepții.",
      "Afișarea alertelor în UI."
    ],
    "correct": "Apelarea mai multor metode din lista sa de invocare.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q038",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este un event în C#?",
    "options": [
      "Un tip de clasă.",
      "Un mecanism de notificare între obiecte.",
      "O metodă statică.",
      "Un thread."
    ],
    "correct": "Un mecanism de notificare între obiecte.",
    "explanation": "Răspuns conform textului primit.",
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
      "event",
      "raise",
      "signal"
    ],
    "correct": "event",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q040",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Cum este declanșat, de regulă, un eveniment?",
    "options": [
      "call",
      "send",
      "Invoke()",
      "fire()"
    ],
    "correct": "Invoke()",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q041",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce operator este folosit pentru abonarea unui handler?",
    "options": [
      "event += handler;",
      "+=",
      "link",
      "delegate +"
    ],
    "correct": "+=",
    "explanation": "Răspuns conform textului primit. Întrebarea spune greșit „cuvânt-cheie”; `+=` este operator.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": "Întrebarea spune greșit „cuvânt-cheie”; `+=` este operator."
  },
  {
    "id": "q042",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Un delegate poate referi:",
    "options": [
      "Numai metode statice.",
      "Numai metode de instanță.",
      "Metode statice și metode de instanță, dacă au semnătură compatibilă.",
      "Numai clase abstracte."
    ],
    "correct": "Metode statice și metode de instanță, dacă au semnătură compatibilă.",
    "explanation": "Răspuns conform textului primit.",
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
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q044",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce este `EventHandler` în C#?",
    "options": [
      "O clasă UI.",
      "Un nume rezervat.",
      "Un delegate predefinit pentru evenimente.",
      "Un manager de thread-uri."
    ],
    "correct": "Un delegate predefinit pentru evenimente.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q106",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Când poate o metodă fi atribuită unui delegate?",
    "options": [
      "Numai dacă metoda este public static. în mecanismul delegate/event",
      "Numai dacă nu are parametri. în mecanismul delegate/event",
      "Când aparține aceleiași clase ca delegate-ul.",
      "Când semnătura ei este compatibilă cu semnătura delegate-ului."
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
      "O listă de metode invocate, de regulă, în ordinea abonării.",
      "O singură clasă abstractă. în mecanismul delegate/event",
      "Mai multe thread-uri obligatorii. în mecanismul delegate/event",
      "O colecție de excepții filtrate. în mecanismul delegate/event"
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
      "Un namespace temporar. în mecanismul delegate/event",
      "O funcție anonimă compatibilă cu semnătura cerută.",
      "Un constructor fără parametri. în mecanismul delegate/event",
      "O proprietate calculată exclusiv la compilare."
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
      "Pentru o metodă fără parametri ce returnează bool.",
      "Pentru un eveniment care returnează int. în mecanismul delegate/event",
      "Pentru o metodă cu int și string care nu returnează valoare.",
      "Pentru o clasă generică cu două câmpuri. în mecanismul delegate/event"
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
      "Primește două valori și nu returnează nimic.",
      "Nu primește parametri și returnează int.",
      "Primește un int și returnează bool."
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
      "Un delegate care primește T și returnează bool.",
      "Un eveniment fără expeditor. în mecanismul delegate/event",
      "O metodă ce returnează întotdeauna T.",
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
      "Event permite returnarea mai multor valori. în mecanismul delegate/event",
      "Codul extern poate doar abona/dezabona, nu poate declanșa sau înlocui lista.",
      "Event rulează automat pe un thread nou. în mecanismul delegate/event, păstrând doar compatibilitatea parțială de semnătură.",
      "Delegate-urile publice nu pot avea parametri. în mecanismul delegate/event"
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
      "Conține obligatoriu mesajul erorii.",
      "Este lista tuturor abonaților. în mecanismul delegate/event",
      "Identifică obiectul care a emis evenimentul.",
      "Indică thread-ul principal. în mecanismul delegate/event"
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
      "Se declară evenimentul static. în mecanismul delegate/event",
      "Expune lista de invocare pentru apel extern direct.",
      "Se adaugă atributul async. în mecanismul delegate/event",
      "Se verifică null sau se folosește operatorul ?.Invoke."
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
      "Poate apărea o referință nedorită și obiectul nu mai este colectat.",
      "Delegate-ul devine automat abstract. în mecanismul delegate/event",
      "Evenimentul se transformă în metodă statică. în mecanismul delegate/event",
      "Publisher-ul își pierde constructorul. în mecanismul delegate/event"
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
    "id": "q026",
    "course": "Curs 5 – Entity Framework",
    "text": "Care este scopul principal al Entity Framework?",
    "options": [
      "Crearea interfețelor grafice.",
      "Maparea obiect-relațională — ORM.",
      "Implementarea algoritmilor.",
      "Gestionarea memoriei."
    ],
    "correct": "Maparea obiect-relațională — ORM.",
    "explanation": "Răspuns conform textului primit.",
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
      "SaveChanges()",
      "Commit()",
      "Submit()"
    ],
    "correct": "SaveChanges()",
    "explanation": "Răspuns conform textului primit.",
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
      "DbContext",
      "ModelBuilder"
    ],
    "correct": "DbContext",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q029",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce metodă este folosită pentru filtrarea datelor folosind LINQ?",
    "options": [
      "Get()",
      "Retrieve()",
      "Where()",
      "SelectFrom()"
    ],
    "correct": "Where()",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q030",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce atribut specifică cheia primară?",
    "options": [
      "[KeyValue]",
      "[Id]",
      "[Key]",
      "[Primary]"
    ],
    "correct": "[Key]",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q031",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce se întâmplă dacă nu se apelează `SaveChanges()`?",
    "options": [
      "Baza de date este ștearsă.",
      "Modificările se salvează automat.",
      "Modificările nu sunt persistate în baza de date.",
      "Modificările sunt salvate parțial."
    ],
    "correct": "Modificările nu sunt persistate în baza de date.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q032",
    "course": "Curs 5 – Entity Framework",
    "text": "Care clasă din EF definește și coordonează modelul entităților?",
    "options": [
      "DataSet",
      "DbTable",
      "DbContext",
      "SchemaBuilder"
    ],
    "correct": "DbContext",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q033",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce metodă elimină o entitate din context?",
    "options": [
      "Delete()",
      "Remove()",
      "Destroy()",
      "Clear()"
    ],
    "correct": "Remove()",
    "explanation": "Răspuns conform textului primit. `Remove()` o marchează pentru ștergere; ștergerea se persistă prin `SaveChanges()`.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": "`Remove()` o marchează pentru ștergere; ștergerea se persistă prin `SaveChanges()`."
  },
  {
    "id": "q034",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce este scaffolding-ul în EF?",
    "options": [
      "Un stil de interfață.",
      "Generarea automată de cod pe baza bazei de date.",
      "Crearea unei ferestre.",
      "Optimizarea codului."
    ],
    "correct": "Generarea automată de cod pe baza bazei de date.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q116",
    "course": "Curs 5 – Entity Framework",
    "text": "Ce problemă rezolvă în principal un ORM?",
    "options": [
      "Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.",
      "Compilează interfața grafică, dar fără să reprezinte unitatea de lucru a contextului.",
      "Mapează obiectele aplicației la structurile relaționale ale bazei de date.",
      "Creează automat thread-uri pentru fiecare tabel, înainte ca EF să genereze comenzile de actualizare."
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
      "De la o bază de date existentă obligatoriu.",
      "Construiește modelul, fără să execute persistența.",
      "Încarcă relații, dar nu schimbă starea entității.",
      "De la clasele și configurațiile definite în cod."
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
      "Clasele și contextul sunt generate pornind de la o schemă existentă.",
      "Baza de date este creată numai după scrierea UI-ului, fără să confirme persistarea modificărilor în baza de date.",
      "Folosește convenții, dar ignoră cheia explicită, dar fără să reprezinte unitatea de lucru a contextului.",
      "Urmărește entitatea, însă nu trimite comenzi SQL, înainte ca EF să genereze comenzile de actualizare."
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
      "Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.",
      "Punctul de acces pentru interogarea și modificarea entităților Product.",
      "Construiește modelul, fără să execute persistența, înainte ca EF să genereze comenzile de actualizare.",
      "Un thread care salvează date, dar fără să reprezinte unitatea de lucru a contextului."
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
      "Încarcă relații, dar nu schimbă starea entității, fără să confirme persistarea modificărilor în baza de date.",
      "Aplică filtrarea în memorie după materializare, dar fără să reprezinte unitatea de lucru a contextului.",
      "O clasă simplă, fără dependență obligatorie de o clasă de bază EF.",
      "Folosește convenții, dar ignoră cheia explicită, înainte ca EF să genereze comenzile de actualizare."
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
      "Urmărește entitatea, însă nu trimite comenzi SQL.",
      "Creează o proiecție, nu o operație de salvare.",
      "Configurează mapping-ul, nu unitatea de lucru.",
      "Prin Fluent API în OnModelCreating."
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
      "Încarcă anticipat relația Orders împreună cu entitatea principală.",
      "Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.",
      "Construiește modelul, fără să execute persistența, înainte ca EF să genereze comenzile de actualizare.",
      "Încarcă relații, dar nu schimbă starea entității, dar fără să reprezinte unitatea de lucru a contextului."
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
      "Urmărește entitatea, însă nu trimite comenzi SQL, dar fără să reprezinte unitatea de lucru a contextului.",
      "Urmărește starea entităților pentru a genera operațiile de persistare.",
      "Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.",
      "Construiește modelul, fără să execute persistența, înainte ca EF să genereze comenzile de actualizare."
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
      "Când vrem să ștergem toate înregistrările, înainte ca EF să genereze comenzile de actualizare.",
      "Când fiecare rezultat trebuie salvat automat, fără să confirme persistarea modificărilor în baza de date.",
      "La interogări doar pentru citire, unde nu urmează actualizarea entităților.",
      "Numai pentru migrații, dar fără să reprezinte unitatea de lucru a contextului."
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
      "Încarcă relații, dar nu schimbă starea entității.",
      "Aplică filtrarea în memorie după materializare.",
      "Înlocuiește toate interogările LINQ cu SQL scris manual.",
      "Descrie și aplică incremental modificările de schemă."
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
    "id": "q020",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce reprezintă un fir de execuție în C#?",
    "options": [
      "O structură de date.",
      "Un flux de execuție care poate rula concurent cu alte fire.",
      "O colecție de metode.",
      "Un tip de buclă."
    ],
    "correct": "Un flux de execuție care poate rula concurent cu alte fire.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q021",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce namespace este folosit pentru lucrul cu fire de execuție?",
    "options": [
      "System.Collections",
      "System.Threading",
      "System.IO",
      "System.Net"
    ],
    "correct": "System.Threading",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q022",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Care este scopul metodei `Thread.Sleep()`?",
    "options": [
      "Întrerupe un thread nou.",
      "Suspendă thread-ul curent pentru perioada specificată.",
      "Termină definitiv un thread.",
      "Sincronizează mai multe thread-uri."
    ],
    "correct": "Suspendă thread-ul curent pentru perioada specificată.",
    "explanation": "Răspuns conform textului primit.",
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
      "Un singur thread poate exista în orice moment.",
      "Mai multe thread-uri rulează fără coordonare.",
      "Coordonarea thread-urilor pentru acces și ordine corectă a operațiilor.",
      "Terminarea tuturor thread-urilor, cu excepția unuia."
    ],
    "correct": "Coordonarea thread-urilor pentru acces și ordine corectă a operațiilor.",
    "explanation": "Răspuns conform textului primit.",
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
      "Două sau mai multe thread-uri se așteaptă reciproc și nu mai pot continua.",
      "Un thread se termină neașteptat.",
      "Thread-urile rulează fără coordonare, dar continuă execuția.",
      "Un thread consumă prea multă memorie."
    ],
    "correct": "Două sau mai multe thread-uri se așteaptă reciproc și nu mai pot continua.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q045",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce namespace este folosit pentru threading?",
    "options": [
      "System.IO",
      "System.Threading",
      "System.Linq",
      "System.Threading.Tasks"
    ],
    "correct": "System.Threading",
    "explanation": "Răspuns conform textului primit. Pentru clasa `Thread`, răspunsul este `System.Threading`.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": "Pentru clasa `Thread`, răspunsul este `System.Threading`."
  },
  {
    "id": "q046",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă pornește un thread?",
    "options": [
      "Begin()",
      "Run()",
      "Start()",
      "Launch()"
    ],
    "correct": "Start()",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q047",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă așteaptă terminarea unui thread?",
    "options": [
      "Await()",
      "Join()",
      "Stop()",
      "WaitFor()"
    ],
    "correct": "Join()",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q048",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă suspendă voluntar temporar execuția thread-ului curent?",
    "options": [
      "Sleep()",
      "Wait()",
      "Pause()",
      "Kill()"
    ],
    "correct": "Sleep()",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q049",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce cuvânt-cheie previne accesul concurent la o secțiune de cod?",
    "options": [
      "block",
      "if(lock)",
      "lock",
      "mutex"
    ],
    "correct": "lock",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q050",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Cum eviți accesul simultan necontrolat asupra unei resurse?",
    "options": [
      "Delay()",
      "Start()",
      "lock` sau `Monitor",
      "Print()"
    ],
    "correct": "lock` sau `Monitor",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q051",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce este un `ThreadPool`?",
    "options": [
      "O listă de thread-uri terminate.",
      "Un set de thread-uri reutilizabile.",
      "Un manager UI.",
      "Memorie partajată."
    ],
    "correct": "Un set de thread-uri reutilizabile.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q052",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce face `Thread.Sleep(0)`?",
    "options": [
      "Blochează întregul proces.",
      "Oprește definitiv thread-ul.",
      "Cedează posibilitatea de execuție unui alt thread eligibil.",
      "Repornește thread-ul."
    ],
    "correct": "Cedează posibilitatea de execuție unui alt thread eligibil.",
    "explanation": "Răspuns conform textului primit. Nu garantează că alt thread va fi executat.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": "Nu garantează că alt thread va fi executat."
  },
  {
    "id": "q053",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce metodă face un thread să aștepte până când alt thread s-a terminat?",
    "options": [
      "Thread.Suspend()",
      "Thread.Abort()",
      "Thread.Join()",
      "Thread.Stop()"
    ],
    "correct": "Thread.Join()",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q126",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Care este diferența corectă dintre proces și thread?",
    "options": [
      "Protejează datele doar dacă toate firele folosesc același obiect, fără să garanteze ordinea de execuție a firelor.",
      "Sincronizează intrarea în secțiune, nu rezultatul logic, dar fără să protejeze singur resursa partajată.",
      "Un proces are spațiu de resurse propriu; thread-urile lui împart resursele procesului.",
      "Thread-urile nu pot rula concurent, într-un scenariu concurent cu acces intercalat."
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
      "Un thread rulează întotdeauna mai repede decât altul, dar fără să protejeze singur resursa partajată.",
      "Procesul nu mai are memorie disponibilă.",
      "Două task-uri au aceeași prioritate, într-un scenariu concurent cu acces intercalat.",
      "Rezultatul depinde de ordinea imprevizibilă a acceselor concurente."
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
      "O zonă de cod care accesează o resursă partajată și trebuie protejată.",
      "Orice metodă care poate arunca excepții.",
      "Codul executat numai la pornire, fără să garanteze ordinea de execuție a firelor.",
      "O clasă fără constructor public, dar fără să protejeze singur resursa partajată."
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
      "Protejează datele doar dacă toate firele folosesc același obiect, dar fără să protejeze singur resursa partajată.",
      "Două thread-uri țin resurse diferite și așteaptă circular resursa celuilalt.",
      "Cedează procesorul, dar nu garantează ordinea firelor, într-un scenariu concurent cu acces intercalat.",
      "Două metode citesc date imutabile, fără să garanteze ordinea de execuție a firelor."
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
      "Se adaugă cât mai multe lock-uri aleatorii, fără să garanteze ordinea firelor concurente.",
      "Se folosesc numai variabile globale, fără să garanteze ordinea firelor concurente.",
      "Se impune aceeași ordine de achiziție a lock-urilor peste tot.",
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
      "Memoria heap este colectată complet, fără să garanteze ordinea de execuție a firelor.",
      "Un task este convertit în proces, într-un scenariu concurent cu acces intercalat.",
      "Un thread nu primește suficient acces la resurse pentru a progresa."
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
      "Pentru mutarea unei operații CPU-bound de pe firul UI.",
      "Pentru a face orice apel I/O automat mai rapid, dar fără să protejeze singur resursa partajată.",
      "Pentru a accesa controalele UI din orice thread, într-un scenariu concurent cu acces intercalat.",
      "Pentru a înlocui baza de date."
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
      "Creează obligatoriu un proces nou, fără să garanteze ordinea firelor concurente.",
      "Permite continuarea fără blocarea thread-ului apelant.",
      "Garantează paralelism pe toate nucleele, fără să garanteze ordinea firelor concurente.",
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
      "Oprește toate task-urile imediat, fără să garanteze ordinea firelor concurente.",
      "Execută task-urile strict unul după altul.",
      "Produce un task care se încheie după finalizarea tuturor.",
      "Blochează permanent thread-ul principal, fără să garanteze ordinea firelor concurente."
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
      "Prin modificarea priorității procesului.",
      "Prin CancellationToken."
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
      "Un contract controlat pentru accesarea funcționalității unui sistem.",
      "Acces direct la toate detaliile interne, fără să respecte complet contractul serviciului.",
      "O bază de date locală obligatorie, fără să respecte complet contractul serviciului.",
      "Un thread dedicat pentru fiecare metodă."
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
      "Orice API folosește obligatoriu SOAP.",
      "Orice serviciu web expune un API, dar nu orice API este accesat prin web.",
      "Serviciile web nu au contracte, fără să respecte complet semantica resurselor HTTP.",
      "API-urile pot exista numai între procese de pe aceeași mașină, dar cu un contract mai rigid decât un API REST simplu."
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
      "Garbage Collector",
      "Clientul",
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
      "Cod binar CIL, fără să respecte complet contractul serviciului.",
      "Fișiere XAML, fără să respecte complet contractul serviciului.",
      "XML într-un envelope standardizat."
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
      "Contractul operațiilor și mesajelor unui serviciu SOAP.",
      "Structura vizuală a unui formular, fără să respecte complet contractul serviciului.",
      "Schema internă a unui thread pool.",
      "Regulile de garbage collection, fără să respecte complet contractul serviciului."
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
      "Mesaje întotdeauna mai mici decât JSON.",
      "Standarde extinse pentru securitate, contracte și tranzacții.",
      "Lipsa totală a unui contract, fără să respecte complet contractul serviciului.",
      "Necesită numai browser, fără server, fără să respecte complet contractul serviciului."
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
      "Un thread de execuție, fără să respecte complet contractul serviciului.",
      "O clasă abstractă, fără să respecte complet contractul serviciului.",
      "O resursă sau o colecție de resurse.",
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
      "PATCH",
      "GET"
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
      "Fiecare cerere conține informația necesară, fără sesiune obligatorie păstrată pe server.",
      "Serverul nu poate avea bază de date, dar cu un contract mai rigid decât un API REST simplu.",
      "Folosește JSON, însă păstrează cuplare procedurală puternică, într-o integrare distribuită cu mesaje standardizate.",
      "Răspunsurile nu au coduri de stare, fără să respecte complet semantica resurselor HTTP."
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
      "SOAP este obligatoriu pentru orice aplicație mobilă, într-o integrare distribuită cu mesaje standardizate.",
      "REST cu reprezentări JSON, dacă nu există cerințe enterprise speciale.",
      "Acces SQL direct din client, fără să respecte complet semantica resurselor HTTP.",
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
    "id": "q014",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care sunt cele trei niveluri ale unei arhitecturi tipice pe trei niveluri?",
    "options": [
      "Prezentare, Aplicație, Bază de date.",
      "Interfață utilizator, Logică de afaceri, Date.",
      "Client, Middleware, Server.",
      "Prezentare, Logică de afaceri, Acces la date."
    ],
    "correct": "Prezentare, Logică de afaceri, Acces la date.",
    "explanation": "Răspuns conform textului primit. Observație: B exprimă aproape aceeași idee, deci întrebarea este ambiguă. D este formularea canonică.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": "Observație: B exprimă aproape aceeași idee, deci întrebarea este ambiguă. D este formularea canonică."
  },
  {
    "id": "q015",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care nivel este responsabil pentru interacțiunea cu utilizatorul?",
    "options": [
      "Nivelul de acces la date.",
      "Nivelul logicii de afaceri.",
      "Nivelul de prezentare.",
      "Nivelul aplicației."
    ],
    "correct": "Nivelul de prezentare.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q016",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care nivel gestionează validarea datelor și regulile de afaceri?",
    "options": [
      "Nivelul de prezentare.",
      "Nivelul de acces la date.",
      "Nivelul logicii de afaceri.",
      "Nivelul interfeței utilizatorului."
    ],
    "correct": "Nivelul logicii de afaceri.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q062",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care sunt cele trei straturi principale ale arhitecturii 3-tier?",
    "options": [
      "API, Frontend, Backend.",
      "Presentation, Business Logic, Data Access.",
      "View, Controller, Model.",
      "Controller, Service, Repository."
    ],
    "correct": "Presentation, Business Logic, Data Access.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q063",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce responsabilitate are stratul Business Logic?",
    "options": [
      "Afișarea interfeței utilizatorului.",
      "Conectarea directă la baza de date.",
      "Implementarea regulilor și proceselor de business.",
      "Stocarea fizică a datelor."
    ],
    "correct": "Implementarea regulilor și proceselor de business.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q064",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Cum comunică stratul Presentation cu baza de date într-un model 3-tier corect?",
    "options": [
      "Direct, printr-o conexiune SQL.",
      "Prin Business Logic și apoi prin Data Access.",
      "Exclusiv prin WCF.",
      "Prin fișiere XML."
    ],
    "correct": "Prin Business Logic și apoi prin Data Access.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q065",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "De ce este importantă separarea straturilor?",
    "options": [
      "Reduce obligatoriu numărul de clase.",
      "Face aplicația mai lentă.",
      "Ajută doar interfața.",
      "Asigură modularitate, întreținere mai ușoară și testabilitate."
    ],
    "correct": "Asigură modularitate, întreținere mai ușoară și testabilitate.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q146",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Ce definește un sistem distribuit?",
    "options": [
      "O singură aplicație cu mai multe clase, fără să treacă regulile prin nivelul de business.",
      "Componente aflate pe noduri diferite colaborează prin comunicație pentru un scop comun.",
      "Mută validarea în formular și persistența în controller, dar cu o separare slabă între prezentare și persistență.",
      "Pune regulile domeniului în proceduri de stocare accesate direct, păstrând cuplarea directă dintre UI și date."
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
      "Sistemul nu mai necesită monitorizare, fără să păstreze separarea dintre straturi.",
      "Toate componentele rulează pe un singur server.",
      "Sistemul continuă sau se recuperează controlat când apar defecțiuni.",
      "Datele nu sunt niciodată replicate, fără să păstreze separarea dintre straturi."
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
      "Reducerea numărului de utilizatori, dar cu o separare slabă între prezentare și persistență.",
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
      "Mută toate datele exclusiv într-un cloud îndepărtat, fără să păstreze separarea dintre straturi.",
      "Reduce numărul de straturi prin cuplarea lor explicită.",
      "Înlocuiește toate PLC-urile cu baze de date, fără să păstreze separarea dintre straturi."
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
      "Clienții nu pot citi date, fără să păstreze separarea dintre straturi.",
      "Cuplare mare și control mai slab al logicii și securității.",
      "Baza de date devine automat stateless, fără să păstreze separarea dintre straturi."
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
      "Permite UI-ului să ocolească regulile de business.",
      "Mută validarea în formular și persistența în controller.",
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
      "Acces direct al UI-ului la toate bazele de date, fără să păstreze separarea dintre straturi.",
      "Lipsa totală a comunicării între componente, fără să păstreze separarea dintre straturi."
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
      "Pune regulile domeniului în proceduri de stocare accesate direct, fără să treacă regulile prin nivelul de business.",
      "Funcționalitățile sunt expuse ca servicii interoperabile, nu numai ca module interne.",
      "SOA cere o singură clasă pentru toate operațiile, păstrând cuplarea directă dintre UI și date.",
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
      "Ordinea globală este întotdeauna garantată fără mecanisme suplimentare, fără să treacă regulile prin nivelul de business.",
      "Producătorii și consumatorii pot fi slab cuplați și procesa asincron evenimente.",
      "Nu mai este necesară tratarea erorilor, dar cu o separare slabă între prezentare și persistență."
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
      "Trimite cererea direct către repository fără caz de utilizare, păstrând dependențe directe între straturile externe.",
      "Pune entitățile să cunoască framework-ul de persistență, fără să protejeze domeniul de detaliile infrastructurii.",
      "Înlocuiește mediatorul cu apeluri directe între controllere, dar amestecând comenzile cu interogările aplicației.",
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
      "Interfața accesează direct orice detaliu intern, fără să izoleze domeniul de infrastructură.",
      "Fiecare clasă trebuie să aibă exact o metodă, fără să izoleze domeniul de infrastructură."
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
      "Domeniul depinde de framework-ul UI, fără să izoleze domeniul de infrastructură.",
      "Dependențele de cod indică spre straturile interioare.",
      "Application depinde direct de baza de date concretă.",
      "Toate straturile depind unele de altele circular, fără să izoleze domeniul de infrastructură."
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
      "Controllere HTTP și componente vizuale, fără să izoleze domeniul de infrastructură.",
      "Implementări concrete de baze de date, fără să izoleze domeniul de infrastructură.",
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
      "Lasă infrastructura să definească regulile de domeniu, fără să protejeze domeniul de detaliile infrastructurii.",
      "Configurează exclusiv serverul web, păstrând dependențe directe între straturile externe.",
      "Stochează fizic toate datele, dar amestecând comenzile cu interogările aplicației.",
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
      "În Domain, împreună cu toate detaliile SQL, fără să izoleze domeniul de infrastructură.",
      "Amestecă interogările cu comenzile în același handler.",
      "Într-un atribut al entității, fără să izoleze domeniul de infrastructură."
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
      "Trimite cererea direct către repository fără caz de utilizare, fără să protejeze domeniul de detaliile infrastructurii.",
      "Cazurile de utilizare pot fi testate cu implementări false ale dependențelor externe.",
      "Baza de date reală este obligatorie pentru orice test.",
      "Toate clasele devin automat statice, dar amestecând comenzile cu interogările aplicației."
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
      "Thread-urile de procese, dar amestecând comenzile cu interogările aplicației.",
      "UI-ul de compilator, păstrând dependențe directe între straturile externe.",
      "Operațiile care modifică starea de cele care citesc date.",
      "Clasele de structuri, fără să protejeze domeniul de detaliile infrastructurii."
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
      "Trebuie să returneze o colecție complexă pentru afișare, păstrând dependențe directe între straturile externe.",
      "Este identică unei interogări read-only.",
      "Poate fi executată numai în UI, fără să protejeze domeniul de detaliile infrastructurii.",
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
      "Pune entitățile să cunoască framework-ul de persistență, dar amestecând comenzile cu interogările aplicației.",
      "Înlocuiește mediatorul cu apeluri directe între controllere, păstrând dependențe directe între straturile externe.",
      "Trimite cererea direct către repository fără caz de utilizare, fără să protejeze domeniul de detaliile infrastructurii."
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
    "id": "q001",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce afirmă Principiul Responsabilității Unice (SRP)?",
    "options": [
      "O clasă ar trebui să gestioneze multiple responsabilități.",
      "O clasă ar trebui să aibă un singur motiv pentru a se schimba.",
      "O clasă ar trebui să fie deschisă pentru extindere.",
      "O clasă ar trebui să depindă de implementări concrete."
    ],
    "correct": "O clasă ar trebui să aibă un singur motiv pentru a se schimba.",
    "explanation": "Răspuns conform textului primit.",
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
      "Permite claselor să gestioneze multiple funcționalități.",
      "Face codul mai ușor de înțeles și de modificat.",
      "Necesită mai multe dependențe în fiecare clasă."
    ],
    "correct": "Face codul mai ușor de înțeles și de modificat.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q003",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care este ideea principală a Principiului Open/Closed?",
    "options": [
      "Entitățile trebuie închise pentru extindere și deschise pentru modificare.",
      "Entitățile trebuie deschise pentru extindere, dar închise pentru modificare.",
      "Entitățile trebuie să depindă de implementări concrete.",
      "Entitățile trebuie să evite interfețele."
    ],
    "correct": "Entitățile trebuie deschise pentru extindere, dar închise pentru modificare.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q004",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care este un exemplu de încălcare a OCP?",
    "options": [
      "Adăugarea unei subclase fără modificarea codului existent.",
      "Modificarea aceleiași clase pentru fiecare funcționalitate nouă.",
      "Utilizarea interfețelor pentru extensii flexibile.",
      "Extinderea unei clase prin moștenire."
    ],
    "correct": "Modificarea aceleiași clase pentru fiecare funcționalitate nouă.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q066",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce înseamnă litera „S” din SOLID?",
    "options": [
      "Simplification.",
      "Strong Coupling.",
      "Single Responsibility Principle.",
      "Static Class."
    ],
    "correct": "Single Responsibility Principle.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q067",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Care este scopul principiului Open/Closed?",
    "options": [
      "Clasa trebuie modificată cu ușurință pentru fiecare funcție.",
      "Clasa poate fi instanțiată oriunde.",
      "Clasa trebuie să fie deschisă pentru extindere, dar închisă pentru modificare.",
      "Este permisă doar moștenirea multiplă."
    ],
    "correct": "Clasa trebuie să fie deschisă pentru extindere, dar închisă pentru modificare.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q166",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce semnal indică încălcarea SRP într-o clasă Invoice?",
    "options": [
      "Adaugă reguli noi prin modificarea clasei existente.",
      "Concentrează validarea, persistența și afișarea într-un tip.",
      "Alege implementarea concretă prin switch repetat.",
      "Calculează totalul, salvează în bază și trimite e-mailul."
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
      "Se separă calculul, persistența și prezentarea în colaboratori dedicați.",
      "Se mută toate metodele într-o clasă statică mai mare, dar cu modificarea clasei existente la cerințe noi.",
      "Crește coeziunea accidentală între motive diferite de schimbare, păstrând cuplarea dintre extensie și codul stabil.",
      "Mută extensia în if-uri succesive din metoda principală, fără să separe motivele diferite de schimbare."
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
      "Folosește o clasă mare pentru toate variațiile algoritmului, păstrând cuplarea dintre extensie și codul stabil.",
      "Logica izolată poate fi verificată fără infrastructură sau UI nerelevante.",
      "Fiecare clasă trebuie testată numai prin interfața grafică, fără să separe motivele diferite de schimbare.",
      "Adaugă reguli noi prin modificarea clasei existente, dar cu modificarea clasei existente la cerințe noi."
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
      "Concentrează validarea, persistența și afișarea într-un tip, fără să separe motivele diferite de schimbare.",
      "Crește coeziunea accidentală între motive diferite de schimbare, păstrând cuplarea dintre extensie și codul stabil.",
      "O interfață IDiscount cu implementări separate selectate prin polimorfism.",
      "Mută extensia în if-uri succesive din metoda principală, dar cu modificarea clasei existente la cerințe noi."
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
      "Folosește o clasă mare pentru toate variațiile algoritmului.",
      "Adaugă reguli noi prin modificarea clasei existente, dar cu modificarea clasei existente la cerințe noi.",
      "Concentrează validarea, persistența și afișarea într-un tip.",
      "Codul existent trebuie modificat pentru fiecare variantă nouă."
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
      "Comportamentul stabil nu trebuie editat pentru orice extensie nouă.",
      "Alege implementarea concretă prin switch repetat, fără să separe motivele diferite de schimbare.",
      "Clasa trebuie declarată sealed în toate cazurile, păstrând cuplarea dintre extensie și codul stabil.",
      "Crește coeziunea accidentală între motive diferite de schimbare."
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
      "Polimorfismul prin abstracții stabile.",
      "Copierea codului în fiecare clasă.",
      "Conversiile dynamic pentru orice apel."
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
      "Procesorul verifică numele clasei prin zeci de if-uri.",
      "Mută extensia în if-uri succesive din metoda principală.",
      "Fiecare senzor implementează ISensor, iar procesorul lucrează cu ISensor.",
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
      "Folosește o clasă mare pentru toate variațiile algoritmului, dar cu modificarea clasei existente la cerințe noi.",
      "Concentrează validarea, persistența și afișarea într-un tip, fără să separe motivele diferite de schimbare.",
      "Crește coeziunea accidentală între motive diferite de schimbare, păstrând cuplarea dintre extensie și codul stabil.",
      "Clasele focalizate au puncte de schimbare mai clare și sunt mai ușor de extins controlat."
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
      "Fragmentarea excesivă în clase fără valoare clară poate crește complexitatea.",
      "Mută extensia în if-uri succesive din metoda principală, dar cu modificarea clasei existente la cerințe noi.",
      "Folosește o clasă mare pentru toate variațiile algoritmului, fără să separe motivele diferite de schimbare.",
      "Concentrează validarea, persistența și afișarea într-un tip, păstrând cuplarea dintre extensie și codul stabil."
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
    "id": "q005",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce asigură Principiul Substituției lui Liskov?",
    "options": [
      "Subtipurile trebuie să depindă de implementări specifice.",
      "Subtipurile trebuie să poată înlocui tipurile de bază fără afectarea programului.",
      "Subtipurile trebuie să evite moștenirea.",
      "Subtipurile trebuie să fie închise pentru extindere."
    ],
    "correct": "Subtipurile trebuie să poată înlocui tipurile de bază fără afectarea programului.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q006",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care este o încălcare a LSP?",
    "options": [
      "O subclasă poate înlocui superclasa fără schimbarea comportamentului.",
      "O subclasă suprascrie o metodă și aruncă un tip nou, incompatibil, de excepție.",
      "O subclasă adaugă o metodă nouă.",
      "O subclasă extinde o clasă abstractă."
    ],
    "correct": "O subclasă suprascrie o metodă și aruncă un tip nou, incompatibil, de excepție.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q007",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care este ideea principală a ISP?",
    "options": [
      "Clienții trebuie să depindă de interfețe pe care nu le folosesc.",
      "Clienții nu trebuie forțați să depindă de interfețe pe care nu le folosesc.",
      "Interfețele trebuie să fie cât mai mari.",
      "Interfețele nu trebuie utilizate."
    ],
    "correct": "Clienții nu trebuie forțați să depindă de interfețe pe care nu le folosesc.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q008",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce ilustrează cel mai bine respectarea ISP?",
    "options": [
      "O singură interfață cu metode pentru toate operațiile.",
      "Mai multe interfețe specifice pentru funcționalități diferite.",
      "O interfață mare implementată integral de toți clienții.",
      "Evitarea completă a interfețelor."
    ],
    "correct": "Mai multe interfețe specifice pentru funcționalități diferite.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q009",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Care este un concept-cheie al DIP?",
    "options": [
      "Modulele de nivel înalt trebuie să depindă de cele de nivel scăzut.",
      "Atât modulele de nivel înalt, cât și cele de nivel scăzut trebuie să depindă de abstracții.",
      "Abstracțiile trebuie să depindă de implementări concrete.",
      "Modulele de nivel scăzut trebuie să fie independente de cele de nivel înalt."
    ],
    "correct": "Atât modulele de nivel înalt, cât și cele de nivel scăzut trebuie să depindă de abstracții.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q010",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce urmărește DIP în designul software-ului?",
    "options": [
      "Dependența modulelor de nivel înalt față de modulele de nivel scăzut.",
      "Reducerea dependenței de abstracții.",
      "Creșterea cuplării dintre componente.",
      "Decuplarea componentelor și întreținerea mai ușoară."
    ],
    "correct": "Decuplarea componentelor și întreținerea mai ușoară.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q068",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce exprimă Liskov Substitution Principle?",
    "options": [
      "Clasele derivate pot modifica total comportamentul contractului.",
      "O clasă abstractă nu trebuie moștenită.",
      "O instanță a clasei derivate trebuie să poată fi utilizată oriunde este așteptată clasa de bază.",
      "Toate clasele trebuie să implementeze `IDisposable`."
    ],
    "correct": "O instanță a clasei derivate trebuie să poată fi utilizată oriunde este așteptată clasa de bază.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q069",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce înseamnă Interface Segregation Principle?",
    "options": [
      "Folosirea cât mai puțin a interfețelor.",
      "Implementarea unei singure interfețe mari.",
      "Interfețele trebuie să fie mici și specifice; clienții nu trebuie obligați să implementeze metode inutile.",
      "Interfețele nu se pot moșteni."
    ],
    "correct": "Interfețele trebuie să fie mici și specifice; clienții nu trebuie obligați să implementeze metode inutile.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q070",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce afirmă Dependency Inversion Principle?",
    "options": [
      "Clasele de nivel înalt trebuie să depindă de clasele mici.",
      "Clasele de nivel înalt nu trebuie să depindă de clasele de nivel jos; ambele trebuie să depindă de abstracții.",
      "Nu trebuie folosite interfețe.",
      "Dependențele trebuie instanțiate direct în clase."
    ],
    "correct": "Clasele de nivel înalt nu trebuie să depindă de clasele de nivel jos; ambele trebuie să depindă de abstracții.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q176",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce trebuie păstrat pentru respectarea LSP?",
    "options": [
      "Numele exact al tuturor câmpurilor private.",
      "Aceeași implementare internă linie cu linie.",
      "Contractul observabil al tipului de bază.",
      "Forțează clienții să implementeze metode nefolosite."
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
      "Acceptă toate intrările permise de bază.",
      "Face modulul de nivel înalt dependent de detalii concrete.",
      "Oferă un rezultat cel puțin la fel de puternic.",
      "Impune precondiții mai stricte decât tipul de bază."
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
      "Nu mai poate substitui baza pentru toate utilizările contractului.",
      "Întărește precondițiile în subtip față de baza sa, fără să păstreze complet contractul tipului de bază.",
      "Înlocuiește contractul cu verificări repetate de tip concret.",
      "Promite operații pe care unele derivate nu le suportă, păstrând dependența de implementări concrete."
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
      "Mai multe if-uri după tipul concret în fiecare client, fără să păstreze complet contractul tipului de bază.",
      "Compoziție sau contracte mai precise pentru capabilități diferite.",
      "O singură interfață cu toate operațiile posibile, dar forțând clientul să cunoască detalii inutile.",
      "Grupează capabilități diferite într-o singură interfață mare."
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
      "Forțează clienții să implementeze metode nefolosite, dar forțând clientul să cunoască detalii inutile.",
      "Face modulul de nivel înalt dependent de detalii concrete, fără să păstreze complet contractul tipului de bază.",
      "Clientul este forțat să implementeze operații pe care nu le suportă.",
      "Întărește precondițiile în subtip față de baza sa, păstrând dependența de implementări concrete."
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
      "Se păstrează o interfață unică și metodele inutile returnează null, fără să păstreze complet contractul tipului de bază.",
      "Înlocuiește contractul cu verificări repetate de tip concret, păstrând dependența de implementări concrete.",
      "Grupează capabilități diferite într-o singură interfață mare, dar forțând clientul să cunoască detalii inutile.",
      "Se separă IPrinter, IScanner și IFax, iar fiecare clasă implementează doar ce poate."
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
      "Nevoilor clientului care o consumă.",
      "Numărului maxim de metode posibile.",
      "Forțează clienții să implementeze metode nefolosite.",
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
      "NotificationService depinde de IMessageSender, injectat din exterior.",
      "Face modulul de nivel înalt dependent de detalii concrete, păstrând dependența de implementări concrete.",
      "Clasa de nivel înalt moștenește implementarea bazei de date, dar forțând clientul să cunoască detalii inutile."
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
      "Înlocuiește contractul cu verificări repetate de tip concret, dar forțând clientul să cunoască detalii inutile.",
      "Promite operații pe care unele derivate nu le suportă, fără să păstreze complet contractul tipului de bază.",
      "DIP este principiul; injection este o tehnică de furnizare a dependențelor.",
      "Dependency injection cere întotdeauna un container extern, păstrând dependența de implementări concrete."
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
      "Constructorul elimină toate dependențele.",
      "Grupează capabilități diferite într-o singură interfață mare.",
      "Forțează clienții să implementeze metode nefolosite.",
      "Testul poate furniza o implementare fake a abstracției."
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
    "id": "q071",
    "course": "Modele de proiectare – din subiecte",
    "text": "Ce asigură pattern-ul Singleton?",
    "options": [
      "O clasă poate avea oricâte instanțe partajate.",
      "Este creată și reutilizată o singură instanță a clasei.",
      "Clasa poate fi moștenită de mai multe ori.",
      "Toate metodele devin statice."
    ],
    "correct": "Este creată și reutilizată o singură instanță a clasei.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q072",
    "course": "Modele de proiectare – din subiecte",
    "text": "Care este cea mai sigură variantă dintre cele prezentate pentru un Singleton thread-safe?",
    "options": [
      "Constructor public și variabilă statică.",
      "Instanță `static readonly` și constructor privat.",
      "Clasă parțială.",
      "Utilizarea atributului `sealed`."
    ],
    "correct": "Instanță `static readonly` și constructor privat.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q073",
    "course": "Modele de proiectare – din subiecte",
    "text": "Care este scopul principal al pattern-ului Facade?",
    "options": [
      "Creează obiecte complexe.",
      "Optimizează automat performanța.",
      "Oferă o interfață simplificată către un subsistem complex.",
      "Protejează date sensibile."
    ],
    "correct": "Oferă o interfață simplificată către un subsistem complex.",
    "explanation": "Răspuns conform textului primit.",
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
      "Singleton este întotdeauna thread-safe.",
      "Facade folosește obligatoriu metode statice.",
      "Singleton controlează instanțierea; Facade simplifică interfața unui subsistem.",
      "Ambele fac același lucru."
    ],
    "correct": "Singleton controlează instanțierea; Facade simplifică interfața unui subsistem.",
    "explanation": "Răspuns conform textului primit.",
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
      "O clasă de configurare a serviciilor.",
      "O interfață unificată care coordonează apeluri către mai multe clase interne.",
      "O metodă statică pentru apeluri directe."
    ],
    "correct": "O interfață unificată care coordonează apeluri către mai multe clase interne.",
    "explanation": "Răspuns conform textului primit.",
    "source": "Subiect fotografiat B (50 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "B",
    "note": null
  },
  {
    "id": "q186",
    "course": "Modele de proiectare – din subiecte",
    "text": "De ce constructorul unui Singleton este privat?",
    "options": [
      "Permite moștenirea multiplă, fără să rezolve intenția principală a pattern-ului.",
      "Împiedică instanțierea directă din exterior.",
      "Face toate metodele asincrone, fără să rezolve intenția principală a pattern-ului.",
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
      "Creează obligatoriu câte o instanță pe thread, fără să distingă instanțierea de simplificarea interfeței.",
      "Introduce stare globală și dependențe ascunse greu de testat.",
      "Nu poate fi utilizat în C#, dar fără să rezolve scopul principal al pattern-ului."
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
      "Crearea unei instanțe noi la fiecare acces, dar fără să rezolve scopul principal al pattern-ului.",
      "Controlează instanțierea în loc să simplifice interfața, păstrând cuplarea cu detaliile interne ale subsistemului.",
      "Simplifică apelurile, dar nu gestionează unicitatea instanței, fără să distingă instanțierea de simplificarea interfeței.",
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
      "Da, clasele interne trebuie șterse, păstrând cuplarea cu detaliile interne ale subsistemului.",
      "Da, toate clasele devin private la nivel de assembly.",
      "Nu, deoarece Facade nu poate apela alte clase, fără să distingă instanțierea de simplificarea interfeței."
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
      "Facade creează obiecte, Adapter controlează o singură instanță, fără să distingă instanțierea de simplificarea interfeței.",
      "Facade simplifică un subsistem; Adapter convertește o interfață într-alta așteptată.",
      "Ambele rezolvă exclusiv concurența, dar fără să rezolve scopul principal al pattern-ului.",
      "Adapter este numai o metodă statică, păstrând cuplarea cu detaliile interne ale subsistemului."
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
