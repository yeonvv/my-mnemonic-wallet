// 니모닉 생성 결과

export default function Mnemonic({ result }) {
  return (
    <div>
      {result ? (
        <div>
          <h3>생성 결과 : {result}</h3>
        </div>
      ) : null}
    </div>
  );
}
