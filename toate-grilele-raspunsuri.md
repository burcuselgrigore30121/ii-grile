# Toate grilele si raspunsurile corecte

Total intrebari: 190

## 1. Care este scopul principal al genericelor în C#?

A) Permit legarea târzie a metodelor.
B) Permit structuri și metode type-safe fără fixarea dinainte a unui tip concret. **[CORECT]**
C) Permit exclusiv tipizarea dinamică.
D) Reduc automat numărul liniilor de cod.

Raspuns corect: B) Permit structuri și metode type-safe fără fixarea dinainte a unui tip concret.

## 2. Care este declarația corectă a unei clase generice?

A) `public class MyClass<T> { }` **[CORECT]**
B) `public class MyClass { T }`
C) `public generic class MyClass { }`
D) `public class MyClass(generic T) { }`

Raspuns corect: A) `public class MyClass<T> { }`

## 3. Cum restricționezi parametrul generic T astfel încât să implementeze IDisposable?

A) `public class MyClass<T> where T : struct { }`
B) `public class MyClass<T> where T : new() { }`
C) `public class MyClass<T> where T : IDisposable { }` **[CORECT]**
D) `public class MyClass<T> where T : class { }`

Raspuns corect: C) `public class MyClass<T> where T : IDisposable { }`

## 4. Care componentă execută codul gestionat și oferă servicii precum garbage collection?

A) BCL
B) NuGet
C) MSIL
D) CLR **[CORECT]**

Raspuns corect: D) CLR

## 5. În ce formă intermediară este compilat, de regulă, codul C# înainte de execuție?

A) CIL/MSIL **[CORECT]**
B) Transformă automat codul C# în interogări SQL.
C) Mută verificarea tipurilor din compilator în runtime.
D) Leagă metoda apelată doar după numele parametrilor.

Raspuns corect: A) CIL/MSIL

## 6. Care este rolul principal al compilatorului JIT?

A) Elimină automat toate excepțiile.
B) Transformă CIL în cod nativ la execuție. **[CORECT]**
C) Înlocuiește conversiile explicite cu boxing automat.
D) Forțează toate valorile să fie tratate ca object.

Raspuns corect: B) Transformă CIL în cod nativ la execuție.

## 7. Ce descrie cel mai bine Base Class Library?

A) Un editor vizual pentru formulare.
B) Aplică garbage collection imediat după fiecare apel.
C) Un set reutilizabil de tipuri și API-uri .NET. **[CORECT]**
D) Un manager exclusiv de baze de date.

Raspuns corect: C) Un set reutilizabil de tipuri și API-uri .NET.

## 8. Ce se întâmplă la boxing în C#?

A) O referință este transformată obligatoriu în struct, păstrând aceeași semnătură observabilă în cod.
B) Un obiect este șters de Garbage Collector, fără să schimbe verificarea statică a tipurilor.
C) Un assembly este comprimat într-un pachet NuGet, înainte ca runtime-ul să execute codul nativ.
D) O valoare de tip value type este împachetată într-o referință object sau interfață. **[CORECT]**

Raspuns corect: D) O valoare de tip value type este împachetată într-o referință object sau interfață.

## 9. Care afirmație despre tipurile valoare este corectă?

A) La atribuire se copiază, în mod obișnuit, valoarea. **[CORECT]**
B) Două variabile indică obligatoriu același obiect.
C) Pot fi declarate numai în clase statice, fără să schimbe verificarea statică a tipurilor.
D) Sunt colectate exclusiv prin IDisposable, înainte ca runtime-ul să execute codul nativ.

Raspuns corect: A) La atribuire se copiază, în mod obișnuit, valoarea.

## 10. Pentru ce se folosește using într-un fișier C#?

A) Compilează direct fiecare expresie în cod mașină fix.
B) Importă un namespace sau definește un alias. **[CORECT]**
C) Amână rezolvarea tipurilor până la execuție.
D) Marchează metoda drept virtuală.

Raspuns corect: B) Importă un namespace sau definește un alias.

## 11. Care este diferența esențială dintre var și dynamic?

A) var este netipat; dynamic este tipat static, înainte ca runtime-ul să execute codul nativ.
B) Ambele pot fi folosite numai pentru numere, fără să schimbe verificarea statică a tipurilor.
C) var este tipat static la compilare; dynamic amână rezolvarea operațiilor până la execuție. **[CORECT]**
D) dynamic este doar un alias pentru string, păstrând aceeași semnătură observabilă în cod.

Raspuns corect: C) var este tipat static la compilare; dynamic amână rezolvarea operațiilor până la execuție.

## 12. Ce mecanism este potrivit pentru eliberarea deterministă a unei resurse precum un fișier deschis?

A) Doar Garbage Collector, fără să schimbe verificarea statică a tipurilor.
B) O proprietate statică, păstrând aceeași semnătură observabilă în cod.
C) Suprascrierea metodei Main.
D) IDisposable împreună cu using. **[CORECT]**

Raspuns corect: D) IDisposable împreună cu using.

## 13. Care afirmație separă corect Garbage Collector de Dispose?

A) GC gestionează memoria; Dispose eliberează explicit resurse externe sau limitate. **[CORECT]**
B) Dispose compactează heap-ul, iar GC închide fișierele imediat, păstrând aceeași semnătură observabilă în cod.
C) Ambele execută exact aceeași operație, înainte ca runtime-ul să execute codul nativ.
D) GC se aplică numai structurilor, iar Dispose numai enumerărilor, fără să schimbe verificarea statică a tipurilor.

Raspuns corect: A) GC gestionează memoria; Dispose eliberează explicit resurse externe sau limitate.

## 14. Ce face base() într-un constructor?

A) Apelează metoda `Main()`.
B) Apelează constructorul clasei de bază. **[CORECT]**
C) Inițializează o interfață.
D) Creează o clasă nouă.

Raspuns corect: B) Apelează constructorul clasei de bază.

## 15. Ce este o clasă abstractă?

A) O clasă care are doar metode statice.
B) O clasă care nu poate avea constructor.
C) O clasă care poate conține metode fără implementare și nu poate fi instanțiată direct. **[CORECT]**
D) O clasă cu numai câmpuri `readonly`.

Raspuns corect: C) O clasă care poate conține metode fără implementare și nu poate fi instanțiată direct.

## 16. Ce cuvânt-cheie marchează o clasă care nu poate fi moștenită?

A) `static`
B) `final`
C) `private`
D) `sealed` **[CORECT]**

Raspuns corect: D) `sealed`

## 17. Ce înseamnă polimorfismul?

A) Posibilitatea ca un obiect să aibă forme sau comportamente diferite printr-un contract comun. **[CORECT]**
B) Moștenirea multiplă de clase.
C) Ascunderea membrilor.
D) Suprasarcina operatorilor.

Raspuns corect: A) Posibilitatea ca un obiect să aibă forme sau comportamente diferite printr-un contract comun.

## 18. Ce definește o interfață în C#?

A) O clasă abstractă cu implementare.
B) O clasă care nu poate fi instanțiată.
C) Un contract care definește membrii ce trebuie furnizați de implementări. **[CORECT]**
D) O metodă generică.

Raspuns corect: C) Un contract care definește membrii ce trebuie furnizați de implementări.

## 19. Ce se întâmplă când o clasă derivată suprascrie o metodă virtuală?

A) Nu mai poate accesa metoda de bază.
B) Poate furniza propria implementare folosind `override`. **[CORECT]**
C) Trebuie să folosească `abstract`.
D) Nu mai poate apela constructorul de bază.

Raspuns corect: B) Poate furniza propria implementare folosind `override`.

## 20. Ce simbol este folosit pentru moștenire în C#?

A) `inherits`
B) `extends`
C) `:` **[CORECT]**
D) `base`

Raspuns corect: C) `:`

## 21. Ce este încapsularea în OOP?

A) Ascunderea erorilor de execuție.
B) Ascunderea datelor interne și expunerea doar a funcționalității relevante. **[CORECT]**
C) Moștenirea claselor.
D) Crearea interfețelor.

Raspuns corect: B) Ascunderea datelor interne și expunerea doar a funcționalității relevante.

## 22. Care situație ilustrează abstractizarea?

A) Leagă apelul de tipul variabilei, nu de obiectul real, păstrând aceeași relație sintactică de moștenire.
B) Consumatorul folosește metoda Porneste fără să cunoască detaliile motorului. **[CORECT]**
C) Două metode au același corp, fără să respecte neapărat contractul polimorfic.
D) Un obiect este convertit în string, dar fără dispatch virtual la apel prin baza comună.

Raspuns corect: B) Consumatorul folosește metoda Porneste fără să cunoască detaliile motorului.

## 23. Ce condiție trebuie îndeplinită pentru suprascriere dinamică în C#?

A) Leagă apelul de tipul variabilei, nu de obiectul real, păstrând aceeași relație sintactică de moștenire.
B) Derivata folosește numai new, fără să respecte neapărat contractul polimorfic.
C) Metoda de bază este virtual sau abstract, iar derivata folosește override. **[CORECT]**
D) Metoda de bază trebuie să fie statică, dar fără dispatch virtual la apel prin baza comună.

Raspuns corect: C) Metoda de bază este virtual sau abstract, iar derivata folosește override.

## 24. Ce efect are new asupra unei metode cu același nume din clasa de bază?

A) Înlocuiește moștenirea cu o conversie explicită, dar fără dispatch virtual la apel prin baza comună.
B) Obligă derivata să repete constructorii bazei, fără să respecte neapărat contractul polimorfic.
C) Permite reutilizare, dar rupe contractul public, păstrând aceeași relație sintactică de moștenire.
D) Ascunde membrul bazei; nu realizează override polimorfic. **[CORECT]**

Raspuns corect: D) Ascunde membrul bazei; nu realizează override polimorfic.

## 25. Care este diferența dintre overload și override?

