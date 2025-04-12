const subCategories = {
    "채소": { items: ["딸기", "파프리카", "가지", "방울토마토", "토마토", "오이", "배추"], class: "veg" },
    "과일": { items: ["사과"], class: "fruit" },
    "곡류": { items: ["옥수수", "벼", "보리", "콩"], class: "grain" },
    "기타": { items: ["국화"], class: "other" }
};

const cropVideos = {
    "딸기": "https://www.youtube.com/embed/045fYfFnzLA?rel=0",
    "파프리카": "https://www.youtube.com/embed/xfqYnUm3VAw?rel=0",
    "가지": "https://www.youtube.com/embed/SFeqHGqDJEU?rel=0",
    "방울토마토": "https://www.youtube.com/embed/BZQ1eLxE7UI?rel=0",
    "토마토": "https://www.youtube.com/embed/ok0BOVvwxVE?rel=0",
    "오이": "https://www.youtube.com/embed/jCeJfjUX-tY?rel=0",
    "배추": "https://www.youtube.com/embed/oHa-d6bltVg?rel=0",
    "사과": "https://www.youtube.com/embed/IOH5VcXifkU?rel=0",
    "옥수수": "https://www.youtube.com/embed/TGjOn1u962Q?rel=0",
    "벼": "https://www.youtube.com/embed/QsppI3n-m5s?rel=0",
    "보리": "https://www.youtube.com/embed/fReirMs_Y30?rel=0",
    "콩": "https://www.youtube.com/embed/cyH9pzdgCOQ?rel=0",
    "국화": "https://www.youtube.com/embed/73iQuIbOmhw?rel=0"
};

function showSubCategories(mainCategory) {
    const container = document.getElementById("subCategoryContainer");
    const data = subCategories[mainCategory];
    container.innerHTML = data.items.map(item =>
        `<button class="${data.class}" onclick="showCropVideo('${item}')">${item}</button>`
    ).join("");
    document.getElementById("videoContainer").innerHTML = "";
}

function showCropVideo(crop) {
    const videoUrl = cropVideos[crop];
    const videoContainer = document.getElementById("videoContainer");
    if (videoUrl) {
        videoContainer.innerHTML = `<iframe src="${videoUrl}" allowfullscreen></iframe>`;
    }
}

function playVideo(src) {
    const overlay = document.getElementById("videoOverlay");
    const video = document.getElementById("appVideo");
    video.src = src;
    overlay.style.display = "flex";
    video.onended = () => { closeVideo(); };
}

function closeVideo() {
    const overlay = document.getElementById("videoOverlay");
    const video = document.getElementById("appVideo");
    video.pause();
    video.currentTime = 0;
    overlay.style.display = "none";
}

function openCropDetails(crop) {
    const cropFiles = {
        '딸기': 'crop-details-딸기.html',
        '파프리카': 'crop-details-파프리카.html',
        '가지': 'crop-details-가지.html',
        '방울토마토': 'crop-details-방울토마토.html',
        '토마토': 'crop-details-토마토.html',
        '오이': 'crop-details-오이.html',
        '배추': 'crop-details-배추.html',
        '사과': 'crop-details-사과.html',
        '옥수수': 'crop-details-옥수수.html',
        '벼': 'crop-details-벼.html',
        '보리': 'crop-details-보리.html',
        '콩': 'crop-details-콩.html',
        '국화': 'crop-details-국화.html'
    };
    window.location.href = cropFiles[crop];
}