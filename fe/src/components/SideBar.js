import { Link } from 'react-router-dom';
import '../assets/css/SideBar.css';

const SideBar = () => {
  return(
    <div className="sidebar-container">
      <h5>menus</h5>
      <div className="menu-container" >
        <div className="menu-content" ><Link to='accountmanage' ><h5>회원관리</h5></Link></div>
        <div className="menu-content" ><Link to='addcontent' ><h5>콘텐츠 등록</h5></Link></div>
        <div className="menu-content" ><Link to='contents' ><h5>콘텐츠 관리</h5></Link></div>
        <div className="menu-content" ><Link to='setting' ><h5>환경설정</h5></Link></div>
      </div>
    </div>
  );
};

export default SideBar;