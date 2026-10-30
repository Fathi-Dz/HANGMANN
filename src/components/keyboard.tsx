
import clsx from "clsx";

const rows = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM",
];

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled: boolean;
}

function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  disabled,
}: KeyboardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`flex justify-center gap-1.5 ${
            index === 1 ? "ml-5" : ""
          }`}
        >
          {row.split("").map((letter) => (
            <button
              key={letter}
              disabled={
                disabled ||
                inactiveLetters.includes(letter) ||
                activeLetters.includes(letter)
              }
              onClick={() => onKeyboardClick(letter)}
              className={clsx(
                "h-9 w-8 rounded-md border-2 text-sm font-bold transition sm:h-10 sm:w-10 sm:text-base",
                inactiveLetters.includes(letter)
                  ? "border-red-400 bg-red-200 text-red-700"
                  : activeLetters.includes(letter)
                    ? "border-green-400 bg-green-200 text-green-700"
                    : "border-slate-300 bg-white text-slate-700 hover:border-green-400",
                disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