A) Overload schimbă lista de parametri; override înlocuiește implementarea virtuală moștenită. **[CORECT]**
B) Overload cere moștenire; override nu permite moștenire, fără să respecte neapărat contractul polimorfic.
C) Ambele descriu numai operatori, fără să respecte neapărat contractul polimorfic, dar fără dispatch virtual la apel prin baza comună.
D) Override schimbă obligatoriu tipul returnat, păstrând aceeași relație sintactică de moștenire.

Raspuns corect: A) Overload schimbă lista de parametri; override înlocuiește implementarea virtuală moștenită.

## 26. Poate o clasă abstractă să aibă constructor?

A) Expune câmpurile interne prin proprietăți publice, păstrând aceeași relație sintactică de moștenire.
B) Da, constructorul poate inițializa partea comună a obiectelor derivate. **[CORECT]**
C) Leagă apelul de tipul variabilei, nu de obiectul real, fără să respecte neapărat contractul polimorfic.
D) Nu, constructorii apar numai în structuri, dar fără dispatch virtual la apel prin baza comună.

Raspuns corect: B) Da, constructorul poate inițializa partea comună a obiectelor derivate.

## 27. Când este preferabilă compoziția în locul moștenirii?

A) Când orice clasă trebuie să expună toate detaliile bazei, fără să respecte neapărat contractul polimorfic.
B) Leagă apelul de tipul variabilei, nu de obiectul real, păstrând aceeași relație sintactică de moștenire.
C) Când relația este „are un” și comportamentele trebuie combinate flexibil. **[CORECT]**
D) Numai când toate metodele sunt statice, dar fără dispatch virtual la apel prin baza comună.

Raspuns corect: C) Când relația este „are un” și comportamentele trebuie combinate flexibil.

## 28. Ce acces oferă modificatorul protected?

A) Membrul este accesibil numai în același namespace.
B) Membrul este public în orice assembly, dar fără dispatch virtual la apel prin baza comună.
C) Membrul este vizibil numai metodei Main, păstrând aceeași relație sintactică de moștenire.
D) Membrul este accesibil clasei și claselor derivate. **[CORECT]**

Raspuns corect: D) Membrul este accesibil clasei și claselor derivate.

## 29. Ce avantaj oferă o interfață față de o clasă de bază concretă?

A) Permite dependența de un contract și implementări alternative. **[CORECT]**
B) Conține obligatoriu starea tuturor implementărilor, păstrând aceeași relație sintactică de moștenire.
C) Înlocuiește moștenirea cu o conversie explicită, dar fără dispatch virtual la apel prin baza comună.
D) Obligă derivata să repete constructorii bazei, fără să respecte neapărat contractul polimorfic.

Raspuns corect: A) Permite dependența de un contract și implementări alternative.

## 30. Ce apel permite accesarea implementării suprascrise din clasa de bază?

A) this.override()
B) base.NumeMetoda() **[CORECT]**
C) parent::NumeMetoda()
D) super.NumeMetoda()

Raspuns corect: B) base.NumeMetoda()

## 31. Ce restricție are o metodă abstractă?

A) Trebuie să fie private, fără să respecte neapărat contractul polimorfic.
B) Poate exista numai într-o interfață statică, păstrând aceeași relație sintactică de moștenire.
C) Nu are corp în clasa abstractă și trebuie implementată de o derivată concretă. **[CORECT]**
D) Nu poate fi suprascrisă, dar fără dispatch virtual la apel prin baza comună.

Raspuns corect: C) Nu are corp în clasa abstractă și trebuie implementată de o derivată concretă.

## 32. Care este responsabilitatea Controller-ului în MVC?

A) Randează interfața și gestionează exclusiv afișarea.
B) Reprezintă datele și regulile domeniului.
C) Intermediază între Model și View, procesează intrarea și coordonează răspunsul. **[CORECT]**
D) Reprezintă datele și logica de afaceri ale aplicației.

Raspuns corect: C) Intermediază între Model și View, procesează intrarea și coordonează răspunsul.

## 33. Ce model de programare este caracteristic aplicațiilor WinForms?

A) Programare orientată pe evenimente. **[CORECT]**
B) Mută starea UI direct în Model.
C) Execuție fără fir UI.
D) Arhitectură obligatoriu distribuită.

Raspuns corect: A) Programare orientată pe evenimente.

## 34. Ce rol are XAML în WPF?

A) Compilează interogări SQL, fără să separe clar starea interfeței.
B) Descrie declarativ interfața și poate configura binding-uri. **[CORECT]**
C) Amestecă validarea cu desenarea controalelor.
D) Gestionează thread-urile procesului, fără să separe clar starea interfeței.

Raspuns corect: B) Descrie declarativ interfața și poate configura binding-uri.

## 35. În MVVM, ce componentă expune starea și comenzile pentru interfață?

A) Model
B) View
C) ViewModel **[CORECT]**
D) DbContext

Raspuns corect: C) ViewModel

## 36. Care este avantajul principal al data binding-ului?

A) Elimină toate erorile de validare, păstrând dependența directă dintre ecran și date.
B) Mută automat baza de date în memorie, în loc să separe clar responsabilitățile UI.
C) Transformă aplicația în serviciu web, fără să izoleze fluxul de interacțiune al utilizatorului.
D) Sincronizează proprietățile UI cu sursa de date, reducând codul manual. **[CORECT]**

Raspuns corect: D) Sincronizează proprietățile UI cu sursa de date, reducând codul manual.

## 37. De ce o operație lungă nu trebuie executată direct pe firul UI?

A) Blochează procesarea mesajelor și interfața pare înghețată. **[CORECT]**
B) Șterge automat controalele, fără să separe clar starea interfeței.
C) Forțează recompilarea XAML, fără să separe clar starea interfeței.
D) Transformă toate controalele în statice.

Raspuns corect: A) Blochează procesarea mesajelor și interfața pare înghețată.

## 38. Ce framework .NET este orientat spre aplicații multiplatformă dintr-o bază comună de cod?

A) WinForms
B) .NET MAUI **[CORECT]**
C) WCF
D) ASP.NET Web Forms

Raspuns corect: B) .NET MAUI

## 39. Ce caracterizează WPF față de WinForms?

A) Rulează numai fără CLR, fără să separe clar starea interfeței.
B) Nu permite evenimente, fără să separe clar starea interfeței.
C) Folosește XAML, binding bogat și un sistem vizual mai flexibil. **[CORECT]**
D) Poate crea exclusiv aplicații de consolă.

Raspuns corect: C) Folosește XAML, binding bogat și un sistem vizual mai flexibil.

## 40. Ce înseamnă side-by-side execution în ecosistemul .NET?

A) Două ferestre trebuie afișate una lângă alta, în loc să separe clar responsabilitățile UI.
B) Aplicația rulează obligatoriu pe două monitoare.
C) Două thread-uri folosesc aceeași stivă, păstrând dependența directă dintre ecran și date.
D) Versiuni diferite de runtime sau componente pot coexista fără înlocuire globală. **[CORECT]**

Raspuns corect: D) Versiuni diferite de runtime sau componente pot coexista fără înlocuire globală.

## 41. În Visual Studio, unde este organizată în mod obișnuit structura proiectelor și fișierelor?

A) Solution Explorer **[CORECT]**
B) Toolbox
C) Properties Window
D) Output

Raspuns corect: A) Solution Explorer

## 42. Care alegere este mai potrivită pentru un ecran WPF complex, testabil, cu binding intens?

A) Toată logica în click handler-ele ferestrei.
B) MVVM cu ViewModel separat. **[CORECT]**
C) Câmpuri globale pentru fiecare control.
D) Interogări SQL direct în XAML.

Raspuns corect: B) MVVM cu ViewModel separat.

## 43. Ce este un delegate în C#?

A) O clasă care implementează metode abstracte.
B) Un tip care poate referi o metodă sau un grup de metode cu semnături compatibile. **[CORECT]**
C) O structură care stochează mai multe valori.
D) O metodă care returnează `bool`.

Raspuns corect: B) Un tip care poate referi o metodă sau un grup de metode cu semnături compatibile.

## 44. Care declarație definește corect un delegate?

A) `public delegate void MyDelegate(int param);` **[CORECT]**
B) `public class MyDelegate(int param);`
C) `public void delegate MyDelegate(int param);`
D) `public int MyDelegate(int param);`

Raspuns corect: A) `public delegate void MyDelegate(int param);`

## 45. Cum este definit corect un eveniment?

A) `public event EventHandler MyEvent;` **[CORECT]**
B) `public class event MyEvent;`
C) `public delegate EventHandler MyEvent;`
D) `public Event MyEvent;`

Raspuns corect: A) `public event EventHandler MyEvent;`

## 46. Ce este un delegate în C#?

A) Un component UI.
B) O clasă pentru baze de date.
C) Un tip care poate referi o metodă. **[CORECT]**
D) Un thread.

Raspuns corect: C) Un tip care poate referi o metodă.

## 47. Ce cuvânt-cheie declară un delegate?

A) `method`
B) `delegate` **[CORECT]**
C) `func`
D) `event`

Raspuns corect: B) `delegate`

## 48. Ce permite un multicast delegate?

A) Apelarea unei singure metode.
B) Apelarea mai multor metode din lista sa de invocare. **[CORECT]**
C) Tratarea mai multor excepții.
D) Afișarea alertelor în UI.

Raspuns corect: B) Apelarea mai multor metode din lista sa de invocare.

## 49. Ce este un event în C#?

A) Un tip de clasă.
B) Un mecanism de notificare între obiecte. **[CORECT]**
C) O metodă statică.
D) Un thread.

Raspuns corect: B) Un mecanism de notificare între obiecte.

## 50. Ce cuvânt-cheie definește un eveniment?

A) `delegate`
B) `event` **[CORECT]**
C) `raise`
D) `signal`

Raspuns corect: B) `event`

## 51. Cum este declanșat, de regulă, un eveniment?

