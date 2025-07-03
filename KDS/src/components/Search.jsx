// Search.jsx
// 주문번호 검색 입력 및 키패드를 제공하는 컴포넌트입니다.
// 입력값이 바뀔 때 setSearchValue로 상위 컴포넌트에 값을 전달합니다.
// (props: setSearchValue)

import { useState } from 'react';
import '../styles/Search.css';

function Search() {
  const [isKeypadOpen, setIsKeypadOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    setIsKeypadOpen(!isKeypadOpen);
  };

  const handleNumberClick = (number) => {
    setInputValue((prev) => prev + number);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    console.log('입력된 숫자:', inputValue);
    setIsKeypadOpen(false);
    setInputValue('');
  };

  return (
    <div className="search-wrapper">
      <div className="search-container" onClick={handleSearchClick}>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={inputValue}
          readOnly
        />
        <span className="search-icon">🔍</span>
      </div>

      {isKeypadOpen && (
        <div className="keypad-dropdown">
          <div className="keypad">
            <div className="keypad-display">
              <input
                type="text"
                value={inputValue}
                readOnly
                className="keypad-input"
                placeholder="숫자를 입력하세요"
              />
            </div>
            <div className="keypad-buttons">
              <button
                onClick={() => handleNumberClick('1')}
                className="keypad-btn"
              >
                1
              </button>
              <button
                onClick={() => handleNumberClick('2')}
                className="keypad-btn"
              >
                2
              </button>
              <button
                onClick={() => handleNumberClick('3')}
                className="keypad-btn"
              >
                3
              </button>
              <button
                onClick={() => handleNumberClick('4')}
                className="keypad-btn"
              >
                4
              </button>
              <button
                onClick={() => handleNumberClick('5')}
                className="keypad-btn"
              >
                5
              </button>
              <button
                onClick={() => handleNumberClick('6')}
                className="keypad-btn"
              >
                6
              </button>
              <button
                onClick={() => handleNumberClick('7')}
                className="keypad-btn"
              >
                7
              </button>
              <button
                onClick={() => handleNumberClick('8')}
                className="keypad-btn"
              >
                8
              </button>
              <button
                onClick={() => handleNumberClick('9')}
                className="keypad-btn"
              >
                9
              </button>
              <button onClick={handleClear} className="keypad-btn clear">
                C
              </button>
              <button
                onClick={() => handleNumberClick('0')}
                className="keypad-btn"
              >
                0
              </button>
              <button onClick={handleDelete} className="keypad-btn delete">
                ←
              </button>
            </div>
            <div className="keypad-actions">
              <button onClick={handleSubmit} className="submit-btn">
                확인
              </button>
              <button
                onClick={() => setIsKeypadOpen(false)}
                className="cancel-btn"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
