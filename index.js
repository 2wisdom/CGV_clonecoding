// banner close
function closeBanner() {
    document.querySelector('.banner_close').style.display = 'none'
    document.querySelector('.btn_ad_close').style.display = 'none'
}

// video play

let video = document.getElementById('video')
let playBtn = document.getElementById('video_play_btn')

function playVideo() {
    video.play()
    playBtn.className = 'video_play_btn'
    playBtn.innerText = 'play'
    playBtn.onclick = () => {
        stopVideo()
    }
}

function stopVideo() {
    video.pause()
    playBtn.className = 'video_play_btn_active'
    playBtn.innerText = 'stop'
    playBtn.onclick = () => {
        playVideo()
    }
}

// video sound

let soundBtn = document.getElementById('video_sound_btn')

function soundOn() {
    soundBtn.className = 'video_sound_btn_active'
    video.muted = false
    soundBtn.onclick = () => {
        soundOff()
    }
}

function soundOff() {
    soundBtn.className = 'video_sound_btn'
    video.muted = true
    soundBtn.onclick = () => {
        soundOn()
    }
}

// special

const images = [
    'https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png',
    'https://img.cgv.co.kr//Front/Main/2022/0616/16553622935690.png',
    'https://img.cgv.co.kr//Front/Main/2021/1130/16382612660240.png',
    'https://img.cgv.co.kr//Front/Main/2021/1130/16382612660560.png',
]

function handleChangeSpcialImage(i) {
    document.querySelector('.special_img').src = images[i]
    document.querySelector('.special_img').setAttribute('alt', images[i])
}

function specialBorderChange() {
    document.querySelector('.special_img')
}
