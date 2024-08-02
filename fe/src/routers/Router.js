import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../components/Main';
import Header from '../components/Header';

import HeaderRouter from './HeaderRouter';
import '../assets/css/App.css'
import SideBar from '../components/SideBar';
import SideBarRouter from './SideBarRouter';
import PayRouter from './PayRouter';

const AppRouter = () => {
  return (
    <Router>
        <Header />
        <div className='layout'>
          <SideBar />
          <HeaderRouter />
          <SideBarRouter />
          <PayRouter />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </div>
    </Router>
  );
};

export default AppRouter;