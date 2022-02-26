$(function () {
  // アコーディオンメニューのラベルがクリックされた場合
  $("#ac-menu .label").on("click", function () {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
    console.log(this)
  });
});