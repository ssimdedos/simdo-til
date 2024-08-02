import { Routes, Route } from "react-router-dom";
import Trip from '../components/header-menus/TripMain';
import Geul from '../components/header-menus/GeulMain';
import Movement from "../components/header-menus/MovementMain";
import Payment from "../components/header-menus/Payment";

const HeaderRouter = () => {
  return(
    <Routes>
      <Route path='/trip' element={<Trip />} />
      <Route path='/ejercicio' element={<Movement />} />
      <Route path='/geul' element={<Geul />} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
  );
};

export default HeaderRouter;