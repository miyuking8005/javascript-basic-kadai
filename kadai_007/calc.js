//  変数numにランダムな整数を代入する
let num = Math. floor (Math. random () * 1000);

// 変数numの値を出力する（確認用）
console. log (num) ;

// 変数numの値が3と5の倍数の場合「3と5の倍数です」という文字列のみが出力されている
if (num % 3 === 0 && num % 5 === 0 ) {
    console.log('3と5の倍数です');
    }

// 変数numの値が3の倍数の場合「3の倍数です」という文字列を出力する
else if (num % 3 === 0 ) {
    console.log('3の倍数です');
}
// 変数numの値が5の倍数の場合「5の倍数です」という文字列を出力する
else if (num % 5 === 0 ) {
    console.log('5の倍数です');
}

// 上記のいずれでもない場合、「変数num」と出力されている
else {
    console.log('変数num');
}




