import React from "react";
import ColorfulMessage from "./conpornets/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert();
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  /* 6.ここでオブジェクトの変数を定義してpタグの中で反映してあげることもできる 。CSSコマンドのfontSizeがキャメルケースなのも注意*/

  return (
    //5.returnの中のタグが複数ある場合は(<></>)でhtmlを記述する
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* 5.cssをタグに直接書いていく方法 一つ目の{}はjs記述である事
    を指し、その中の{}はjsのオブジェクトである事を示している
    redは''で囲わないとcssのプロパティとして認識されない*/}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      {/* 6.引数の定義をこちらでやって、関数はcolorfulmessageに置いてある */}
      {/* 9.<ColorfulMessage color="pink" message="元気です" /> 
      タグ中に表示文字を入れる場合は上記のpropsの値になるが、下のようなhtmlの表示形式になると
      使用できない
    */}
      <ColorfulMessage color="pink">元気ですyo</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      {/* 3.onclickButtonというアラートを出す関数を記述 */}
    </>
    /* 2.リアクトの特徴でHTML<>の中のスタイルやイベント名はキャメルケース
    (単語のつなぎ目が大文字)で記述し、jsx>html>{}の中はjs
    として認識される */

    /* 4.ボタンの中のイベント関数にonclickbuttonを配置する */
  );
};

export default App;
//1.他のファイルでもApp関数を使うという意味
