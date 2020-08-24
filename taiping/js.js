$(function () {
  // jQueryオブジェクトを変数に代入
  const $yomi = $("#yomi");
  const $mondai = $("#mondai");

  // 問題用の変数の初期化
  let char_index = 1;
  let max_length = 3; //TODO 最初の問題
  let question_number = 0;
  let question_limit = 3;

  // 問題
  const MONDAI_LIST = [
    { yomi: "ごはん", text: "gohan" },
    { yomi: "おすし", text: "osushi" },
    { yomi: "サイフ", text: "saifu" },
    { yomi: "バナナ", text: "banana" },
    { yomi: "くつした", text: "kutsushita" },
  ];

  $(document).on("keypress", function (e) {
    // console.log('key:'+e.key);
    const $target = $("#char-" + char_index);
    const char = $target.text();
    if (e.key === char) {
      //入力文字と現在の位置の文字が一緒だったら
      // alert('正解!');
      $target.removeClass("default");
      $target.addClass("correct");
      char_index++;
    }

    if (max_length < char_index) {
      changeQuestionWord();
      char_index = 1; //初期化
      question_number++;
    }
  });

  function changeQuestionWord() {
    const word = MONDAI_LIST[question_number]["text"];
    max_length = word.length;
    let newHtml = "";
    for (var i = 0; i < max_length; i++) {
      newHtml +=
        '<p id="char-' + (i + 1) + '" class="text default">' + word[i] + "</p>";
    }
    // console.log('newHtml: '+newHtml);
    $mondai.html(newHtml);
    $yomi.text(MONDAI_LIST[question_number]["yomi"]);
  }
});
