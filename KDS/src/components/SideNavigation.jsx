import logoImage from '../assets/image.png';
import '../styles/SideNavigation.css';

function SideNavigation() {
  return (
    <nav className="side-navigation">
      <div>
        <img className="logo-image" src={logoImage} alt="logo" />
      </div>
      <div className="side-navigation-button-container">
        <div className="side-navigation-button">
          <span className="side-navigation-button-text">요리 중인 주문</span>
        </div>
        <div className="side-navigation-button">
          <span className="side-navigation-button-text">완료된 주문</span>
        </div>
      </div>
    </nav>
  );
}
export default SideNavigation;
