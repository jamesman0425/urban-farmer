const subCategories = {
    "채소": { items: ["딸기", "파프리카", "가지", "방울토마토", "토마토", "오이", "배추"], class: "veg" },
    "과일": { items: ["사과"], class: "fruit" },
    "곡류": { items: ["옥수수", "벼", "보리", "콩"], class: "grain" },
    "기타": { items: ["국화"], class: "other" }
};

const cropVideos = {
    "딸기": "https://www.youtube.com/embed/045fYfFnzLA?rel=0",
    "파프리카": "https://www.youtube.com/embed/LokZ02pfcWE?rel=0",
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
// ------------------------
// 농업 빅데이터 유튜브 플레이어 기능 추가
// ------------------------

(function () {
    let bigDataPlayer;
    const videoId = 'Pp53oumSzqU'; // 연결할 유튜브 영상 ID
  
    // 썸네일 클릭 이벤트 설정
    function setupThumbnailClick() {
      const thumb = document.getElementById('bigDataThumbnail');
      if (thumb) {
        thumb.addEventListener('click', () => {
          const container = document.getElementById('bigDataPlayerContainer');
          container.innerHTML = '<div id="bigDataPlayer"></div>';
          initBigDataPlayer(); // 유튜브 플레이어 생성
        });
      }
    }
  
    // 유튜브 API 로드
    function loadYouTubeAPI() {
      if (window.YT && typeof YT.Player === 'function') {
        setupThumbnailClick();
      } else {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(tag, firstScript);
  
        window.onYouTubeIframeAPIReady = setupThumbnailClick;
      }
    }
  
    // 플레이어 초기화
    function initBigDataPlayer() {
      bigDataPlayer = new YT.Player('bigDataPlayer', {
        height: '315',
        width: '100%',
        videoId: videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          autoplay: 1 // 클릭하면 자동재생
        },
        events: {
          'onStateChange': onBigDataPlayerStateChange
        }
      });
    }
  
    // 영상 끝났을 때 다시 썸네일로 복귀
    function onBigDataPlayerStateChange(event) {
      if (event.data === YT.PlayerState.ENDED) {
        const container = document.getElementById('bigDataPlayerContainer');
        container.innerHTML = '<img id="bigDataThumbnail" src="assets/images/big_data.jpg" alt="농업 빅데이터 썸네일" style="width:100%; cursor:pointer;">';
        setupThumbnailClick();
      }
    }
  
    // 시작 시 API 로드
    document.addEventListener('DOMContentLoaded', loadYouTubeAPI);
  })();
// ------------------------
// 도시농부 유투브 썸네일 클릭 → 영상 재생 & 종료 시 이미지 복귀
// ------------------------
function playYoutubeInline() {
    const container = document.getElementById("youtubeContent");
    if (!container) return;
  
    container.innerHTML = `
      <iframe
        id="youtubePlayer"
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/FVW-27H14F0?autoplay=1&rel=0&enablejsapi=1"
        title="도시농부 유투브"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  
    loadYouTubeAPIForUrbanFarmer();
  }
  
  function loadYouTubeAPIForUrbanFarmer() {
    if (window.YT && typeof YT.Player === 'function') {
      initUrbanFarmerPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = initUrbanFarmerPlayer;
    }
  }
  
  function initUrbanFarmerPlayer() {
    new YT.Player('youtubePlayer', {
      events: {
        'onStateChange': function (event) {
          if (event.data === YT.PlayerState.ENDED) {
            const container = document.getElementById("youtubeContent");
            if (container) {
              container.innerHTML = `
                <img
                  id="youtubeThumbnail"
                  src="assets/images/farmer.jpg"
                  alt="도시농부 유투브 썸네일"
                  style="width: 100%; max-width: 500px; cursor: pointer;"
                  onclick="playYoutubeInline()"
                >
              `;
            }
          }
        }
      }
    });
  }
  