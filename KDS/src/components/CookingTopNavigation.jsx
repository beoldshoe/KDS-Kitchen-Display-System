import TopNavigationButton from './TopNavigationButton';
import '../styles/CookingTopNavigation.css';
import Search from './search';

function CookingTopNavigation() {
  return (
    <nav className="cooking-top-navigation">
      <TopNavigationButton />
      <Search />
    </nav>
  );
}
export default CookingTopNavigation;
