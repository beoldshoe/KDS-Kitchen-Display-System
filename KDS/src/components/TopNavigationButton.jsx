import '../styles/TopNavigationButton.css';

function TopNavigationButton() {
  return (
    <div className="top-navigation-button-container">
      <div className="top-navigation-button">
        <span className="top-navigation-button-text">버거</span>
      </div>
      <div className="top-navigation-button">
        <span className="top-navigation-button-text">사이드</span>
      </div>
    </div>
  );
}

export default TopNavigationButton;