A) `call`
B) `send`
C) `Invoke()` **[CORECT]**
D) `fire()`

Raspuns corect: C) `Invoke()`

## 52. Ce operator este folosit pentru abonarea unui handler la un eveniment?

A) `event += handler;`
B) `+=` **[CORECT]**
C) `link`
D) `delegate +`

Raspuns corect: B) `+=`

## 53. Un delegate poate referi:

A) Numai metode statice.
B) Numai metode de instanță.
C) Metode statice și metode de instanță, dacă au semnătură compatibilă. **[CORECT]**
D) Numai clase abstracte.

Raspuns corect: C) Metode statice și metode de instanță, dacă au semnătură compatibilă.

## 54. Cum se dezabonează un handler de la un eveniment?

A) `delete`
B) `unsubscribe`
C) `-= handler` **[CORECT]**
D) `remove(handler)`

Raspuns corect: C) `-= handler`

## 55. Ce este EventHandler în C#?

A) O clasă UI.
B) Un nume rezervat.
C) Un delegate predefinit pentru evenimente. **[CORECT]**
D) Un manager de thread-uri.

Raspuns corect: C) Un delegate predefinit pentru evenimente.

## 56. Când poate o metodă fi atribuită unui delegate?

A) Numai dacă metoda este public static. în mecanismul delegate/event
B) Numai dacă nu are parametri. în mecanismul delegate/event
C) Când aparține aceleiași clase ca delegate-ul.
D) Când semnătura ei este compatibilă cu semnătura delegate-ului. **[CORECT]**

Raspuns corect: D) Când semnătura ei este compatibilă cu semnătura delegate-ului.

## 57. Ce conține un multicast delegate?

A) O listă de metode invocate, de regulă, în ordinea abonării. **[CORECT]**
B) O singură clasă abstractă. în mecanismul delegate/event
C) Mai multe thread-uri obligatorii. în mecanismul delegate/event
D) O colecție de excepții filtrate. în mecanismul delegate/event

Raspuns corect: A) O listă de metode invocate, de regulă, în ordinea abonării.

## 58. Ce reprezintă o expresie lambda atribuită unui delegate?

A) Un namespace temporar. în mecanismul delegate/event
B) O funcție anonimă compatibilă cu semnătura cerută. **[CORECT]**
C) Un constructor fără parametri. în mecanismul delegate/event
D) O proprietate calculată exclusiv la compilare.

Raspuns corect: B) O funcție anonimă compatibilă cu semnătura cerută.

## 59. Pentru ce este potrivit Action<int,string>?

A) Pentru o metodă fără parametri ce returnează bool.
B) Pentru un eveniment care returnează int. în mecanismul delegate/event
C) Pentru o metodă cu int și string care nu returnează valoare. **[CORECT]**
D) Pentru o clasă generică cu două câmpuri. în mecanismul delegate/event

Raspuns corect: C) Pentru o metodă cu int și string care nu returnează valoare.

## 60. Ce semnătură descrie Func<int,bool>?

A) Primește bool și returnează int.
B) Primește două valori și nu returnează nimic.
C) Nu primește parametri și returnează int.
D) Primește un int și returnează bool. **[CORECT]**

Raspuns corect: D) Primește un int și returnează bool.

## 61. Ce descrie Predicate<T>?

A) Un delegate care primește T și returnează bool. **[CORECT]**
B) Un eveniment fără expeditor. în mecanismul delegate/event
C) O metodă ce returnează întotdeauna T.
D) O colecție generică de delegate-uri.

Raspuns corect: A) Un delegate care primește T și returnează bool.

## 62. De ce se expune un delegate prin event, nu direct ca proprietate publică?

A) Event permite returnarea mai multor valori. în mecanismul delegate/event
B) Codul extern poate doar abona/dezabona, nu poate declanșa sau înlocui lista. **[CORECT]**
C) Event rulează automat pe un thread nou. în mecanismul delegate/event, păstrând doar compatibilitatea parțială de semnătură.
D) Delegate-urile publice nu pot avea parametri. în mecanismul delegate/event

Raspuns corect: B) Codul extern poate doar abona/dezabona, nu poate declanșa sau înlocui lista.

## 63. Ce rol are parametrul sender în modelul EventHandler?

A) Conține obligatoriu mesajul erorii.
B) Este lista tuturor abonaților. în mecanismul delegate/event
C) Identifică obiectul care a emis evenimentul. **[CORECT]**
D) Indică thread-ul principal. în mecanismul delegate/event

Raspuns corect: C) Identifică obiectul care a emis evenimentul.

## 64. Ce trebuie făcut pentru a evita invocarea unui eveniment fără abonați?

A) Se declară evenimentul static. în mecanismul delegate/event
B) Expune lista de invocare pentru apel extern direct.
C) Se adaugă atributul async. în mecanismul delegate/event
D) Se verifică null sau se folosește operatorul ?.Invoke. **[CORECT]**

Raspuns corect: D) Se verifică null sau se folosește operatorul ?.Invoke.

## 65. Ce risc apare dacă un subscriber cu viață lungă rămâne abonat la publisher?

A) Poate apărea o referință nedorită și obiectul nu mai este colectat. **[CORECT]**
B) Delegate-ul devine automat abstract. în mecanismul delegate/event
C) Evenimentul se transformă în metodă statică. în mecanismul delegate/event
D) Publisher-ul își pierde constructorul. în mecanismul delegate/event

Raspuns corect: A) Poate apărea o referință nedorită și obiectul nu mai este colectat.

## 66. Care este scopul principal al Entity Framework?

A) Crearea interfețelor grafice.
B) Maparea obiect-relațională — ORM. **[CORECT]**
C) Implementarea algoritmilor.
D) Gestionarea memoriei.

Raspuns corect: B) Maparea obiect-relațională — ORM.

## 67. Ce metodă salvează modificările în baza de date?

A) `SaveDatabase()`
B) `SaveChanges()` **[CORECT]**
C) `Commit()`
D) `Submit()`

Raspuns corect: B) `SaveChanges()`

## 68. Ce clasă acționează de obicei ca unitate de lucru în EF?

A) `DbEntity`
B) `ObjectSet`
C) `DbContext` **[CORECT]**
D) `ModelBuilder`

Raspuns corect: C) `DbContext`

## 69. Ce metodă este folosită pentru filtrarea datelor folosind LINQ?

A) `Get()`
B) `Retrieve()`
C) `Where()` **[CORECT]**
D) `SelectFrom()`

Raspuns corect: C) `Where()`

## 70. Ce atribut specifică cheia primară?

A) `[KeyValue]`
B) `[Id]`
C) `[Key]` **[CORECT]**
D) `[Primary]`

Raspuns corect: C) `[Key]`

## 71. Ce se întâmplă dacă nu se apelează SaveChanges()?

A) Baza de date este ștearsă.
B) Modificările se salvează automat.
C) Modificările nu sunt persistate în baza de date. **[CORECT]**
D) Modificările sunt salvate parțial.

Raspuns corect: C) Modificările nu sunt persistate în baza de date.

## 72. Care clasă din EF definește și coordonează modelul entităților?

A) `DataSet`
B) `DbTable`
C) `DbContext` **[CORECT]**
D) `SchemaBuilder`

Raspuns corect: C) `DbContext`

## 73. Ce metodă elimină o entitate din context?

A) `Delete()`
B) `Remove()` **[CORECT]**
C) `Destroy()`
D) `Clear()`

Raspuns corect: B) `Remove()`

## 74. Ce este scaffolding-ul în EF?

A) Un stil de interfață.
B) Generarea automată de cod pe baza bazei de date. **[CORECT]**
C) Crearea unei ferestre.
D) Optimizarea codului.

Raspuns corect: B) Generarea automată de cod pe baza bazei de date.

## 75. Ce problemă rezolvă în principal un ORM?

A) Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.
B) Compilează interfața grafică, dar fără să reprezinte unitatea de lucru a contextului.
C) Mapează obiectele aplicației la structurile relaționale ale bazei de date. **[CORECT]**
D) Creează automat thread-uri pentru fiecare tabel, înainte ca EF să genereze comenzile de actualizare.

Raspuns corect: C) Mapează obiectele aplicației la structurile relaționale ale bazei de date.

## 76. În abordarea Code First, de unde pornește modelul aplicației?

A) De la o bază de date existentă obligatoriu.
B) Construiește modelul, fără să execute persistența.
C) Încarcă relații, dar nu schimbă starea entității.
D) De la clasele și configurațiile definite în cod. **[CORECT]**

Raspuns corect: D) De la clasele și configurațiile definite în cod.

## 77. Ce se întâmplă în Database First?

A) Clasele și contextul sunt generate pornind de la o schemă existentă. **[CORECT]**
B) Baza de date este creată numai după scrierea UI-ului, fără să confirme persistarea modificărilor în baza de date.
C) Folosește convenții, dar ignoră cheia explicită, dar fără să reprezinte unitatea de lucru a contextului.
D) Urmărește entitatea, însă nu trimite comenzi SQL, înainte ca EF să genereze comenzile de actualizare.

Raspuns corect: A) Clasele și contextul sunt generate pornind de la o schemă existentă.

## 78. Ce reprezintă DbSet<Product> într-un DbContext?

A) Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.
B) Punctul de acces pentru interogarea și modificarea entităților Product. **[CORECT]**
C) Construiește modelul, fără să execute persistența, înainte ca EF să genereze comenzile de actualizare.
D) Un thread care salvează date, dar fără să reprezinte unitatea de lucru a contextului.

Raspuns corect: B) Punctul de acces pentru interogarea și modificarea entităților Product.

## 79. Ce este o entitate POCO?

A) Încarcă relații, dar nu schimbă starea entității, fără să confirme persistarea modificărilor în baza de date.
B) Aplică filtrarea în memorie după materializare, dar fără să reprezinte unitatea de lucru a contextului.
C) O clasă simplă, fără dependență obligatorie de o clasă de bază EF. **[CORECT]**
D) Folosește convenții, dar ignoră cheia explicită, înainte ca EF să genereze comenzile de actualizare.

