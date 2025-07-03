// CookingTopNavigation.jsx
// 상단 네비게이션 바를 렌더링하는 컴포넌트입니다.
// TopNavigationButton(카테고리 버튼)과 Search(검색창)를 포함합니다.
// props로 category, setCategory를 받아 버튼 상태를 제어할 수 있습니다.

import '../styles/CookingTopNavigation.css';
import Search from './search';

function CookingTopNavigation() {
  return (
    <nav className="cooking-top-navigation">
      <Search />
    </nav>
  );
}
export default CookingTopNavigation;
