import "../../assets/css/Main.css";
import "../../assets/css/sidebar/AccountManage.css";

const user_data = [
  {
    순번: 1,
    상태: "정상",
    등급: "파트너",
    이름: "김철수",
    로그인: "구글",
    "인증 이메일": "인증 완료",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 2534890,
    "누적 마일리지": 5237481,
    "가입 경로": "네이버 검색",
    가입일: "2024.01.15",
  },
  {
    순번: 2,
    상태: "비정상",
    등급: "파트너",
    이름: "박영희",
    로그인: "구글",
    "인증 이메일": "미인증",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 1278432,
    "누적 마일리지": 2847321,
    "가입 경로": "네이버 검색",
    가입일: "2024.02.17",
  },
  {
    순번: 3,
    상태: "정상",
    등급: "파트너",
    이름: "이민호",
    로그인: "구글",
    "인증 이메일": "인증 완료",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 3485702,
    "누적 마일리지": 4732810,
    "가입 경로": "네이버 검색",
    가입일: "2024.03.22",
  },
  {
    순번: 4,
    상태: "정상",
    등급: "파트너",
    이름: "최지훈",
    로그인: "구글",
    "인증 이메일": "미인증",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 4839201,
    "누적 마일리지": 5638192,
    "가입 경로": "네이버 검색",
    가입일: "2024.04.25",
  },
  {
    순번: 5,
    상태: "비정상",
    등급: "파트너",
    이름: "강서준",
    로그인: "구글",
    "인증 이메일": "인증 완료",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 5782034,
    "누적 마일리지": 7893012,
    "가입 경로": "네이버 검색",
    가입일: "2024.05.27",
  },
  {
    순번: 6,
    상태: "정상",
    등급: "파트너",
    이름: "윤아름",
    로그인: "구글",
    "인증 이메일": "미인증",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 1820394,
    "누적 마일리지": 3041829,
    "가입 경로": "네이버 검색",
    가입일: "2024.06.30",
  },
  {
    순번: 7,
    상태: "정상",
    등급: "파트너",
    이름: "김하늘",
    로그인: "구글",
    "인증 이메일": "인증 완료",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 2349820,
    "누적 마일리지": 3281940,
    "가입 경로": "네이버 검색",
    가입일: "2024.07.04",
  },
  {
    순번: 8,
    상태: "비정상",
    등급: "파트너",
    이름: "오세훈",
    로그인: "구글",
    "인증 이메일": "미인증",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 1492038,
    "누적 마일리지": 2938401,
    "가입 경로": "네이버 검색",
    가입일: "2024.08.07",
  },
  {
    순번: 9,
    상태: "정상",
    등급: "파트너",
    이름: "정수현",
    로그인: "구글",
    "인증 이메일": "인증 완료",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 5892034,
    "누적 마일리지": 7039482,
    "가입 경로": "네이버 검색",
    가입일: "2024.09.10",
  },
  {
    순번: 10,
    상태: "비정상",
    등급: "파트너",
    이름: "서윤아",
    로그인: "구글",
    "인증 이메일": "미인증",
    연락처: "010-1234-5678",
    회사명: "심도",
    "보유 마일리지": 3829402,
    "누적 마일리지": 4829031,
    "가입 경로": "네이버 검색",
    가입일: "2024.10.14",
  },
];
const keys = Object.keys(user_data[0]);

const AccountManage = () => {
  return (
    <div className="main-container">
      <div className="accountmanage-container">
        <h2>회원 관리</h2>
        <div className="user-search-container">
          <div className="search-form">
            <label>
              <span>이름: </span>
              <input className="user-search-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>이메일: </span>
              <input className="user-search-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>연락처: </span>
              <input className="user-search-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>회원등급: </span>
              <input className="user-search-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>회원상태: </span>
              <input className="user-search-input" type="text"></input>
              <br />
            </label>
          </div>
          <hr />
          <div className="btn-container">
            <input type="button" value="초기화" />
            <input type="button" value="검색" />
          </div>
        </div>
        <div>

        </div>
        <div className="users-container">
          <table className="user-table">
            <tr className="thead">
              {keys.map((v, i) => {
                return <td key={`user-column-${i + 1}`}>{v}</td>;
              })}
            </tr>
            {user_data.map((data, i) => (
              <tr key={`user-tr-${i + 1}`}>
                {keys.map((key, j) => (
                  <td key={`${data["순번"]}-td-${j + 1}`}>{data[key]}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="sorting-container"></div>
      </div>
    </div>
  );
};

export default AccountManage;
