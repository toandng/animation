const hoverLists = document.querySelectorAll('.current');
console.log(hoverLists);
const hostTap = document.querySelectorAll('.item');
console.log(hostTap);

hoverLists.forEach((hoverList, index)  => {
    hoverList.addEventListener('mouseover', () => {
        console.log(hoverList)
        if (hostTap[index]) {
            hostTap.forEach(item =>{
                item.style.display = 'none';
            })
            hostTap[index].style.display = 'block';
        }
    });
});
// silde
const onSlides = document.querySelectorAll('.m-list');
const clickLeft = document.querySelector('.icon-slide-left');    
const clickRight = document.querySelector('.icon-slide-right');    

const length = onSlides.length;
let sum = 0;

const displaySlide = () => {
    onSlides.forEach((slide, index) => {
        if (index === sum) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
};
displaySlide();

// slide mobile
// const onSlidess = document.querySelectorAll('.m-list-mobile');
// const clickLefts = document.querySelector('.icon-slide-left-mobile');    
// const clickRights = document.querySelector('.icon-slide-right-mobile');    

// const lengths = onSlidess.length;
// let sums = 0;

// const displaySlides = () => {   
//     onSlidess.forEach((slide, index) => {
//         if (index === sum) {
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }
//     });
// };
// displaySlides();

clickLeft.addEventListener('click', () => {
    sum = (sum - 1 + length) % length;
    displaySlide();
});


clickRight.addEventListener('click', () => {
    sum = (sum + 1) % length;
    displaySlide();
});
// onclick ul
const clickUl = document.querySelectorAll('.w-display');
const clickP = document.querySelectorAll('.p-display'); 
clickUl.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (clickP[index]) {
            if (clickP[index].style.display === 'block') {
                // Nếu phần tử đang hiển thị, ẩn nó đi
                clickP[index].style.display = 'none';
                
            } else {
                // Ẩn tất cả các phần tử trong clickP
                clickP.forEach(item => {
                    item.style.display = 'none';
                });
                // Hiển thị phần tử tương ứng với index trong clickP
                clickP[index].style.display = 'block';
                
            }
        }
    });
});






