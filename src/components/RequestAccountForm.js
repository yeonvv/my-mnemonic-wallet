// 지갑주소 생성 요청

import { useState } from "react";

export default function RequestAccount({ requestAccount }) {
  const [password, setPassword] = useState("");
  const [newMne, setNewMne] = useState("");

  const handleAccountClick = () => {
    requestAccount(newMne, password);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const changeMne = (event) => {
    setNewMne(event.target.value);
  };

  return (
    <fieldset>
      <legend>새 지갑 주소 생성</legend>
      <div>
        <textarea
          value={newMne}
          onChange={changeMne}
          placeholder="니모닉 코드 입력"
        ></textarea>
      </div>
      <div>
        <input
          value={password}
          onChange={changePassword}
          type="password"
          placeholder="임시 비밀번호 설정"
        />
      </div>
      <p>
        <button onClick={handleAccountClick}>지갑 생성 요청</button>
      </p>
    </fieldset>
  );
}
