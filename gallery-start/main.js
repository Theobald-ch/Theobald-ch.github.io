const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */

for(let index=1;index<=5;index++){
   const newImage = document.createElement('img');
   newImage.setAttribute('src', "images/pic"+index+".jpg");
   thumbBar.appendChild(newImage);
   newImage.addEventListener('click',changeImg)
}

function changeImg(e) {
    displayedImage.src=e.target.src;
}


/* 编写 变暗/变量 按钮功能 */

function changeColor() {
   const btnClass=btn.getAttribute('class');
   if(btnClass === 'dark'){
       btn.setAttribute('class','light');
       btn.textContent='变暗';
       overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
   }else if(btnClass === 'light') {
       btn.setAttribute('class','dark');
       btn.textContent='变亮';
       overlay.style.backgroundColor = 'rgba(0,0,0,0)';
   }
}

btn.addEventListener('click',changeColor);