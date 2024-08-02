import { Routes, Route } from "react-router-dom";
import AccountManage from "../components/side-menus/AccountManage";
import AddContent from "../components/side-menus/AddContent";
import Contents from "../components/side-menus/Contents";
import Setting from "../components/side-menus/Settings";


const SideBarRouter = () => {
  return(
    <Routes>
      <Route path='/accountmanage' element={<AccountManage />} />
      <Route path='/addcontent' element={<AddContent />} />
      <Route path='/contents' element={<Contents />} />
      <Route path='/setting' element={<Setting />} />
    </Routes>
  );
};

export default SideBarRouter;