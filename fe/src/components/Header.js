import { Link } from 'react-router-dom';
import head from '../assets/imgs/head.png';
import '../assets/css/Header.css';

 const Header = () => {
  return(
    <div className='header-container'>
      <div className='header-1-container' >
        <div className='header-logo-container'>
          <Link to='/' >
            <img alt="로고" src={head} height={70} />
          </Link>
        </div>
        <div className='google-search-div'>
          <input className='google-search-input' type='text' placeholder='🔍︎          구글에서 검색하기' ></input>
        </div>
        <div className='header-menu-container' >
          <table>
            <tr>
              <td><Link to='trip' >여행</Link></td>
              <td><Link to='ejercicio' >운동</Link></td>
              <td><Link to='geul' >글</Link></td>
              <td><Link to='payment' >결제</Link></td>
            </tr>
          </table>
        </div>
      </div>
      <div className='header-title-container' >
        <h2>SimDo</h2>
      </div>
    </div>
  );
};

export default Header;