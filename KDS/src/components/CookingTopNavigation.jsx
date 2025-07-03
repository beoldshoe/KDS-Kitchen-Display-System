// CookingTopNavigation.jsx
// 상단 네비게이션 바를 렌더링하는 컴포넌트입니다.
// TopNavigationButton(카테고리 버튼)과 Search(검색창)를 포함합니다.
// props로 category, setCategory를 받아 버튼 상태를 제어할 수 있습니다.

import TopNavigationButton from './TopNavigationButton';
import '../styles/CookingTopNavigation.css';
import Search from './search';

function CookingTopNavigation({ category, setCategory }) {
  return (
    <nav className="cooking-top-navigation">
      <TopNavigationButton category={category} setCategory={setCategory} />
      <Search />
    </nav>
  );
}
export default CookingTopNavigation;
