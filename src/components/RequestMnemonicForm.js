// 니모닉 생성 요청

export default function RequestMnemonic({ requestMnemonic }) {
  const handelMnemonicClick = () => {
    requestMnemonic();
  };
  return (
    <fieldset>
      <legend>랜덤 니모닉 코드 생성</legend>
      <button onClick={handelMnemonicClick}>니모닉 생성 요청</button>
    </fieldset>
  );
}
