// 步驟三：JavaScript 運作邏輯
// 最後，我們使用 JavaScript 來實現輪播功能。這裡我們將創建一個變數來追踪當前顯示的圖片索引。

// javascript
// 複製程式碼
const top5picture = document.querySelector('.top5picture');
const buttonleft = document.querySelector('#buttonleft');
const buttonright = document.querySelector('#buttonright');
const images = document.querySelectorAll('.top5picture');

let counter = 0;
const size = images[0].clientWidth; // 假設所有圖片的寬度相同

// 初始化，將第一張圖片顯示在最前面
top5picture.style.transform = `translateX(${-size * counter}px`;

// 下一張圖片
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    top5picture.style.transform = `translateX(${-size * counter}px)`;
});

// 上一張圖片
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    top5picture.style.transform = `translateX(${-size * counter}px)`;
});