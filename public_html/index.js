let text = document.getElementById("sample").innerHTML;
let textArr = text.split(" ");
let endStr = "";
textArr.forEach(element => {
    endStr += "<span class=\"term-text\">" + element + "</span> ";
});
document.getElementById("sample").innerHTML = endStr;