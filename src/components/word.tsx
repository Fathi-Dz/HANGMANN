
interface WordProps {
  word: string;
  selectedLetters: string[];
  isLoser: boolean;
  isWinner: boolean;
}

function Word({
  word,
  selectedLetters,
  isLoser,
  isWinner,
}: WordProps) {
  return (
    <div className="flex gap-3">
      {word.split("").map((letter, index) => {
        const isGuessed = selectedLetters.includes(letter);
        const isVisible = isGuessed || isLoser || isWinner;

        return (
          <span
            key={index}
            className={`w-12 border-b-4 text-center text-5xl font-bold ${
              isWinner
                ? "border-green-500 text-green-500"
                : isLoser
                  ? "border-black text-black"
                  : isGuessed
                    ? "border-green-300 text-green-300"
                    : "border-black text-transparent"
            }`}
          >
            <span className={isVisible ? "visible" : "invisible"}>
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default Word;
