const randomize=document.querySelector(".randomize");
const story = document.querySelector('.story');
const customname=document.getElementById("customname");

const storyText = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。" +
  "人们都惊呆了，:name:全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";
var name="李雷";
const inserta= ["怪兽威利", "大老爹", "圣诞老人"];
const insertb = ["肯德基", "迪士尼乐园", "白宫"];
const insertc = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click',result);

function result () {
    let insertA=randomValueFromArray(inserta);
    let insertB=randomValueFromArray(insertb);
    let insertC=randomValueFromArray(insertc);
    if(customname.value!=undefined&&customname.value!=""){
        name=customname.value;
    }

    let storyNew=storyText.replaceAll(":inserta:",insertA).replaceAll(":insertb:",insertB)
        .replaceAll(":insertc:",insertC).replaceAll(":name:",name);
    story.textContent=storyNew;
    story.style.visibility='visible';

}