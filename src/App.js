import Head from "next/head";
import { useState } from "react";
import RequestMnemonic from "./components/RequestMnemonicForm";
import RequestAccount from "./components/RequestAccountForm";
import Mnemonic from "./components/Mnemonic";
import Account from "./components/Account";
import lightwallet from "eth-lightwallet";

export default function App() {
  // 니모닉 및 지갑 주소 결과
  const [mnemonicResult, setMnemonicResult] = useState();
  const [accountResult, setAccountResult] = useState();

  const requestMnemonic = () => {
    // 니모닉 생성
    const mnemonic = lightwallet.keystore.generateRandomSeed();
    setMnemonicResult(mnemonic);
  };
  const requestAccount = (mnemonic, password) => {
    // 지갑주소 생성
    // 키스토어 패키지 생성
    lightwallet.keystore.createVault(
      {
        password: password,
        seedPhrase: mnemonic,
        hdPathString: "m/0'/0'/0'",
      },
      (err, ks) => {
        ks.keyFromPassword(password, (err, pwDerivedKey) => {
          ks.generateNewAddress(pwDerivedKey, 1);

          let address = ks.getAddresses().toString();
          let keystore = ks.serialize();

          setAccountResult({ keystore, address });
        });
      }
    );
  };

  return (
    <div>
      <Head>
        <title>코드스테이츠 BEB_06 허연재 니모닉 지갑 만들기</title>
      </Head>
      <main>
        <h1>코드스테이츠 BEB_06 허연재 니모닉 지갑 만들기</h1>
        <div>
          <RequestMnemonic requestMnemonic={requestMnemonic} />
          <Mnemonic result={mnemonicResult} />
        </div>
        <div>
          <RequestAccount requestAccount={requestAccount} />
          <Account result={accountResult} />
        </div>
      </main>
    </div>
  );
}
