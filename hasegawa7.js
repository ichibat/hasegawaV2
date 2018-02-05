function myCheck(){
    var flag = false; // 選択されているか否かを判定する変数
    var sumScore = 0;

    // チェックボックスの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）
    for(var i=0; i<document.form1.questions.length;i++){

        // i番目のチェックボックスがチェックされているかを判定
        if(document.form1.questions[i].checked){
            flag = true;    
            sumScore += parseInt(document.form1.questions[i].value);
        }
    }
    alert("点数は　"　+ sumScore + "です。")

    // 何も選択されていない場合の処理   
    if(!flag){
        alert("項目が選択されていません。");
    }
}
