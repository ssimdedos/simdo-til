import "../../assets/css/Main.css";

const AddContent = () => {
  return (
    <div className="main-container">
      <div className="content-add-container">
        <h2>아티클 등록</h2>
        <div className="content-add-container">
          <div className="add-form">
            <label>
              <span>담당자 </span>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>분류설정 </span>
              <input className="content-add-input" type="text"></input>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>제목 </span>
              <input className="content-add-input" type="text"></input>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>부제목 </span>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>썸네일 </span>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>링크 </span>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>관리자 메모 </span>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
            <label>
              <span>SEO </span>
              <input className="content-add-input" type="text"></input>
              <br />
            </label>
          </div>
          <div className="btn-container">
            <input type="button" value="삭제" />
            <input type="button" value="등록" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
