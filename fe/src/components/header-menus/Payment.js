import { React } from "react";
import "../../assets/css/Main.css";
import "../../assets/css/Payment.css";
import axios from 'axios';



const Payment = () => {
  const npayCreate = ()=> {
    axios.post('api/naverpay',
      {
        'msg':'test'
      }
    ).then((res)=> {
      console.log(res.data.msg);
    });
  };
  
  const kpayCreate = ()=> {
    axios.post('api/kakaopay', 
      {'msg': 'test'}
    ).then((res)=> {
      // console.log(res.data.msg);
      // console.log(res.data.tid);
      // console.log(res.data.url);
      return window.open(res.data.url);
    });
  };

  return (
    <div className="main-container">
      <div id="btn-container" >
      <input type="button" id="naverPayBtn" value="네이버페이 결제 버튼" onClick={npayCreate} />
      <br />
      <input type="button" id="kakaoPayBtn" value="카카오페이 결제 버튼" onClick={kpayCreate} />
      </div>
    </div>
  );
};

export default Payment;
