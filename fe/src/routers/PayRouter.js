import { Routes, Route } from "react-router-dom";
import KpaySuccess from "../components/kpay/success";
import KpayFail from "../components/kpay/fail";
import KpayCancel from "../components/kpay/cancel";

const HeaderRouter = () => {
  return(
    <Routes>
      <Route path='/success' element={<KpaySuccess />} />
      <Route path='/fail' element={<KpayFail />} />
      <Route path='/cancel' element={<KpayCancel />} />
    </Routes>
  );
};

export default HeaderRouter;