Raspuns corect: C) O clasă simplă, fără dependență obligatorie de o clasă de bază EF.

## 80. Cum poate fi configurat un model EF fără a folosi atribute pe clase?

A) Urmărește entitatea, însă nu trimite comenzi SQL.
B) Creează o proiecție, nu o operație de salvare.
C) Configurează mapping-ul, nu unitatea de lucru.
D) Prin Fluent API în OnModelCreating. **[CORECT]**

Raspuns corect: D) Prin Fluent API în OnModelCreating.

## 81. Care este efectul lui Include(x => x.Orders) într-o interogare?

A) Încarcă anticipat relația Orders împreună cu entitatea principală. **[CORECT]**
B) Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.
C) Construiește modelul, fără să execute persistența, înainte ca EF să genereze comenzile de actualizare.
D) Încarcă relații, dar nu schimbă starea entității, dar fără să reprezinte unitatea de lucru a contextului.

Raspuns corect: A) Încarcă anticipat relația Orders împreună cu entitatea principală.

## 82. Ce face Change Tracker?

A) Urmărește entitatea, însă nu trimite comenzi SQL, dar fără să reprezinte unitatea de lucru a contextului.
B) Urmărește starea entităților pentru a genera operațiile de persistare. **[CORECT]**
C) Atașează entitatea, dar nu marchează modificări noi, fără să confirme persistarea modificărilor în baza de date.
D) Construiește modelul, fără să execute persistența, înainte ca EF să genereze comenzile de actualizare.

Raspuns corect: B) Urmărește starea entităților pentru a genera operațiile de persistare.

## 83. Când este util AsNoTracking()?

A) Când vrem să ștergem toate înregistrările, înainte ca EF să genereze comenzile de actualizare.
B) Când fiecare rezultat trebuie salvat automat, fără să confirme persistarea modificărilor în baza de date.
C) La interogări doar pentru citire, unde nu urmează actualizarea entităților. **[CORECT]**
D) Numai pentru migrații, dar fără să reprezinte unitatea de lucru a contextului.

Raspuns corect: C) La interogări doar pentru citire, unde nu urmează actualizarea entităților.

## 84. Care este rolul unei migrații în Code First?

A) Încarcă relații, dar nu schimbă starea entității.
B) Aplică filtrarea în memorie după materializare.
C) Înlocuiește toate interogările LINQ cu SQL scris manual.
D) Descrie și aplică incremental modificările de schemă. **[CORECT]**

Raspuns corect: D) Descrie și aplică incremental modificările de schemă.

## 85. Ce reprezintă un fir de execuție în C#?

A) O structură de date.
B) Un flux de execuție care poate rula concurent cu alte fire. **[CORECT]**
C) O colecție de metode.
D) Un tip de buclă.

Raspuns corect: B) Un flux de execuție care poate rula concurent cu alte fire.

## 86. Ce namespace este folosit pentru lucrul cu fire de execuție?

A) `System.Collections`
B) `System.Threading` **[CORECT]**
C) `System.IO`
D) `System.Net`

Raspuns corect: B) `System.Threading`

## 87. Care este scopul metodei Thread.Sleep()?

A) Întrerupe un thread nou.
B) Suspendă thread-ul curent pentru perioada specificată. **[CORECT]**
C) Termină definitiv un thread.
D) Sincronizează mai multe thread-uri.

Raspuns corect: B) Suspendă thread-ul curent pentru perioada specificată.

## 88. Ce înseamnă sincronizarea firelor de execuție?

A) Un singur thread poate exista în orice moment.
B) Mai multe thread-uri rulează fără coordonare.
C) Coordonarea thread-urilor pentru acces și ordine corectă a operațiilor. **[CORECT]**
D) Terminarea tuturor thread-urilor, cu excepția unuia.

Raspuns corect: C) Coordonarea thread-urilor pentru acces și ordine corectă a operațiilor.

## 89. Ce este un deadlock?

A) Două sau mai multe thread-uri se așteaptă reciproc și nu mai pot continua. **[CORECT]**
B) Un thread se termină neașteptat.
C) Thread-urile rulează fără coordonare, dar continuă execuția.
D) Un thread consumă prea multă memorie.

Raspuns corect: A) Două sau mai multe thread-uri se așteaptă reciproc și nu mai pot continua.

## 90. Ce namespace este folosit pentru threading?

A) `System.IO`
B) `System.Threading` **[CORECT]**
C) `System.Linq`
D) `System.Threading.Tasks`

Raspuns corect: B) `System.Threading`

## 91. Ce metodă pornește un thread?

A) `Begin()`
B) `Run()`
C) `Start()` **[CORECT]**
D) `Launch()`

Raspuns corect: C) `Start()`

## 92. Ce metodă așteaptă terminarea unui thread?

A) `Await()`
B) `Join()` **[CORECT]**
C) `Stop()`
D) `WaitFor()`

Raspuns corect: B) `Join()`

## 93. Ce metodă suspendă voluntar temporar execuția thread-ului curent?

A) `Sleep()` **[CORECT]**
B) `Wait()`
C) `Pause()`
D) `Kill()`

Raspuns corect: A) `Sleep()`

## 94. Ce cuvânt-cheie previne accesul concurent la o secțiune de cod?

A) `block`
B) `if(lock)`
C) `lock` **[CORECT]**
D) `mutex`

Raspuns corect: C) `lock`

## 95. Cum eviți accesul simultan necontrolat asupra unei resurse?

A) `Delay()`
B) `Start()`
C) `lock` sau `Monitor` **[CORECT]**
D) `Print()`

Raspuns corect: C) `lock` sau `Monitor`

## 96. Ce este un ThreadPool?

A) O listă de thread-uri terminate.
B) Un set de thread-uri reutilizabile. **[CORECT]**
C) Un manager UI.
D) Memorie partajată.

Raspuns corect: B) Un set de thread-uri reutilizabile.

## 97. Ce face Thread.Sleep(0)?

A) Blochează întregul proces.
B) Oprește definitiv thread-ul.
C) Cedează posibilitatea de execuție unui alt thread eligibil. **[CORECT]**
D) Repornește thread-ul.

Raspuns corect: C) Cedează posibilitatea de execuție unui alt thread eligibil.

## 98. Ce metodă face un thread să aștepte până când alt thread s-a terminat?

A) `Thread.Suspend()`
B) `Thread.Abort()`
C) `Thread.Join()` **[CORECT]**
D) `Thread.Stop()`

Raspuns corect: C) `Thread.Join()`

## 99. Care este diferența corectă dintre proces și thread?

A) Protejează datele doar dacă toate firele folosesc același obiect, fără să garanteze ordinea de execuție a firelor.
B) Sincronizează intrarea în secțiune, nu rezultatul logic, dar fără să protejeze singur resursa partajată.
C) Un proces are spațiu de resurse propriu; thread-urile lui împart resursele procesului. **[CORECT]**
D) Thread-urile nu pot rula concurent, într-un scenariu concurent cu acces intercalat.

Raspuns corect: C) Un proces are spațiu de resurse propriu; thread-urile lui împart resursele procesului.

## 100. Ce este o race condition?

A) Un thread rulează întotdeauna mai repede decât altul, dar fără să protejeze singur resursa partajată.
B) Procesul nu mai are memorie disponibilă.
C) Două task-uri au aceeași prioritate, într-un scenariu concurent cu acces intercalat.
D) Rezultatul depinde de ordinea imprevizibilă a acceselor concurente. **[CORECT]**

Raspuns corect: D) Rezultatul depinde de ordinea imprevizibilă a acceselor concurente.

## 101. Ce este o secțiune critică?

A) O zonă de cod care accesează o resursă partajată și trebuie protejată. **[CORECT]**
B) Orice metodă care poate arunca excepții.
C) Codul executat numai la pornire, fără să garanteze ordinea de execuție a firelor.
D) O clasă fără constructor public, dar fără să protejeze singur resursa partajată.

Raspuns corect: A) O zonă de cod care accesează o resursă partajată și trebuie protejată.

## 102. Care situație poate produce deadlock?

A) Protejează datele doar dacă toate firele folosesc același obiect, dar fără să protejeze singur resursa partajată.
B) Două thread-uri țin resurse diferite și așteaptă circular resursa celuilalt. **[CORECT]**
C) Cedează procesorul, dar nu garantează ordinea firelor, într-un scenariu concurent cu acces intercalat.
D) Două metode citesc date imutabile, fără să garanteze ordinea de execuție a firelor.

Raspuns corect: B) Două thread-uri țin resurse diferite și așteaptă circular resursa celuilalt.

## 103. Cum se reduce riscul de deadlock când sunt necesare mai multe lock-uri?

A) Se adaugă cât mai multe lock-uri aleatorii, fără să garanteze ordinea firelor concurente.
B) Se folosesc numai variabile globale, fără să garanteze ordinea firelor concurente.
C) Se impune aceeași ordine de achiziție a lock-urilor peste tot. **[CORECT]**
D) Se apelează Thread.Abort după fiecare operație.

Raspuns corect: C) Se impune aceeași ordine de achiziție a lock-urilor peste tot.

## 104. Ce descrie starvation?

A) Toate thread-urile se termină simultan.
B) Memoria heap este colectată complet, fără să garanteze ordinea de execuție a firelor.
C) Un task este convertit în proces, într-un scenariu concurent cu acces intercalat.
D) Un thread nu primește suficient acces la resurse pentru a progresa. **[CORECT]**

Raspuns corect: D) Un thread nu primește suficient acces la resurse pentru a progresa.

## 105. Pentru ce este potrivit Task.Run într-o aplicație desktop?

