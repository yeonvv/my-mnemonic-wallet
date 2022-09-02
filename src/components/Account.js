// 지갑주소 생성 결과

export default function Account({ result }) {
  return (
    <div>
      {result ? (
        <div>
          <h3>지갑주소 (공개 키) : {result.address}</h3>
          <p>keystore : {result.keystore}</p>
        </div>
      ) : null}
    </div>
  );
}
