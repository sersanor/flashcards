import json

flashcards = []

# Open the text file
with open("flashcards.txt") as f:
    for line in f:
        # Split the line into question and answer
        question, answer = line.strip().split(" = ")
        flashcards.append({"question": question, "answer": answer})

# Write the flashcards to a JSON file
with open("flashcards.json", "w") as f:
    json.dump(flashcards, f)