A) Pentru mutarea unei operații CPU-bound de pe firul UI. **[CORECT]**
B) Pentru a face orice apel I/O automat mai rapid, dar fără să protejeze singur resursa partajată.
C) Pentru a accesa controalele UI din orice thread, într-un scenariu concurent cu acces intercalat.
D) Pentru a înlocui baza de date.

Raspuns corect: A) Pentru mutarea unei operații CPU-bound de pe firul UI.

## 106. Ce avantaj are await față de apelarea blocantă Wait() într-un flux asincron?

A) Creează obligatoriu un proces nou, fără să garanteze ordinea firelor concurente.
B) Permite continuarea fără blocarea thread-ului apelant. **[CORECT]**
C) Garantează paralelism pe toate nucleele, fără să garanteze ordinea firelor concurente.
D) Elimină necesitatea tratării excepțiilor.

Raspuns corect: B) Permite continuarea fără blocarea thread-ului apelant.

## 107. Ce face Task.WhenAll pentru mai multe task-uri?

A) Oprește toate task-urile imediat, fără să garanteze ordinea firelor concurente.
B) Execută task-urile strict unul după altul.
C) Produce un task care se încheie după finalizarea tuturor. **[CORECT]**
D) Blochează permanent thread-ul principal, fără să garanteze ordinea firelor concurente.

Raspuns corect: C) Produce un task care se încheie după finalizarea tuturor.

## 108. Cum se transmite în mod cooperant o cerere de anulare în TPL?

A) Prin Thread.Abort în orice situație.
B) Prin ștergerea obiectului Task.
C) Prin modificarea priorității procesului.
D) Prin CancellationToken. **[CORECT]**

Raspuns corect: D) Prin CancellationToken.

## 109. Ce oferă un API unui consumator?

A) Un contract controlat pentru accesarea funcționalității unui sistem. **[CORECT]**
B) Acces direct la toate detaliile interne, fără să respecte complet contractul serviciului.
C) O bază de date locală obligatorie, fără să respecte complet contractul serviciului.
D) Un thread dedicat pentru fiecare metodă.

Raspuns corect: A) Un contract controlat pentru accesarea funcționalității unui sistem.

## 110. Care afirmație despre API și serviciu web este corectă?

A) Orice API folosește obligatoriu SOAP.
B) Orice serviciu web expune un API, dar nu orice API este accesat prin web. **[CORECT]**
C) Serviciile web nu au contracte, fără să respecte complet semantica resurselor HTTP.
D) API-urile pot exista numai între procese de pe aceeași mașină, dar cu un contract mai rigid decât un API REST simplu.

Raspuns corect: B) Orice serviciu web expune un API, dar nu orice API este accesat prin web.

## 111. În arhitectura client–server, cine inițiază de regulă cererea?

A) Serverul de baze de date
B) Garbage Collector
C) Clientul **[CORECT]**
D) Compilatorul JIT

Raspuns corect: C) Clientul

## 112. Ce format este specific mesajelor SOAP clasice?

A) Numai JSON fără metadate.
B) Cod binar CIL, fără să respecte complet contractul serviciului.
C) Fișiere XAML, fără să respecte complet contractul serviciului.
D) XML într-un envelope standardizat. **[CORECT]**

Raspuns corect: D) XML într-un envelope standardizat.

## 113. Ce descrie WSDL?

A) Contractul operațiilor și mesajelor unui serviciu SOAP. **[CORECT]**
B) Structura vizuală a unui formular, fără să respecte complet contractul serviciului.
C) Schema internă a unui thread pool.
D) Regulile de garbage collection, fără să respecte complet contractul serviciului.

Raspuns corect: A) Contractul operațiilor și mesajelor unui serviciu SOAP.

## 114. Ce avantaj este asociat frecvent cu SOAP în integrarea enterprise?

A) Mesaje întotdeauna mai mici decât JSON.
B) Standarde extinse pentru securitate, contracte și tranzacții. **[CORECT]**
C) Lipsa totală a unui contract, fără să respecte complet contractul serviciului.
D) Necesită numai browser, fără server, fără să respecte complet contractul serviciului.

Raspuns corect: B) Standarde extinse pentru securitate, contracte și tranzacții.

## 115. Într-un API REST, ce reprezintă de regulă URI-ul?

A) Un thread de execuție, fără să respecte complet contractul serviciului.
B) O clasă abstractă, fără să respecte complet contractul serviciului.
C) O resursă sau o colecție de resurse. **[CORECT]**
D) O migrație de bază de date.

Raspuns corect: C) O resursă sau o colecție de resurse.

## 116. Care metodă HTTP este folosită în mod obișnuit pentru citirea unei resurse fără modificare?

A) POST
B) DELETE
C) PATCH
D) GET **[CORECT]**

Raspuns corect: D) GET

## 117. Ce înseamnă că un serviciu REST este stateless?

A) Fiecare cerere conține informația necesară, fără sesiune obligatorie păstrată pe server. **[CORECT]**
B) Serverul nu poate avea bază de date, dar cu un contract mai rigid decât un API REST simplu.
C) Folosește JSON, însă păstrează cuplare procedurală puternică, într-o integrare distribuită cu mesaje standardizate.
D) Răspunsurile nu au coduri de stare, fără să respecte complet semantica resurselor HTTP.

Raspuns corect: A) Fiecare cerere conține informația necesară, fără sesiune obligatorie păstrată pe server.

## 118. Ce alegere este mai potrivită pentru un API public simplu, consumat de aplicații web și mobile?

A) SOAP este obligatoriu pentru orice aplicație mobilă, într-o integrare distribuită cu mesaje standardizate.
B) REST cu reprezentări JSON, dacă nu există cerințe enterprise speciale. **[CORECT]**
C) Acces SQL direct din client, fără să respecte complet semantica resurselor HTTP.
D) Partajarea fișierelor bazei de date.

Raspuns corect: B) REST cu reprezentări JSON, dacă nu există cerințe enterprise speciale.

## 119. Care sunt cele trei niveluri ale unei arhitecturi tipice pe trei niveluri?

A) Prezentare, Aplicație, Bază de date.
B) Interfață utilizator, Logică de afaceri, Date.
C) Client, Middleware, Server.
D) Prezentare, Logică de afaceri, Acces la date. **[CORECT]**

Raspuns corect: D) Prezentare, Logică de afaceri, Acces la date.

## 120. Care nivel este responsabil pentru interacțiunea cu utilizatorul?

A) Nivelul de acces la date.
B) Nivelul logicii de afaceri.
C) Nivelul de prezentare. **[CORECT]**
D) Nivelul aplicației.

Raspuns corect: C) Nivelul de prezentare.

## 121. Care nivel gestionează validarea datelor și regulile de afaceri?

A) Nivelul de prezentare.
B) Nivelul de acces la date.
C) Nivelul logicii de afaceri. **[CORECT]**
D) Nivelul interfeței utilizatorului.

Raspuns corect: C) Nivelul logicii de afaceri.

## 122. Care sunt cele trei straturi principale ale arhitecturii 3-tier?

A) API, Frontend, Backend.
B) Presentation, Business Logic, Data Access. **[CORECT]**
C) View, Controller, Model.
D) Controller, Service, Repository.

Raspuns corect: B) Presentation, Business Logic, Data Access.

## 123. Ce responsabilitate are stratul Business Logic?

A) Afișarea interfeței utilizatorului.
B) Conectarea directă la baza de date.
C) Implementarea regulilor și proceselor de business. **[CORECT]**
D) Stocarea fizică a datelor.

Raspuns corect: C) Implementarea regulilor și proceselor de business.

## 124. Cum comunică stratul Presentation cu baza de date într-un model 3-tier corect?

A) Direct, printr-o conexiune SQL.
B) Prin Business Logic și apoi prin Data Access. **[CORECT]**
C) Exclusiv prin WCF.
D) Prin fișiere XML.

Raspuns corect: B) Prin Business Logic și apoi prin Data Access.

## 125. De ce este importantă separarea straturilor?

A) Reduce obligatoriu numărul de clase.
B) Face aplicația mai lentă.
C) Ajută doar interfața.
D) Asigură modularitate, întreținere mai ușoară și testabilitate. **[CORECT]**

Raspuns corect: D) Asigură modularitate, întreținere mai ușoară și testabilitate.

## 126. Ce definește un sistem distribuit?

A) O singură aplicație cu mai multe clase, fără să treacă regulile prin nivelul de business.
B) Componente aflate pe noduri diferite colaborează prin comunicație pentru un scop comun. **[CORECT]**
C) Mută validarea în formular și persistența în controller, dar cu o separare slabă între prezentare și persistență.
D) Pune regulile domeniului în proceduri de stocare accesate direct, păstrând cuplarea directă dintre UI și date.

Raspuns corect: B) Componente aflate pe noduri diferite colaborează prin comunicație pentru un scop comun.

## 127. Ce înseamnă reziliența într-o arhitectură distribuită?

A) Sistemul nu mai necesită monitorizare, fără să păstreze separarea dintre straturi.
B) Toate componentele rulează pe un singur server.
C) Sistemul continuă sau se recuperează controlat când apar defecțiuni. **[CORECT]**
D) Datele nu sunt niciodată replicate, fără să păstreze separarea dintre straturi.

Raspuns corect: C) Sistemul continuă sau se recuperează controlat când apar defecțiuni.

## 128. Ce este scalarea orizontală?

A) Creșterea memoriei unui singur server.
B) Reducerea numărului de utilizatori, dar cu o separare slabă între prezentare și persistență.
C) Mutarea codului într-o singură clasă.
D) Adăugarea mai multor instanțe sau noduri. **[CORECT]**

Raspuns corect: D) Adăugarea mai multor instanțe sau noduri.

## 129. Care este scopul edge computing în industrie?

