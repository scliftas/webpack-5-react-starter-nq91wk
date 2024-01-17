import { useState } from "react";

export function App() {
  const [message, setMessage] = useState("");
  const [shiftKey, setShiftKey] = useState(0);
  const [direction, setDirection] = useState("forwards");

  const onMessageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const onShiftKeyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setShiftKey(parseInt(e.currentTarget.value) || 0);
  };

  const onDirectionChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newDirection = e.currentTarget.checked ? "backwards" : "forwards";
    setDirection(newDirection);
  };

  return (
    <div>
      <h1>The Bots Frontend coding challenge</h1>
      <p>
        For this challenge we would like you to create a{" "}
        <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caeser Cipher</a>.
        You will create an input, which will take any string and apply the
        cipher, then display the results below.
      </p>
      <p>
        In a Caeser cipher, you can specify the 'shift' and direction of the
        substitution. Bonus points if your solution allows these to be updated
        in the UI.
      </p>

      <h2>Getting started</h2>
      <ul>
        <li>Open a terminal and run `npm run start`</li>
        <li>A second terminal can be opened to run tests: `npm run test`</li>
      </ul>

      <h2>The rules</h2>
      <ul>
        <li>No libraries please</li>
        <li>The solution should come with unit tests</li>
        <li>All code should be typed</li>
        <li>Expected time should be 45mins</li>
      </ul>
      <p>
        Please save your results and send the link back to us when you are
        happy!
      </p>

      <section>
        <fieldset>
          <label>
            <p>Message:</p>
            <input value={message} onChange={onMessageChange} />
          </label>

          <label>
            <p>Shift Key:</p>
            <input value={shiftKey} onChange={onShiftKeyChange} />
          </label>

          <label>
            <p>Shift backwards:</p>
            <input
              type="checkbox"
              checked={direction === "backwards"}
              onChange={onDirectionChange}
            />
          </label>

          <p>Result: {caesarCipher(message, shiftKey, direction)}</p>
        </fieldset>
      </section>
    </div>
  );
}

const caesarCipher = (message: string, shiftKey: number, direction: string) => {
  const shiftCharacter = (char: string) => {
    const isAlphabetic = char.length === 1 && char.match(/[a-zA-Z]/i);

    if (!isAlphabetic) {
      return char;
    }

    const asciiChar = char.charCodeAt(0);
    let startCharacter = "a";

    if (asciiChar >= 65 && asciiChar <= 90) {
      startCharacter = "A";
    }

    let shiftedIndex = asciiChar - startCharacter.charCodeAt(0);

    if (direction === "forwards") {
      shiftedIndex += shiftKey;
    }

    if (direction === "backwards") {
      shiftedIndex -= shiftKey;
    }

    shiftedIndex = shiftedIndex % 26;

    if (shiftedIndex < 0) {
      shiftedIndex += 26;
    }

    return String.fromCharCode(shiftedIndex + startCharacter.charCodeAt(0));
  };

  return message.split("").map(shiftCharacter).join("");
};
