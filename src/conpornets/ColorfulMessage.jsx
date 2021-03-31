import React from "react";

const ColorfulMessage = (props) => {
  /* 7.propsで引数をApp.jsで共有し以下の関数内で[.]でつないで細かく指定する
  propsはいわば引数の総称 */
  console.log(props);

  const { color, children } = props;
  /* 10.分割代入で配列の親玉を簡略化できる */
  const contentStyle = {
    /* 11.親玉簡略化前　color: props.color, */
    color: color,
    /* 12, 簡略後 →さらに(同じ名前なので)colorのみへ*/
    fontSize: "18px"
  };

  return <p style={contentStyle}>{/* 11.props.children */ children}</p>;
  /* 8.もとは{}の中身は{props.message}というprops.colorと並列の
  引数だったが、App.jsxの引数のメッセージの定義がhtmlの<></>の中の値に変わったので
  その配下という意味で{props.children}という指定に変化した */
};

export default ColorfulMessage;
