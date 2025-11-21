// selection operations
let buyImg = document.querySelector('.buy-img')
let buyTitle = document.querySelector('.buy-title')
let alt = document.querySelector('.alt')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')

// get items from pharmacy website operation
buyImg.src = localStorage.getItem('productimage')
buyTitle.innerHTML = localStorage.getItem('producttitle')
alt.innerHTML = localStorage.getItem('productalt')


// if else operation for styling lower 3 images
if (alt.innerHTML === 'relief') {
    img2.src = '../images/DSC00001.JPG'
    img3.src = '../images/DSC00007.JPG'
    img4.src = '../images/DSC00008.JPG'
} else if (alt.innerHTML === 'vitamin') {
    img2.src = '../images/DSC00033.JPG'
    img3.src = '../images/DSC00037.JPG'
    img4.src = '../images/DSC00042.JPG'
} else if (alt.innerHTML === 'joint') {
    img2.src = '../images/DSC00053.JPG'
    img3.src = '../images/DSC00055.JPG'
    img4.src = '../images/DSC00056.JPG'
} else if (alt.innerHTML === 'carica') {
    img2.src = '../images/DSC00058.JPG'
    img3.src = '../images/DSC00061.JPG'
    img4.src = '../images/DSC00066.JPG'
} else if (alt.innerHTML === 'cough') {
    img2.src = '../images/DSC00072.JPG'
    img3.src = '../images/DSC00075.JPG'
    img4.src = '../images/DSC00075.JPG'
} else if (alt.innerHTML === 'pain') {
    img2.src = '../images/DSC00077.JPG'
    img3.src = '../images/DSC00086.JPG'
    img4.src = '../images/DSC00087.JPG'
} else if (alt.innerHTML === 'skin') {
    img2.src = '../images/DSC00017.JPG'
    img3.src = '../images/DSC00017.JPG'
    img4.src = '../images/DSC00017.JPG'
} else {
    img2.src = '../images/DSC00017.JPG'
    img3.src = '../images/DSC00017.JPG'
    img4.src = '../images/DSC00017.JPG'
}