A) Procesează date aproape de sursă pentru latență mai mică și autonomie locală. **[CORECT]**
B) Mută toate datele exclusiv într-un cloud îndepărtat, fără să păstreze separarea dintre straturi.
C) Reduce numărul de straturi prin cuplarea lor explicită.
D) Înlocuiește toate PLC-urile cu baze de date, fără să păstreze separarea dintre straturi.

Raspuns corect: A) Procesează date aproape de sursă pentru latență mai mică și autonomie locală.

## 130. Care este un avantaj al monolitului pentru o aplicație mică?

A) Scalarea fiecărei funcții independent este automată.
B) Implementare și deployment inițial mai simple. **[CORECT]**
C) Defecțiunile sunt izolate perfect.
D) Fiecare modul are obligatoriu propria bază de date.

Raspuns corect: B) Implementare și deployment inițial mai simple.

## 131. Ce limitare apare frecvent într-un model 2-tier cu mulți clienți conectați direct la baza de date?

A) Nu poate exista nicio interfață grafică.
B) Clienții nu pot citi date, fără să păstreze separarea dintre straturi.
C) Cuplare mare și control mai slab al logicii și securității. **[CORECT]**
D) Baza de date devine automat stateless, fără să păstreze separarea dintre straturi.

Raspuns corect: C) Cuplare mare și control mai slab al logicii și securității.

## 132. Ce strat ar trebui să conțină validarea unei reguli precum limita maximă de comandă?

A) Presentation
B) Permite UI-ului să ocolească regulile de business.
C) Mută validarea în formular și persistența în controller.
D) Business Logic **[CORECT]**

Raspuns corect: D) Business Logic

## 133. Ce caracterizează microserviciile?

A) Servicii mici, deployabile independent, organizate în jurul unor capabilități. **[CORECT]**
B) O singură unitate de deployment pentru întregul sistem.
C) Acces direct al UI-ului la toate bazele de date, fără să păstreze separarea dintre straturi.
D) Lipsa totală a comunicării între componente, fără să păstreze separarea dintre straturi.

Raspuns corect: A) Servicii mici, deployabile independent, organizate în jurul unor capabilități.

## 134. Cum diferă SOA de o aplicație monolitică?

A) Pune regulile domeniului în proceduri de stocare accesate direct, fără să treacă regulile prin nivelul de business.
B) Funcționalitățile sunt expuse ca servicii interoperabile, nu numai ca module interne. **[CORECT]**
C) SOA cere o singură clasă pentru toate operațiile, păstrând cuplarea directă dintre UI și date.
D) Monolitul are obligatoriu mai multe servicii autonome.

Raspuns corect: B) Funcționalitățile sunt expuse ca servicii interoperabile, nu numai ca module interne.

## 135. Ce avantaj oferă o arhitectură event-driven?

A) Toate componentele trebuie să se apeleze sincron.
B) Ordinea globală este întotdeauna garantată fără mecanisme suplimentare, fără să treacă regulile prin nivelul de business.
C) Producătorii și consumatorii pot fi slab cuplați și procesa asincron evenimente. **[CORECT]**
D) Nu mai este necesară tratarea erorilor, dar cu o separare slabă între prezentare și persistență.

Raspuns corect: C) Producătorii și consumatorii pot fi slab cuplați și procesa asincron evenimente.

## 136. Ce diferențiază programarea strategică de cea tactică?

A) Trimite cererea direct către repository fără caz de utilizare, păstrând dependențe directe între straturile externe.
B) Pune entitățile să cunoască framework-ul de persistență, fără să protejeze domeniul de detaliile infrastructurii.
C) Înlocuiește mediatorul cu apeluri directe între controllere, dar amestecând comenzile cu interogările aplicației.
D) Strategica investește în structură pentru costuri mici pe termen lung; tactica optimizează doar livrarea imediată. **[CORECT]**

Raspuns corect: D) Strategica investește în structură pentru costuri mici pe termen lung; tactica optimizează doar livrarea imediată.

## 137. Ce urmărește Separation of Concerns?

A) Fiecare zonă a sistemului tratează o responsabilitate distinctă. **[CORECT]**
B) Toată logica este concentrată într-un singur modul.
C) Interfața accesează direct orice detaliu intern, fără să izoleze domeniul de infrastructură.
D) Fiecare clasă trebuie să aibă exact o metodă, fără să izoleze domeniul de infrastructură.

Raspuns corect: A) Fiecare zonă a sistemului tratează o responsabilitate distinctă.

## 138. Care este regula dependențelor în Clean Architecture?

A) Domeniul depinde de framework-ul UI, fără să izoleze domeniul de infrastructură.
B) Dependențele de cod indică spre straturile interioare. **[CORECT]**
C) Application depinde direct de baza de date concretă.
D) Toate straturile depind unele de altele circular, fără să izoleze domeniul de infrastructură.

Raspuns corect: B) Dependențele de cod indică spre straturile interioare.

## 139. Ce conține în principal stratul Domain?

A) Controllere HTTP și componente vizuale, fără să izoleze domeniul de infrastructură.
B) Implementări concrete de baze de date, fără să izoleze domeniul de infrastructură.
C) Entități și reguli de business independente de infrastructură. **[CORECT]**
D) Fișiere de configurare ale deployment-ului.

Raspuns corect: C) Entități și reguli de business independente de infrastructură.

## 140. Care este rolul stratului Application?

A) Lasă infrastructura să definească regulile de domeniu, fără să protejeze domeniul de detaliile infrastructurii.
B) Configurează exclusiv serverul web, păstrând dependențe directe între straturile externe.
C) Stochează fizic toate datele, dar amestecând comenzile cu interogările aplicației.
D) Orchestrează cazurile de utilizare și definește porturi către exterior. **[CORECT]**

Raspuns corect: D) Orchestrează cazurile de utilizare și definește porturi către exterior.

## 141. Unde ar trebui implementat un repository bazat pe Entity Framework?

A) În Infrastructure, conform unei interfețe definite spre interior. **[CORECT]**
B) În Domain, împreună cu toate detaliile SQL, fără să izoleze domeniul de infrastructură.
C) Amestecă interogările cu comenzile în același handler.
D) Într-un atribut al entității, fără să izoleze domeniul de infrastructură.

Raspuns corect: A) În Infrastructure, conform unei interfețe definite spre interior.

## 142. De ce Clean Architecture facilitează testarea?

A) Trimite cererea direct către repository fără caz de utilizare, fără să protejeze domeniul de detaliile infrastructurii.
B) Cazurile de utilizare pot fi testate cu implementări false ale dependențelor externe. **[CORECT]**
C) Baza de date reală este obligatorie pentru orice test.
D) Toate clasele devin automat statice, dar amestecând comenzile cu interogările aplicației.

Raspuns corect: B) Cazurile de utilizare pot fi testate cu implementări false ale dependențelor externe.

## 143. Ce separă CQRS?

A) Thread-urile de procese, dar amestecând comenzile cu interogările aplicației.
B) UI-ul de compilator, păstrând dependențe directe între straturile externe.
C) Operațiile care modifică starea de cele care citesc date. **[CORECT]**
D) Clasele de structuri, fără să protejeze domeniul de detaliile infrastructurii.

Raspuns corect: C) Operațiile care modifică starea de cele care citesc date.

## 144. Care afirmație despre o comandă CQRS este corectă?

A) Trebuie să returneze o colecție complexă pentru afișare, păstrând dependențe directe între straturile externe.
B) Este identică unei interogări read-only.
C) Poate fi executată numai în UI, fără să protejeze domeniul de detaliile infrastructurii.
D) Exprimă intenția de a modifica starea și poate fi tratată de un handler. **[CORECT]**

Raspuns corect: D) Exprimă intenția de a modifica starea și poate fi tratată de un handler.

## 145. Ce avantaj oferă pattern-ul Mediator?

A) Expeditorul trimite cererea printr-un mediator, fără să cunoască handler-ul concret. **[CORECT]**
B) Pune entitățile să cunoască framework-ul de persistență, dar amestecând comenzile cu interogările aplicației.
C) Înlocuiește mediatorul cu apeluri directe între controllere, păstrând dependențe directe între straturile externe.
D) Trimite cererea direct către repository fără caz de utilizare, fără să protejeze domeniul de detaliile infrastructurii.

Raspuns corect: A) Expeditorul trimite cererea printr-un mediator, fără să cunoască handler-ul concret.

## 146. Ce afirmă Principiul Responsabilității Unice (SRP)?

A) O clasă ar trebui să gestioneze multiple responsabilități.
B) O clasă ar trebui să aibă un singur motiv pentru a se schimba. **[CORECT]**
C) O clasă ar trebui să fie deschisă pentru extindere.
D) O clasă ar trebui să depindă de implementări concrete.

Raspuns corect: B) O clasă ar trebui să aibă un singur motiv pentru a se schimba.

## 147. Cum beneficiază SRP designul software-ului?

A) Face codul mai complex și mai greu de întreținut.
B) Permite claselor să gestioneze multiple funcționalități.
C) Face codul mai ușor de înțeles și de modificat. **[CORECT]**
D) Necesită mai multe dependențe în fiecare clasă.

Raspuns corect: C) Face codul mai ușor de înțeles și de modificat.

## 148. Care este ideea principală a Principiului Open/Closed?

A) Entitățile trebuie închise pentru extindere și deschise pentru modificare.
B) Entitățile trebuie deschise pentru extindere, dar închise pentru modificare. **[CORECT]**
C) Entitățile trebuie să depindă de implementări concrete.
D) Entitățile trebuie să evite interfețele.

Raspuns corect: B) Entitățile trebuie deschise pentru extindere, dar închise pentru modificare.

## 149. Care este un exemplu de încălcare a OCP?

A) Adăugarea unei subclase fără modificarea codului existent.
B) Modificarea aceleiași clase pentru fiecare funcționalitate nouă. **[CORECT]**
C) Utilizarea interfețelor pentru extensii flexibile.
D) Extinderea unei clase prin moștenire.

Raspuns corect: B) Modificarea aceleiași clase pentru fiecare funcționalitate nouă.

