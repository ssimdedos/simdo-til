const { Router } = require("express");
const axios = require("axios");
const router = Router();

const nclientKey = "u86j4ripEt8LRfPGzQ8";
const nclientSecret = "ftZjkkRNMR";
const ncustomerKey = "YbX2HuSlsC9uVJW6NMRMj";
const nchanId = "TDZSUHBoVGRFS2l";

const kclientId = "DFECF5FF3A95717B74FF";
const kclientSecret = "09665763EDEF32F503D0";
const ksecretKey = "DEVE7D0F7C62736441B69DAEBEF21FB695D27293";
// const ksecretKey = "PRD8D01DD608D08A70B3AF756244E04B59F0CC3A";

router.post("/naverpay", (req, res) => {
  axios
    .post(
      `https://dev.apis.naver.com/${nclientKey}/naverpay/payments/v2/reserve`,
      {
        modelVersion: "2",
        merchantUserKey: ncustomerKey,
        merchantPayKey: "12341233",
        productName: "상품명",
        productCount: 10,
        totalPayAmount: 1000,
        returnUrl: "http://localhost:3001/#/geul",
        taxScopeAmount: 1000,
        taxExScopeAmount: 0,
        purchaserName: "구매자이름",
        purchaserBirthday: "20000101",
        productItems: [
          {
            categoryType: "BOOK",
            categoryId: "GENERAL",
            uid: "107922211",
            name: "한국사",
            payReferrer: "NAVER_BOOK",
            count: 10,
          },
          {
            categoryType: "MUSIC",
            categoryId: "CD",
            uid: "299911002",
            name: "러블리즈",
            payReferrer: "NAVER_BOOK",
            count: 1,
          },
        ],
      },
      {
        headers: {
          "X-Naver-Client-Id": nclientKey,
          "X-Naver-Client-Secret": nclientSecret,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log("성공");
      console.log(res);
    });
  res.send({ msg: "test" });
});

router.post("/kakaopay", (req, res)=> {
  axios.post(
    "https://open-api.kakaopay.com/online/v1/payment/ready",
    {
      "cid": "TC0ONETIME",
      "partner_order_id": "123456",
      "partner_user_id": "sjk1120",
      "item_name": "초코파이",
      "quantity": "1",
      "total_amount": "2200",
      "vat_amount": "200",
      "tax_free_amount": "0",
      "approval_url": "http://localhost:3001/#/success",
      "fail_url": "http://localhost:3001/#/fail",
      "cancel_url": "http://localhost:3001/#/cancel"
    },
    {
      headers: {
        "Authorization" : "SECRET_KEY "+ksecretKey,
        "Content-Type" : "application/json",
      },
    }
  )
  .then((payres) => {
    console.log("성공");
    // console.log(payres.data);
    const tid = payres.data.tid;
    const url = payres.data.next_redirect_pc_url;

    res.send({msg:"성공", tid, url});
  });
});

module.exports = router;
