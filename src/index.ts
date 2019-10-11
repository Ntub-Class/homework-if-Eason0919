// 請介紹兩個字串方法跟數字方法


//string.prototype.concat()幫助我們要如何排列字串
var a = "hello"
var b = "world"
//宣告字串

console.log(a.concat(" " b));
// output: "hello world"

console.log(b.concat(", ", a));
//expected output: "world,hello"

//startswith幫助我們判斷字串裡的字是不是我們想要的,並且位置是否正確

const str1 = "Saturday night plans";

console.log(str.startwith("Sat"));
//expexted output: true

console.log(str1.startsWith("Sat", 3));
//expected output: false

//min 找出數字中最小數值
console.log(Math.min(100, 50, 0));

//max找出數字中最大數值
console.log(Math.max(100, 50, 0));


// 錢錢大於一個值，叫乾爹s
let money = 2000;
let limit = 500000; // 限制值
if (money >= 40000){
Console.log("乾爹")
}else if(money>=500000){
    console.log("你是土豪");
}else{
    console.log("死窮逼")
}

