// 今日の日付を取得
const today = new Date();

// 年・月・日をそれぞれ取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // JSでは月が0始まりなので +1
const day = today.getDate();

// コンソールに出力
console.log(`${year}年${month}月${day}日`);
