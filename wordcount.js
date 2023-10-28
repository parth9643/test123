import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    const words = inputText.match(/\b\w+\b/g);
    const newWordCount = words ? words.length : 0;
    const newCharCount = inputText.length;

    setText(inputText);
    setWordCount(newWordCount);
    setCharCount(newCharCount);
  };

  const handleCharLimitChange = (event) => {
    const limit = parseInt(event.target.value, 10);
    setCharLimit(limit);
  };

  const handleFontSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setFontSize(newSize);
  };

  return (
    <div>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={handleTextChange}
        style={{ fontSize: `${fontSize}px` }}
      />
      <div id="word-counter">Words: {wordCount}</div>
      <div id="char-counter">Characters: {charCount}</div>
      <label htmlFor="char-limit-input">Character Limit:</label>
      <input
        type="number"
        id="char-limit-input"
        value={charLimit}
        onChange={handleCharLimitChange}
      />
      <label htmlFor="fontSize-input">Font Size:</label>
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}

export default App;
