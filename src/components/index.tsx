
import { useEffect, useState } from "react";
import Draw from "./draw";
import Word from "./word";
import Keyboard from "./keyboard";
import words from "../../wordList.json";

function Index() {
  const [currentWord] = useState(() => {
    return Math.floor(Math.random() * words.length);
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const word = words[currentWord];

  const incorrectLetters = selectedLetters.filter((letter) => {
    return !word.includes(letter);
  });

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = word.split("").every((letter) => {
    return selectedLetters.includes(letter);
  });

  const isGameOver = isLoser || isWinner;

  const addLetter = (letter: string) => {
    if (isGameOver || selectedLetters.includes(letter)) return;

    setSelectedLetters((prev) => [...prev, letter]);
  };

  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const letter = e.key.toUpperCase();

      if (!/^[A-Z]$/.test(letter)) return;
      if (isGameOver) return;

      setSelectedLetters((prev) => {
        if (prev.includes(letter)) return prev;
        return [...prev, letter];
      });
    };

    window.addEventListener("keydown", onKeyboardPress);

    return () => {
      window.removeEventListener("keydown", onKeyboardPress);
    };
  }, [isGameOver]);


return (
  <main className="flex h-dvh items-center justify-center overflow-hidden bg-slate-50 p-2">
    <section className="flex h-full w-full max-w-5xl flex-col items-center gap-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 sm:gap-3 sm:p-5">

      <header className="shrink-0 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
          Hangman Game
        </p>

        <h1 className="text-2xl font-black text-slate-800 sm:text-3xl">
          Guess the Word!
        </h1>

        <p className="text-xs text-slate-500">
          Tebak kata sebelum kesempatanmu habis.
        </p>
      </header>

      <div className="shrink-0">
        <div className="scale-[0.65] origin-center sm:scale-75">
          <Draw attempt={Math.min(incorrectLetters.length, 6)} />
        </div>
      </div>

      <p className={`shrink-0 text-center text-sm font-bold ${
        isLoser
          ? "text-red-500"
          : isWinner
            ? "text-green-600"
            : "text-slate-500"
      }`}>
        {isLoser
          ? "Nice try, refresh and try again!"
          : isWinner
            ? "You win, refresh and try again!"
            : "Choose a letter to reveal the word"}
      </p>

      <div className="shrink-0 max-w-full overflow-x-auto py-1">
        <Word
          word={word}
          selectedLetters={selectedLetters}
          isLoser={isLoser}
          isWinner={isWinner}
        />
      </div>

      <div className="shrink-0 pb-1">
        <Keyboard
          onKeyboardClick={addLetter}
          inactiveLetters={incorrectLetters}
          activeLetters={selectedLetters.filter((letter) =>
            word.includes(letter)
          )}
          disabled={isGameOver}
        />
      </div>

    </section>
  </main>
);

}

export default Index;
