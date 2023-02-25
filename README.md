# Flashcards

## Description
This is a personal project to build a FREE standalone solution to use flashcards in order to memorize or to help study any topic using questions and answers flashcards.

## Demo
- [Flashcards (flashcards embed in JS)](https://sersanor.github.io/flashcards)
- [English irregular verbs Flashcards](https://sersanor.github.io/flashcards?flashcards=https://raw.githubusercontent.com/sersanor/flashcards/main/collections/english-irregular-verbs.json)

## Features
- Standalone solution to train with flashcards.
- Flashcard collections with JSON structure.
- Flip button to switch between answers and questions.
- Shuffle button to randomize the flashcards.
- Load button to load a JSON flashcard collection remotely.
- Load a JSON flashcard collection using the remote url (query param "flashcards").
	- e.g. xxx/index.html?flashcards=<URL_TO_JSON_FLASHCARD_COLLECTION>
- Customize the UI style using CSS.
- Python script to generate collections

## Collection Generation
1. Fill the "flashcard.txt" with your questions and answers folling this structure:

```
    question1 = answer1
    question2 = answer2
    ...
    questionN = answerN
```
2. Execute the Python script.

## Changelog
- 25/02/2023:
	- Python script for collection generation.
- 29/01/2023: 
	- Load flashcards from url.
	- Load flashcards using query param url.
- 28/01/2023: 
	- Initial release.

## Roadmap
- Score implementation
- Pictures support
