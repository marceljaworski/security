# Security with bcrypt 🔒🔑

This assignment will allow you to play around with the `bcrypt` package by building a CLI application

## What you will be doing

You will be working with `bcrypt` using just the CLI (no server required!). 

You will be expected to write your solution in 2 files;

1. `register.js` - will generate a password hash and save it to the filesystem
2. `login.js` - will compare a password hash with the hash from the filesystem

## Tasks

### Task 1 - getting bcrypt

1. Initialise `npm`

2. Install the [bcrypt](https://www.npmjs.com/package/bcrypt) npm package 

3. Import `bcrypt` into `register.js`

### Task 2 - writing a hashing helper function (register.js)

1. Open the file `register.js`
   
2. Write a function which takes a **string** as an argument, and uses `bcrypt.hash()` to hash and **return** the result

   > Hint: For now, use `10` as the number of salt rounds
   
   > Hint: Since `bcrypt.hash()` returns a promise, so you might want to use `async / await` or use `.then()`
   
3. Run your function with the `userInput` variable as a parameter. This variable can be populated from your terminal, for example:

   ```bash
   node register.js kittens
   ```

4. Test your function by using `console.log()` to display the output

### Task 3 - playing with salt

Play around with the salt rounds value. Use small and large numbers.

- How long does the program take to run?
- What would an ideal salt rounds number be?

### Task 4 - saving the hashed output to file

We would like to store the hash we generated in the previous function into a file, so we can read it again

1. In the file `register.js`, import the node.js filesystem library

   > Hint: `import { promises as fs } from 'fs';` for the promise version of the library
   
2. Use the node.js filesystem `writeFile()` method to write the hash to a file

### Task 5 - writing a compare helper function (login.js)

1. Open the file `login.js`

2. Import `bcrypt` and the node js filesystem library (we will use it to read the file)

3. Write a function which takes a **string** as an argument

4. Use the node.js filesystem `readFile()` method to read the hash you stored in the file you created when you ran `register.js`
   
5. Use `bcrypt.compare()` to compare the `userInput` variable with the hash from the file you just read
   
6. `bcrypt.compare()` returns either `true` or `false`
    - If `true`, display a message to the user stating that the passwords match
    - If `false`, display a message to the user stating that the passwords do not match

7. Test your code by running `node login.js {password}` - where `{password}` is the password you wish to test against the hash

# Sicherheit mit bcrypt 🔒🔑

Diese Aufgabe ermöglicht es Ihnen, mit dem `bcrypt`-Paket herumzuspielen, indem Sie eine CLI-Anwendung erstellen

## Was Sie tun werden

Sie werden mit `bcrypt` nur mit der CLI arbeiten (kein Server erforderlich!). 

Es wird von Ihnen erwartet, dass Sie Ihre Lösung in 2 Dateien schreiben;

1. `register.js` - erzeugt einen Passwort-Hash und speichert ihn im Dateisystem
2. `login.js` - vergleicht einen Passwort-Hash mit dem Hash aus dem Dateisystem

## Aufgaben

### Aufgabe 1 - bcrypt holen

1. Initialisiere `npm`

2. Installieren Sie das [bcrypt](https://www.npmjs.com/package/bcrypt) npm-Paket 

3. Importieren Sie `bcrypt` in `register.js`.

### Aufgabe 2 - Schreiben einer Hashing-Hilfsfunktion (register.js)

1. Öffnen Sie die Datei `register.js`.
   
2. Schreiben Sie eine Funktion, die eine **Zeichenkette** als Argument nimmt und `bcrypt.hash()` verwendet, um das Ergebnis zu hashen und **zurückzugeben**.

   > Tipp: Verwenden Sie vorerst `10` als Anzahl der Salzrunden.
   
   > Hinweis: Da `bcrypt.hash()` ein Versprechen zurückgibt, sollten Sie vielleicht `async / await` oder `.then()` verwenden.
   
3. Führen Sie Ihre Funktion mit der Variable "userInput" als Parameter aus. Diese Variable kann z.B. von Ihrem Terminal aus eingegeben werden:

   ```bash
   node register.js kittens
   ```

4. Testen Sie Ihre Funktion, indem Sie `console.log()` verwenden, um die Ausgabe anzuzeigen

### Aufgabe 3 - Spielen mit Salt

Spielen Sie mit dem Wert für die Salt-Runde herum. Verwenden Sie kleine und große Zahlen.

- Wie lange braucht das Programm, um zu laufen?
- Was wäre die ideale Zahl für Salt-Runden?

### Aufgabe 4 - Speichern der Hash-Ausgabe in einer Datei

Wir möchten den Hash, den wir in der vorherigen Funktion erzeugt haben, in einer Datei speichern, damit wir ihn wieder lesen können

1. Importieren Sie in der Datei `register.js` die node.js-Dateisystembibliothek

   > Tipp: `import { promises as fs } from 'fs';` für die promise-Version der Bibliothek
   
2. Verwenden Sie die node.js-Dateisystem-Methode `writeFile()`, um den Hash in eine Datei zu schreiben

### Aufgabe 5 - Schreiben einer Vergleichs-Hilfsfunktion (login.js)

1. Öffnen Sie die Datei `login.js`.

2. Importiere `bcrypt` und die node js filesystem library (wir werden sie benutzen, um die Datei zu lesen)

3. Schreibe eine Funktion, die einen **String** als Argument nimmt

4. Benutze die node.js filesystem `readFile()` Methode, um den Hash zu lesen, den du in der Datei gespeichert hast, die du beim Ausführen von `register.js` erstellt hast
   
5. Verwende `bcrypt.compare()`, um die Variable `userInput` mit dem Hash aus der Datei zu vergleichen, die du gerade gelesen hast
   
6. bcrypt.compare()` gibt entweder `true` oder `false` zurück
    - Wenn `true`, wird dem Benutzer eine Nachricht angezeigt, die besagt, dass die Passwörter übereinstimmen
    - Wenn `false`, wird eine Meldung an den Benutzer ausgegeben, dass die Passwörter nicht übereinstimmen.

7. Testen Sie Ihren Code, indem Sie `node login.js {Passwort}` ausführen - wobei `{Passwort}` das Passwort ist, das Sie mit dem Hash abgleichen wollen

## Bonus


Erstelle die notwendigen register and login Routen in einem neuen auth Router
Erstelle ein neues Model für User mit den Feldern email und password
Validiere das Model ausreichend
Erstelle den Controller, der Registrierungsanfragen verarbeiten, indem ein neuer Nutzer angelegt wird und das Passwort gehashed gespeichert wird
Erstelle den Controller, der Anmeldeanfragen verarbeitet, indem du Benutzername und Passwort überprüfst
Betreibe Error Handling, wenn fehlerhafte Daten eingegeben werden
Teste deine API mit eine Tool wie Thunderclient
BONUS: Baue ein Frontend (plain HTML reicht) mit dem man sich registrieren und anmelden kann. Mach es schön :entspannt:
