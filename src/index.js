import React from "react";
/* リアクト というライブラリからリアクトをインポートする */
import ReactDom from "react-dom";
/* indexjsではhtmlにコンポーネントを反映していく必要があるので
それに必要なReactDomもインポートする */
/* javascriptの中でreturnしてタグを記述していくのをjsx技法という */

import App from "./App";
//1.他のファイルでコンポーネント化したAppを同じ階層のApp.jsからインポートしてくる

ReactDom.render(<App />, document.getElementById("root"));
/* 先程インポートしたReactDomというライブラリの中身のからRenderという関数を使用する
Render関数の引数の一行目にAppをコンポーネントとしてレンダリングするという意味で
HTMLのタグのようにAppを書いて閉じる
二つ目の引数にどこに反映していくかを書くのでjavascriptであるdocument.getElementByIdで
Rootの場所に反映していく */
