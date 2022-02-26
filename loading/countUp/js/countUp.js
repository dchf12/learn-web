// count up
const countUp = new ProgressBar.Line(splash_text, {
  //id名を指定
  strokeWidth: 0, //進捗ゲージの太さ
  duration: 1000, //時間指定(1000＝1秒)
  trailWidth: 0, //線の太さ
  text: {
    //テキストの形状を直接指定
    style: {
      //中央に配置
      position: "absolute",
      left: "50%",
      top: "50%",
      padding: "0",
      margin: "0",
      transform: "translate(-50%,-50%)",
      "font-size": "1.2rem",
      color: "#fff",
    },
    autoStyleContainer: false, //自動付与のスタイルを切る
  },
  step: function (state, count) {
    count.setText(Math.round(count.value() * 100) + " %"); //テキストの数値
  },
});

//アニメーションスタート
countUp.animate(1.0, function () {
  //バーを描画する割合を指定 1.0 なら100%まで描画
  $("#splash").delay(300).fadeOut(1000); //アニメーション後#splashエリアをフェードアウト
});