## 150. Ce înseamnă litera „S” din SOLID?

A) Simplification.
B) Strong Coupling.
C) Single Responsibility Principle. **[CORECT]**
D) Static Class.

Raspuns corect: C) Single Responsibility Principle.

## 151. Care este scopul principiului Open/Closed?

A) Clasa trebuie modificată cu ușurință pentru fiecare funcție.
B) Clasa poate fi instanțiată oriunde.
C) Clasa trebuie să fie deschisă pentru extindere, dar închisă pentru modificare. **[CORECT]**
D) Este permisă doar moștenirea multiplă.

Raspuns corect: C) Clasa trebuie să fie deschisă pentru extindere, dar închisă pentru modificare.

## 152. Ce semnal indică încălcarea SRP într-o clasă Invoice?

A) Adaugă reguli noi prin modificarea clasei existente.
B) Concentrează validarea, persistența și afișarea într-un tip.
C) Alege implementarea concretă prin switch repetat.
D) Calculează totalul, salvează în bază și trimite e-mailul. **[CORECT]**

Raspuns corect: D) Calculează totalul, salvează în bază și trimite e-mailul.

## 153. Cum se repară o clasă care calculează, persistă și afișează rapoarte?

A) Se separă calculul, persistența și prezentarea în colaboratori dedicați. **[CORECT]**
B) Se mută toate metodele într-o clasă statică mai mare, dar cu modificarea clasei existente la cerințe noi.
C) Crește coeziunea accidentală între motive diferite de schimbare, păstrând cuplarea dintre extensie și codul stabil.
D) Mută extensia în if-uri succesive din metoda principală, fără să separe motivele diferite de schimbare.

Raspuns corect: A) Se separă calculul, persistența și prezentarea în colaboratori dedicați.

## 154. Ce beneficiu de testare aduce SRP?

A) Folosește o clasă mare pentru toate variațiile algoritmului, păstrând cuplarea dintre extensie și codul stabil.
B) Logica izolată poate fi verificată fără infrastructură sau UI nerelevante. **[CORECT]**
C) Fiecare clasă trebuie testată numai prin interfața grafică, fără să separe motivele diferite de schimbare.
D) Adaugă reguli noi prin modificarea clasei existente, dar cu modificarea clasei existente la cerințe noi.

Raspuns corect: B) Logica izolată poate fi verificată fără infrastructură sau UI nerelevante.

## 155. Ce structură respectă OCP pentru calcularea mai multor tipuri de discount?

A) Concentrează validarea, persistența și afișarea într-un tip, fără să separe motivele diferite de schimbare.
B) Crește coeziunea accidentală între motive diferite de schimbare, păstrând cuplarea dintre extensie și codul stabil.
C) O interfață IDiscount cu implementări separate selectate prin polimorfism. **[CORECT]**
D) Mută extensia în if-uri succesive din metoda principală, dar cu modificarea clasei existente la cerințe noi.

Raspuns corect: C) O interfață IDiscount cu implementări separate selectate prin polimorfism.

## 156. De ce un switch pe tip concret, extins la fiecare cerință, poate încălca OCP?

A) Folosește o clasă mare pentru toate variațiile algoritmului.
B) Adaugă reguli noi prin modificarea clasei existente, dar cu modificarea clasei existente la cerințe noi.
C) Concentrează validarea, persistența și afișarea într-un tip.
D) Codul existent trebuie modificat pentru fiecare variantă nouă. **[CORECT]**

Raspuns corect: D) Codul existent trebuie modificat pentru fiecare variantă nouă.

## 157. Ce înseamnă „închis pentru modificare” în OCP?

A) Comportamentul stabil nu trebuie editat pentru orice extensie nouă. **[CORECT]**
B) Alege implementarea concretă prin switch repetat, fără să separe motivele diferite de schimbare.
C) Clasa trebuie declarată sealed în toate cazurile, păstrând cuplarea dintre extensie și codul stabil.
D) Crește coeziunea accidentală între motive diferite de schimbare.

Raspuns corect: A) Comportamentul stabil nu trebuie editat pentru orice extensie nouă.

## 158. Ce mecanism susține frecvent OCP?

A) Accesul global la starea internă.
B) Polimorfismul prin abstracții stabile. **[CORECT]**
C) Copierea codului în fiecare clasă.
D) Conversiile dynamic pentru orice apel.

Raspuns corect: B) Polimorfismul prin abstracții stabile.

## 159. Un sistem adaugă tipuri noi de senzori. Ce design este mai extensibil?

A) Procesorul verifică numele clasei prin zeci de if-uri.
B) Mută extensia în if-uri succesive din metoda principală.
C) Fiecare senzor implementează ISensor, iar procesorul lucrează cu ISensor. **[CORECT]**
D) Toți senzorii moștenesc o clasă cu metode care aruncă excepții pentru funcții lipsă.

Raspuns corect: C) Fiecare senzor implementează ISensor, iar procesorul lucrează cu ISensor.

## 160. Cum se leagă SRP și OCP?

A) Folosește o clasă mare pentru toate variațiile algoritmului, dar cu modificarea clasei existente la cerințe noi.
B) Concentrează validarea, persistența și afișarea într-un tip, fără să separe motivele diferite de schimbare.
C) Crește coeziunea accidentală între motive diferite de schimbare, păstrând cuplarea dintre extensie și codul stabil.
D) Clasele focalizate au puncte de schimbare mai clare și sunt mai ușor de extins controlat. **[CORECT]**

Raspuns corect: D) Clasele focalizate au puncte de schimbare mai clare și sunt mai ușor de extins controlat.

## 161. Care este un risc al aplicării mecanice a SRP?

A) Fragmentarea excesivă în clase fără valoare clară poate crește complexitatea. **[CORECT]**
B) Mută extensia în if-uri succesive din metoda principală, dar cu modificarea clasei existente la cerințe noi.
C) Folosește o clasă mare pentru toate variațiile algoritmului, fără să separe motivele diferite de schimbare.
D) Concentrează validarea, persistența și afișarea într-un tip, păstrând cuplarea dintre extensie și codul stabil.

Raspuns corect: A) Fragmentarea excesivă în clase fără valoare clară poate crește complexitatea.

## 162. Ce asigură Principiul Substituției lui Liskov?

A) Subtipurile trebuie să depindă de implementări specifice.
B) Subtipurile trebuie să poată înlocui tipurile de bază fără afectarea programului. **[CORECT]**
C) Subtipurile trebuie să evite moștenirea.
D) Subtipurile trebuie să fie închise pentru extindere.

Raspuns corect: B) Subtipurile trebuie să poată înlocui tipurile de bază fără afectarea programului.

## 163. Care este o încălcare a LSP?

A) O subclasă poate înlocui superclasa fără schimbarea comportamentului.
B) O subclasă suprascrie o metodă și aruncă un tip nou, incompatibil, de excepție. **[CORECT]**
C) O subclasă adaugă o metodă nouă.
D) O subclasă extinde o clasă abstractă.

Raspuns corect: B) O subclasă suprascrie o metodă și aruncă un tip nou, incompatibil, de excepție.

## 164. Care este ideea principală a ISP?

A) Clienții trebuie să depindă de interfețe pe care nu le folosesc.
B) Clienții nu trebuie forțați să depindă de interfețe pe care nu le folosesc. **[CORECT]**
C) Interfețele trebuie să fie cât mai mari.
D) Interfețele nu trebuie utilizate.

Raspuns corect: B) Clienții nu trebuie forțați să depindă de interfețe pe care nu le folosesc.

## 165. Ce ilustrează cel mai bine respectarea ISP?

A) O singură interfață cu metode pentru toate operațiile.
B) Mai multe interfețe specifice pentru funcționalități diferite. **[CORECT]**
C) O interfață mare implementată integral de toți clienții.
D) Evitarea completă a interfețelor.

Raspuns corect: B) Mai multe interfețe specifice pentru funcționalități diferite.

## 166. Care este un concept-cheie al DIP?

A) Modulele de nivel înalt trebuie să depindă de cele de nivel scăzut.
B) Atât modulele de nivel înalt, cât și cele de nivel scăzut trebuie să depindă de abstracții. **[CORECT]**
C) Abstracțiile trebuie să depindă de implementări concrete.
D) Modulele de nivel scăzut trebuie să fie independente de cele de nivel înalt.

Raspuns corect: B) Atât modulele de nivel înalt, cât și cele de nivel scăzut trebuie să depindă de abstracții.

## 167. Ce urmărește DIP în designul software-ului?

A) Dependența modulelor de nivel înalt față de modulele de nivel scăzut.
B) Reducerea dependenței de abstracții.
C) Creșterea cuplării dintre componente.
D) Decuplarea componentelor și întreținerea mai ușoară. **[CORECT]**

Raspuns corect: D) Decuplarea componentelor și întreținerea mai ușoară.

## 168. Ce exprimă Liskov Substitution Principle?

A) Clasele derivate pot modifica total comportamentul contractului.
B) O clasă abstractă nu trebuie moștenită.
C) O instanță a clasei derivate trebuie să poată fi utilizată oriunde este așteptată clasa de bază. **[CORECT]**
D) Toate clasele trebuie să implementeze `IDisposable`.

Raspuns corect: C) O instanță a clasei derivate trebuie să poată fi utilizată oriunde este așteptată clasa de bază.

## 169. Ce înseamnă Interface Segregation Principle?

A) Folosirea cât mai puțin a interfețelor.
B) Implementarea unei singure interfețe mari.
C) Interfețele trebuie să fie mici și specifice; clienții nu trebuie obligați să implementeze metode inutile. **[CORECT]**
D) Interfețele nu se pot moșteni.

Raspuns corect: C) Interfețele trebuie să fie mici și specifice; clienții nu trebuie obligați să implementeze metode inutile.

## 170. Ce afirmă Dependency Inversion Principle?

