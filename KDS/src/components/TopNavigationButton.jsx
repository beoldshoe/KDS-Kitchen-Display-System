// TopNavigationButton.jsx
// 카테고리(버거/사이드) 버튼을 렌더링하는 컴포넌트입니다.
// 선택된 버튼을 강조하고, 클릭 시 setCategory로 카테고리 상태를 변경합니다.
// props: category(현재 선택), setCategory(변경 함수)

import '../styles/TopNavigationButton.css';

function TopNavigationButton({ category, setCategory }) {
  return (
    <div className="top-navigation-button-container">
      <div
        className={`top-navigation-button${
          category === 'burger' ? ' active' : ''
        }`}
        onClick={() => setCategory('burger')}
      >
        <span className="top-navigation-button-text">버거</span>
      </div>
      <div
        className={`top-navigation-button${
          category === 'side' ? ' active' : ''
        }`}
        onClick={() => setCategory('side')}
      >
        <span className="top-navigation-button-text">사이드</span>
      </div>
    </div>
  );
}

export default TopNavigationButton;
