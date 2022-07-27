// banner close
function closeBanner() {
    document.querySelector('.banner').style.display = 'none'
    document.querySelector('.btn_ad_close').style.display = 'none'
}

// special
function special_hover() {
    document
        .querySelectorAll('.cine_livingroom')
        .addEventListener('mouseover', (e) => {
            document.querySelector('.special_img').src =
                'https://img.cgv.co.kr//Front/Main/2022/0616/16553622935690.png'
        })
}