A) Clasele de nivel înalt trebuie să depindă de clasele mici.
B) Clasele de nivel înalt nu trebuie să depindă de clasele de nivel jos; ambele trebuie să depindă de abstracții. **[CORECT]**
C) Nu trebuie folosite interfețe.
D) Dependențele trebuie instanțiate direct în clase.

Raspuns corect: B) Clasele de nivel înalt nu trebuie să depindă de clasele de nivel jos; ambele trebuie să depindă de abstracții.

## 171. Ce trebuie păstrat pentru respectarea LSP?

A) Numele exact al tuturor câmpurilor private.
B) Aceeași implementare internă linie cu linie.
C) Contractul observabil al tipului de bază. **[CORECT]**
D) Forțează clienții să implementeze metode nefolosite.

Raspuns corect: C) Contractul observabil al tipului de bază.

## 172. Care modificare în subtip amenință LSP?

A) Acceptă toate intrările permise de bază.
B) Face modulul de nivel înalt dependent de detalii concrete.
C) Oferă un rezultat cel puțin la fel de puternic.
D) Impune precondiții mai stricte decât tipul de bază. **[CORECT]**

Raspuns corect: D) Impune precondiții mai stricte decât tipul de bază.

## 173. De ce un subtip care aruncă NotSupportedException pentru o operație promisă de bază este suspect?

A) Nu mai poate substitui baza pentru toate utilizările contractului. **[CORECT]**
B) Întărește precondițiile în subtip față de baza sa, fără să păstreze complet contractul tipului de bază.
C) Înlocuiește contractul cu verificări repetate de tip concret.
D) Promite operații pe care unele derivate nu le suportă, păstrând dependența de implementări concrete.

Raspuns corect: A) Nu mai poate substitui baza pentru toate utilizările contractului.

## 174. Ce alternativă poate evita o ierarhie care încalcă LSP?

A) Mai multe if-uri după tipul concret în fiecare client, fără să păstreze complet contractul tipului de bază.
B) Compoziție sau contracte mai precise pentru capabilități diferite. **[CORECT]**
C) O singură interfață cu toate operațiile posibile, dar forțând clientul să cunoască detalii inutile.
D) Grupează capabilități diferite într-o singură interfață mare.

Raspuns corect: B) Compoziție sau contracte mai precise pentru capabilități diferite.

## 175. Ce problemă are o interfață IMachine cu Print, Scan și Fax pentru o imprimantă simplă?

A) Forțează clienții să implementeze metode nefolosite, dar forțând clientul să cunoască detalii inutile.
B) Face modulul de nivel înalt dependent de detalii concrete, fără să păstreze complet contractul tipului de bază.
C) Clientul este forțat să implementeze operații pe care nu le suportă. **[CORECT]**
D) Întărește precondițiile în subtip față de baza sa, păstrând dependența de implementări concrete.

Raspuns corect: C) Clientul este forțat să implementeze operații pe care nu le suportă.

## 176. Cum se aplică ISP în cazul imprimantelor?

A) Se păstrează o interfață unică și metodele inutile returnează null, fără să păstreze complet contractul tipului de bază.
B) Înlocuiește contractul cu verificări repetate de tip concret, păstrând dependența de implementări concrete.
C) Grupează capabilități diferite într-o singură interfață mare, dar forțând clientul să cunoască detalii inutile.
D) Se separă IPrinter, IScanner și IFax, iar fiecare clasă implementează doar ce poate. **[CORECT]**

Raspuns corect: D) Se separă IPrinter, IScanner și IFax, iar fiecare clasă implementează doar ce poate.

## 177. Cui trebuie adaptată o interfață conform ISP?

A) Nevoilor clientului care o consumă. **[CORECT]**
B) Numărului maxim de metode posibile.
C) Forțează clienții să implementeze metode nefolosite.
D) Numele framework-ului folosit.

Raspuns corect: A) Nevoilor clientului care o consumă.

## 178. Care design respectă DIP pentru trimiterea notificărilor?

A) NotificationService creează direct new SmtpClient în fiecare metodă.
B) NotificationService depinde de IMessageSender, injectat din exterior. **[CORECT]**
C) Face modulul de nivel înalt dependent de detalii concrete, păstrând dependența de implementări concrete.
D) Clasa de nivel înalt moștenește implementarea bazei de date, dar forțând clientul să cunoască detalii inutile.

Raspuns corect: B) NotificationService depinde de IMessageSender, injectat din exterior.

## 179. Care este diferența dintre DIP și dependency injection?

A) Înlocuiește contractul cu verificări repetate de tip concret, dar forțând clientul să cunoască detalii inutile.
B) Promite operații pe care unele derivate nu le suportă, fără să păstreze complet contractul tipului de bază.
C) DIP este principiul; injection este o tehnică de furnizare a dependențelor. **[CORECT]**
D) Dependency injection cere întotdeauna un container extern, păstrând dependența de implementări concrete.

Raspuns corect: C) DIP este principiul; injection este o tehnică de furnizare a dependențelor.

## 180. De ce constructor injection ajută testarea?

A) Constructorul elimină toate dependențele.
B) Grupează capabilități diferite într-o singură interfață mare.
C) Forțează clienții să implementeze metode nefolosite.
D) Testul poate furniza o implementare fake a abstracției. **[CORECT]**

Raspuns corect: D) Testul poate furniza o implementare fake a abstracției.

## 181. Ce asigură pattern-ul Singleton?

A) O clasă poate avea oricâte instanțe partajate.
B) Este creată și reutilizată o singură instanță a clasei. **[CORECT]**
C) Clasa poate fi moștenită de mai multe ori.
D) Toate metodele devin statice.

Raspuns corect: B) Este creată și reutilizată o singură instanță a clasei.

## 182. Care este cea mai sigură variantă dintre cele prezentate pentru un Singleton thread-safe?

A) Constructor public și variabilă statică.
B) Instanță `static readonly` și constructor privat. **[CORECT]**
C) Clasă parțială.
D) Utilizarea atributului `sealed`.

Raspuns corect: B) Instanță `static readonly` și constructor privat.

## 183. Care este scopul principal al pattern-ului Facade?

A) Creează obiecte complexe.
B) Optimizează automat performanța.
C) Oferă o interfață simplificată către un subsistem complex. **[CORECT]**
D) Protejează date sensibile.

Raspuns corect: C) Oferă o interfață simplificată către un subsistem complex.

## 184. Ce diferențiază Singleton de Facade?

A) Singleton este întotdeauna thread-safe.
B) Facade folosește obligatoriu metode statice.
C) Singleton controlează instanțierea; Facade simplifică interfața unui subsistem. **[CORECT]**
D) Ambele fac același lucru.

Raspuns corect: C) Singleton controlează instanțierea; Facade simplifică interfața unui subsistem.

## 185. Ce descrie cel mai bine rolul unei clase Facade?

A) O clasă abstractă pentru toate serviciile.
B) O clasă de configurare a serviciilor.
C) O interfață unificată care coordonează apeluri către mai multe clase interne. **[CORECT]**
D) O metodă statică pentru apeluri directe.

Raspuns corect: C) O interfață unificată care coordonează apeluri către mai multe clase interne.

## 186. De ce constructorul unui Singleton este privat?

A) Permite moștenirea multiplă, fără să rezolve intenția principală a pattern-ului.
B) Împiedică instanțierea directă din exterior. **[CORECT]**
C) Face toate metodele asincrone, fără să rezolve intenția principală a pattern-ului.
D) Înregistrează automat clasa în DI.

Raspuns corect: B) Împiedică instanțierea directă din exterior.

## 187. Care este un dezavantaj frecvent al Singleton-ului folosit excesiv?

A) Nu poate conține nicio metodă.
B) Creează obligatoriu câte o instanță pe thread, fără să distingă instanțierea de simplificarea interfeței.
C) Introduce stare globală și dependențe ascunse greu de testat. **[CORECT]**
D) Nu poate fi utilizat în C#, dar fără să rezolve scopul principal al pattern-ului.

Raspuns corect: C) Introduce stare globală și dependențe ascunse greu de testat.

## 188. Ce oferă Lazy<T> într-o implementare Singleton?

A) Crearea unei instanțe noi la fiecare acces, dar fără să rezolve scopul principal al pattern-ului.
B) Controlează instanțierea în loc să simplifice interfața, păstrând cuplarea cu detaliile interne ale subsistemului.
C) Simplifică apelurile, dar nu gestionează unicitatea instanței, fără să distingă instanțierea de simplificarea interfeței.
D) Inițializare la prima utilizare și suport sigur pentru concurență în configurația implicită. **[CORECT]**

Raspuns corect: D) Inițializare la prima utilizare și suport sigur pentru concurență în configurația implicită.

## 189. Facade trebuie să ascundă complet toate clasele subsistemului?

A) Nu; oferă un punct simplu de acces, fără a interzice utilizarea avansată directă. **[CORECT]**
B) Da, clasele interne trebuie șterse, păstrând cuplarea cu detaliile interne ale subsistemului.
C) Da, toate clasele devin private la nivel de assembly.
D) Nu, deoarece Facade nu poate apela alte clase, fără să distingă instanțierea de simplificarea interfeței.

Raspuns corect: A) Nu; oferă un punct simplu de acces, fără a interzice utilizarea avansată directă.

## 190. Cum diferă Facade de Adapter?

A) Facade creează obiecte, Adapter controlează o singură instanță, fără să distingă instanțierea de simplificarea interfeței.
B) Facade simplifică un subsistem; Adapter convertește o interfață într-alta așteptată. **[CORECT]**
C) Ambele rezolvă exclusiv concurența, dar fără să rezolve scopul principal al pattern-ului.
D) Adapter este numai o metodă statică, păstrând cuplarea cu detaliile interne ale subsistemului.

Raspuns corect: B) Facade simplifică un subsistem; Adapter convertește o interfață într-alta așteptată.
