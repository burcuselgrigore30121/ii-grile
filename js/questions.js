const QUESTION_BANK=[
  {
    "id": "q017",
    "course": "Curs 1 – C# și ecosistemul .NET",
    "text": "Care este scopul principal al genericelor în C#?",
    "options": [
      "Tipuri și metode reutilizabile, dar verificate la compilare.",
      "Tipuri rezolvate doar la rulare prin dynamic, înainte ca runtime-ul să execute codul nativ.",
      "Amână rezolvarea tipurilor până la execuție, fără să schimbe verificarea statică a tipurilor.",
      "Clase care pot moșteni simultan mai multe baze, păstrând aceeași semnătură observabilă în cod."
    ],
    "correct": "Tipuri și metode reutilizabile, dar verificate la compilare.",
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
      "public generic class MyClass<T> { }",
      "public class MyClass where T { }"
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
      "where T : struct",
      "where T : new()",
      "where T : IDisposable",
      "where T : class"
    ],
    "correct": "where T : IDisposable",
    "explanation": "Constrângerea where T : IDisposable acceptă tipuri care respectă interfața.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
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
    "text": "Ce face base() într-un constructor?",
    "options": [
      "Apelează metoda virtuală suprascrisă.",
      "Apelează constructorul clasei de bază.",
      "Inițializează automat o interfață, fără să respecte neapărat contractul polimorfic.",
      "Creează o instanță a clasei derivate."
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
      "Conține doar metode statice și câmpuri constante, fără să respecte neapărat contractul polimorfic.",
      "Nu poate avea constructori sau membri virtuali, păstrând aceeași relație sintactică de moștenire.",
      "Poate avea membri abstracți și nu se instanțiază direct.",
      "Este folosită numai pentru extensii generice, dar fără dispatch virtual la apel prin baza comună."
    ],
    "correct": "Poate avea membri abstracți și nu se instanțiază direct.",
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
      "Același contract poate avea comportamente concrete diferite.",
      "O clasă poate moșteni simultan mai multe clase, păstrând aceeași relație sintactică de moștenire.",
      "Toți membrii clasei sunt ascunși în exterior, dar fără dispatch virtual la apel prin baza comună.",
      "Operatorii trebuie suprascrişi în fiecare clasă, fără să respecte neapărat contractul polimorfic."
    ],
    "correct": "Același contract poate avea comportamente concrete diferite.",
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
      "O clasă abstractă care conține doar câmpuri private, păstrând aceeași relație sintactică de moștenire.",
      "Un contract de membri fără implementare completă obligatorie.",
      "O metodă generică folosită pentru conversii între tipuri.",
      "O clasă care nu poate fi moștenită de alte clase, dar fără dispatch virtual la apel prin baza comună."
    ],
    "correct": "Un contract de membri fără implementare completă obligatorie.",
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
      "Schimbă constructorul clasei de bază.",
      "Transformă metoda virtuală în metodă statică.",
      "Oferă propria implementare prin override.",
      "Elimină accesul la toți membrii moșteniți."
    ],
    "correct": "Oferă propria implementare prin override.",
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
      "extends",
      "inherits",
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
      "Ascunde starea internă și expune acces controlat.",
      "Ascunde excepțiile produse în timpul execuției, fără să păstreze neapărat dispatch-ul polimorfic.",
      "Permite moștenirea automată a tuturor claselor, fără să păstreze neapărat dispatch-ul polimorfic.",
      "Creează interfețe pentru fiecare metodă publică."
    ],
    "correct": "Ascunde starea internă și expune acces controlat.",
    "explanation": "Încapsularea protejează starea obiectului și controlează accesul.",
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
    "text": "În MVC, care este rolul Controller-ului?",
    "options": [
      "Persistă direct datele și construiește tabelele.",
      "Conține doar structura datelor afișate în UI, în loc să separe clar responsabilitățile UI.",
      "Randează interfața fără să proceseze acțiuni, fără să izoleze fluxul de interacțiune al utilizatorului.",
      "Coordonează intrarea utilizatorului cu Model și View."
    ],
    "correct": "Coordonează intrarea utilizatorului cu Model și View.",
    "explanation": "Controller-ul interpretează acțiunile utilizatorului și coordonează fluxul.",
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
      "O interfață ce obligă toate clasele să aibă Invoke().",
      "O clasă abstractă pentru gestionarea evenimentelor.",
      "Un tip type-safe care referă metode compatibile.",
      "O colecție generică de metode apelate prin index."
    ],
    "correct": "Un tip type-safe care referă metode compatibile.",
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
      "public event void MyDelegate(int param);",
      "public void delegate MyDelegate(int param);",
      "public class delegate MyDelegate(int param);",
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
      "public delegate event MyEventHandler;",
      "public EventHandler event MyEvent();",
      "public class EventHandler MyEvent;"
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
    "id": "q035",
    "course": "Curs 4 – Delegate și evenimente",
    "text": "Ce descrie cel mai bine un delegate in C#?",
    "options": [
      "Un obiect care pornește automat un thread dedicat.",
      "Un tip care referă metode cu semnătură compatibilă.",
      "O clasă de bază pentru toate evenimentele UI, fără să limiteze cine poate declanșa notificarea.",
      "O metodă anonimă executată numai o singură dată."
    ],
    "correct": "Un tip care referă metode cu semnătură compatibilă.",
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
      "event",
      "Func",
      "delegate",
      "Action"
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
      "Alege aleator o singură metodă compatibilă.",
      "Rulează metodele pe fire de execuție separate.",
      "Transformă automat metodele în evenimente publice.",
      "Invocă mai multe metode din lista sa de apel."
    ],
    "correct": "Invocă mai multe metode din lista sa de apel.",
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
      "Un mecanism prin care un obiect notifică abonații.",
      "O metodă statică apelată înainte de constructor.",
      "O clasă care moștenește automat EventArgs, păstrând doar compatibilitatea parțială de semnătură.",
      "Un delegate care poate fi apelat din orice clasă."
    ],
    "correct": "Un mecanism prin care un obiect notifică abonații.",
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
      "event",
      "raise",
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
      "Raise()",
      "Call()",
      "Invoke()",
      "Fire()"
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
      "event handler în mecanismul delegate/event",
      "link handler în mecanismul delegate/event",
      "delegate + handler",
      "+= handler"
    ],
    "correct": "+= handler",
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
      "Metode statice și de instanță compatibile.",
      "Numai metode statice cu același nume, dar expunând mai mult decât abonarea la eveniment.",
      "Numai metode abstracte din interfețe, fără să limiteze cine poate declanșa notificarea.",
      "Numai metode de instanță fără parametri."
    ],
    "correct": "Metode statice și de instanță compatibile.",
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
      "remove(handler) în mecanismul delegate/event",
      "-= handler",
      "unsubscribe handler",
      "delete handler în mecanismul delegate/event"
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
      "O clasă de bază pentru controale grafice.",
      "Un manager pentru fire de execuție.",
      "Un delegate predefinit pentru evenimente.",
      "Un atribut aplicat metodelor asincrone."
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
      "Generarea automată a controalelor grafice.",
      "Maparea obiectelor C# la structuri relaționale.",
      "Planificarea thread-urilor pentru acces la date.",
      "Compilarea interogărilor în cod intermediar CIL."
    ],
    "correct": "Maparea obiectelor C# la structuri relaționale.",
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
      "SubmitChanges()",
      "AcceptChanges()",
      "SaveChanges()",
      "CommitChanges()"
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
      "DbSet",
      "ObjectContext",
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
      "Select()",
      "Include()",
      "FirstOrDefault()"
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
      "[Required]",
      "[Key]",
      "[Column]",
      "[ForeignKey]"
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
      "Modificările se salvează la închiderea contextului.",
      "Contextul șterge automat entitățile modificate.",
      "Modificările rămân urmărite, dar nu sunt persistate.",
      "EF execută doar comenzile de tip SELECT, fără să confirme persistarea modificărilor în baza de date."
    ],
    "correct": "Modificările rămân urmărite, dar nu sunt persistate.",
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
      "DbSet",
      "ObjectContext",
      "DatabaseFacade",
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
      "Attach()",
      "Update()",
      "Entry()"
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
      "Crearea manuală a tabelelor prin interfața grafică.",
      "Generarea codului pornind de la schema bazei de date.",
      "Optimizarea automată a interogărilor LINQ scrise greșit.",
      "Serializarea entităților într-un fișier de configurare."
    ],
    "correct": "Generarea codului pornind de la schema bazei de date.",
    "explanation": "Database First generează entitățile și DbContext-ul din schemă.",
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
      "Un flux de execuție dintr-un proces.",
      "O clasă care serializează operațiile asincrone.",
      "O colecție de task-uri finalizate.",
      "Un obiect folosit doar pentru blocarea memoriei."
    ],
    "correct": "Un flux de execuție dintr-un proces.",
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
      "System.Threading.Tasks",
      "System.Threading",
      "System.Diagnostics",
      "System.Collections.Concurrent"
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
      "Așteaptă terminarea altui thread.",
      "Pornește execuția unui obiect Thread.",
      "Suspendă temporar thread-ul curent.",
      "Eliberează automat toate lock-urile."
    ],
    "correct": "Suspendă temporar thread-ul curent.",
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
      "Executarea tuturor firelor în aceeași ordine fixă.",
      "Transformarea firelor în operații secvențiale UI.",
      "Terminarea firelor care folosesc aceeași resursă.",
      "Coordonarea accesului concurent la resurse comune."
    ],
    "correct": "Coordonarea accesului concurent la resurse comune.",
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
      "Firele se așteaptă reciproc și nu mai progresează.",
      "Un fir consumă CPU fără să blocheze resurse.",
      "Un fir termină execuția înaintea firului principal.",
      "Mai multe fire citesc aceeași valoare fără conflict."
    ],
    "correct": "Firele se așteaptă reciproc și nu mai progresează.",
    "explanation": "Deadlock-ul apare printr-un ciclu de așteptare între resurse blocate.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q045",
    "course": "Curs 6 – Threading, sincronizare și TPL",
    "text": "Ce namespace este folosit pentru threading clasic?",
    "options": [
      "System.Threading.Tasks",
      "System.Threading",
      "System.Collections.Concurrent",
      "System.Diagnostics"
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
      "Run()",
      "Begin()",
      "Start()",
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
      "Wait()",
      "Await()",
      "WaitFor()",
      "Join()"
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
      "Sleep()",
      "Wait()",
      "Join()",
      "Pause()"
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
      "Monitor",
      "lock",
      "Mutex",
      "Semaphore"
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
      "Delay sau Sleep, fără să garanteze ordinea firelor concurente.",
      "Start sau Run, fără să garanteze ordinea firelor concurente.",
      "lock sau Monitor",
      "Print sau Trace"
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
      "O listă de thread-uri terminate păstrate pentru log.",
      "Un manager UI care trimite evenimente între ferestre.",
      "O zonă de memorie partajată între toate procesele, fără să garanteze ordinea de execuție a firelor.",
      "Un set de thread-uri reutilizabile gestionate de runtime."
    ],
    "correct": "Un set de thread-uri reutilizabile gestionate de runtime.",
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
      "Cedează procesorul altui thread eligibil.",
      "Blochează procesul până la următorul timer.",
      "Oprește definitiv thread-ul curent.",
      "Repornește firul de execuție de la început."
    ],
    "correct": "Cedează procesorul altui thread eligibil.",
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
      "Thread.Sleep()",
      "Thread.Join()",
      "Thread.Abort()",
      "Thread.Suspend()"
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
    "text": "Care sunt cele trei niveluri dintr-o arhitectură tipică 3-Tier?",
    "options": [
      "Presentation, Controller, Repository.",
      "Client, Service, Database Driver, fără să păstreze separarea dintre straturi.",
      "Presentation, Business Logic, Data Access.",
      "View, Model, Data Contract, fără să păstreze separarea dintre straturi."
    ],
    "correct": "Presentation, Business Logic, Data Access.",
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
      "Nivelul de logică de business.",
      "Nivelul de acces la date.",
      "Nivelul de infrastructură de persistență.",
      "Nivelul de prezentare."
    ],
    "correct": "Nivelul de prezentare.",
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
      "Nivelul de logică de business.",
      "Nivelul de prezentare.",
      "Nivelul de acces la date.",
      "Nivelul de mapare obiect-relațională."
    ],
    "correct": "Nivelul de logică de business.",
    "explanation": "Business Logic Tier implementează regulile și procesele aplicației.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q062",
    "course": "Curs 8 – Arhitecturi distribuite și 3-Tier",
    "text": "Care sunt straturile principale 3-Tier?",
    "options": [
      "Presentation, Controller, Repository.",
      "Presentation, Business Logic, Data Access.",
      "View, Controller, Model, fără să păstreze separarea dintre straturi.",
      "Client, Middleware, Service, fără să păstreze separarea dintre straturi."
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
      "Afișează controalele din interfața utilizator.",
      "Execută direct comenzile SQL de persistență.",
      "Aplică reguli și procese ale domeniului.",
      "Stochează fizic datele în tabele."
    ],
    "correct": "Aplică reguli și procese ale domeniului.",
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
      "Direct prin conexiuni SQL din formular.",
      "Exclusiv prin fișiere XML locale.",
      "Prin controller, ocolind nivelul de business.",
      "Prin Business Logic, apoi prin Data Access."
    ],
    "correct": "Prin Business Logic, apoi prin Data Access.",
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
      "Pentru reducerea garantată a numărului de clase.",
      "Pentru ca UI-ul să acceseze direct baza de date.",
      "Pentru a muta toate regulile în nivelul de prezentare."
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
      "O clasă grupează toate operațiile aceluiași modul.",
      "O clasă are un singur motiv real de schimbare.",
      "O clasă expune doar metode virtuale pentru extensie.",
      "O clasă depinde direct de implementările folosite."
    ],
    "correct": "O clasă are un singur motiv real de schimbare.",
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
      "Mută validarea și persistența în aceeași clasă.",
      "Permite adăugarea de reguli prin switch-uri interne.",
      "Scade cuplarea dintre motive diferite de schimbare.",
      "Face clasa responsabilă pentru fluxul complet al aplicației."
    ],
    "correct": "Scade cuplarea dintre motive diferite de schimbare.",
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
      "Codul stabil se modifică la fiecare caz nou.",
      "Clasele concrete sunt preferate în locul interfețelor.",
      "Extinderea se face prin copierea metodelor existente.",
      "Codul stabil se extinde fără modificări repetate."
    ],
    "correct": "Codul stabil se extinde fără modificări repetate.",
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
      "Adăugarea unei strategii noi fără editarea clientului.",
      "Modificarea aceleiași clase pentru fiecare caz nou.",
      "Injectarea unei interfețe în locul unei clase concrete.",
      "Suprascrierea unei metode virtuale într-o derivată validă."
    ],
    "correct": "Adăugarea unei strategii noi fără editarea clientului.",
    "explanation": "Dacă fiecare funcționalitate nouă cere editarea aceleiași clase, codul nu este închis pentru modificare.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "mediu",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q066",
    "course": "Curs 10 – SOLID: SRP și OCP",
    "text": "Ce înseamnă litera S din SOLID?",
    "options": [
      "Strong Responsibility Principle",
      "Single Responsibility Principle",
      "Software Reuse Principle",
      "Static Responsibility Pattern"
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
      "Modificare directă pentru fiecare cerință nouă.",
      "Instanțiere liberă din orice strat al aplicației.",
      "Extindere fără modificarea codului stabil.",
      "Moștenire multiplă pentru clase concrete."
    ],
    "correct": "Extindere fără modificarea codului stabil.",
    "explanation": "Funcționalitatea nouă se adaugă fără editarea codului stabil.",
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
    "text": "Ce asigură Principiul Substituției lui Liskov (LSP)?",
    "options": [
      "Derivata poate întări oricând precondițiile bazei.",
      "Derivata poate înlocui baza fără ruperea contractului.",
      "Derivata poate elimina operații promise de clasa de bază.",
      "Derivata trebuie să ascundă toate metodele virtuale."
    ],
    "correct": "Derivata poate înlocui baza fără ruperea contractului.",
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
      "Subclasa păstrează contractul și schimbă implementarea.",
      "Subclasa adaugă o metodă fără să schimbe contractul.",
      "Subclasa refuză intrări acceptate de clasa de bază.",
      "Subclasa extinde comportamentul prin override valid."
    ],
    "correct": "Subclasa refuză intrări acceptate de clasa de bază.",
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
      "Clienții implementează o interfață comună cât mai mare.",
      "Interfețele sunt evitate pentru a reduce numărul de tipuri.",
      "Interfețele reunesc toate capabilitățile sistemului.",
      "Clienții depind doar de operațiile pe care le folosesc."
    ],
    "correct": "Clienții depind doar de operațiile pe care le folosesc.",
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
      "Interfețe mici, separate pe capabilități apropiate.",
      "O interfață unică pentru toate operațiile modulului.",
      "O clasă de bază cu metode nefolosite returnând null.",
      "O interfață mare împărțită doar prin comentarii."
    ],
    "correct": "Interfețe mici, separate pe capabilități apropiate.",
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
      "Modulele de nivel înalt creează direct clasele concrete.",
      "Modulele depind de abstracții, nu de detalii concrete.",
      "Abstracțiile depind de clasele de infrastructură.",
      "Dependențele se elimină prin metode statice globale."
    ],
    "correct": "Modulele depind de abstracții, nu de detalii concrete.",
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
      "Cuplare crescută pentru a evita interfețele inutile.",
      "Acces direct din UI la toate detaliile de stocare.",
      "Cuplare redusă și schimbări locale mai ușor de testat.",
      "Clase mari care concentrează întregul flux al aplicației."
    ],
    "correct": "Cuplare redusă și schimbări locale mai ușor de testat.",
    "explanation": "Un design bun limitează cuplarea și face schimbările locale și verificabile.",
    "source": "Subiect fotografiat A (25 întrebări)",
    "difficulty": "ușor",
    "official": 1,
    "exam": "A",
    "note": null
  },
  {
    "id": "q068",
    "course": "Curs 11 – SOLID: LSP, ISP și DIP",
    "text": "Ce exprimă Liskov Substitution?",
    "options": [
      "Derivata poate schimba complet contractul bazei.",
      "Baza nu trebuie să aibă metode virtuale, dar forțând clientul să cunoască detalii inutile.",
      "Toate derivatele trebuie să fie clase abstracte.",
      "Derivata poate fi folosită unde este așteptată baza."
    ],
    "correct": "Derivata poate fi folosită unde este așteptată baza.",
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
      "Interfețe mici, orientate pe clienți.",
      "O singură interfață comună pentru toate operațiile.",
      "Interfețe cât mai puține, indiferent de mărime.",
      "Clase concrete folosite în locul interfețelor."
    ],
    "correct": "Interfețe mici, orientate pe clienți.",
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
      "Nivelul înalt depinde direct de infrastructură.",
      "Nivelurile depind de abstracții, nu de detalii.",
      "Clasele mici depind de clasele mari.",
      "Dependențele sunt create direct în constructori."
    ],
    "correct": "Nivelurile depind de abstracții, nu de detalii.",
    "explanation": "DIP separă politica aplicației de detaliile tehnologice.",
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
    "text": "Ce asigură Singleton?",
    "options": [
      "Controlează existența unei singure instanțe partajate.",
      "Creează automat câte o instanță pentru fiecare thread.",
      "Transformă toate metodele clasei în metode statice.",
      "Permite moștenirea multiplă a aceleiași clase."
    ],
    "correct": "Controlează existența unei singure instanțe partajate.",
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
      "Constructor public și câmp static modificabil.",
      "Câmp static readonly și constructor privat.",
      "Clasă partial și metode publice de inițializare.",
      "Atribut sealed aplicat fără controlul instanței."
    ],
    "correct": "Câmp static readonly și constructor privat.",
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
      "Creează obiecte printr-o ierarhie de fabrici.",
      "Controlează existența unei singure instanțe globale.",
      "Oferă acces simplificat la un subsistem complex.",
      "Adaptează o interfață incompatibilă la alta."
    ],
    "correct": "Oferă acces simplificat la un subsistem complex.",
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
      "Singleton simplifică subsisteme; Facade controlează instanțe.",
      "Ambele impun folosirea exclusivă a metodelor statice, dar fără să rezolve scopul principal al pattern-ului.",
      "Ambele au scopul principal de a sincroniza thread-uri, păstrând cuplarea cu detaliile interne ale subsistemului.",
      "Singleton controlează instanțierea; Facade simplifică accesul."
    ],
    "correct": "Singleton controlează instanțierea; Facade simplifică accesul.",
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
      "Un punct de acces comun peste mai multe clase interne.",
      "O clasă abstractă folosită pentru toate serviciile.",
      "O metodă statică ce înlocuiește toate dependențele.",
      "Un obiect unic folosit pentru configurarea aplicației."
    ],
    "correct": "Un punct de acces comun peste mai multe clase interne.",
    "explanation": "Facade coordonează obiectele subsistemului și expune operații simple.",
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
