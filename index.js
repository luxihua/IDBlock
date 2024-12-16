/* 초기화 */
let windowHeight = window.innerHeight;

const initialize = () => {
  windowHeight = window.innerHeight;
};


addEventListener("load", initialize);
addEventListener("resize", initialize);

/* 공통 애니메이션 함수 */
const applyAnimation = (element, animation, delay = 0) => {
  if (element) {
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.animation = animation;
    }, delay);
  }
};

/* home 스크롤 이벤트 */
const homeTextH2 = document.querySelector(".content-wrapper h2");
const homeTextH3 = document.querySelector(".content-wrapper h3");
const homeIphone1 = document.querySelector(".image-container .image-wrapper");

let observer1 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      applyAnimation(homeTextH2, "appear_from_bottom ease 1.0s");
      applyAnimation(homeIphone1, "appear_from_bottom ease 1.0s", 600);
      applyAnimation(homeTextH3, "appear_from_bottom ease 1.0s", 1200);
      observer1.unobserve(homeTextH2);
    }
  },
  { root: null, threshold: 0.4 }
);
observer1.observe(homeTextH2);

/* home2 스크롤 이벤트 */
const home2Text = document.querySelector(".content-container h2");
const home2Content = document.querySelectorAll(".content-container p");
const home2Images = document.querySelectorAll(".image-wrapper");

let observer2 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      applyAnimation(home2Text, "appear_from_bottom ease 1.0s");
      home2Images.forEach((item, index) =>
        applyAnimation(item, "appear_from_bottom ease 1.0s", 600)
      );
      home2Content.forEach((item, index) =>
        applyAnimation(item, "appear_from_bottom ease 1.0s", 1200)
      );
      observer2.unobserve(home2Text);
    }
  },
  { threshold: 0.4 }
);
observer2.observe(home2Text);

/* home3 스크롤 이벤트 */
const home3Texth2 = document.querySelector(".payment-container .content-wrapper h2");
const home3Textp = document.querySelector(".payment-container .content-wrapper p");
const home3Iphone1 = document.querySelector(".image-section .image-grid .image-column");
const home3Iphone2 = document.querySelector(".image-section .image-grid .image-column-secondary");

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // 각 요소별로 active 클래스 추가
        if ((target === home3Texth2 || target === home3Textp) && !target.classList.contains("active")) {
          target.classList.add("active");
        }

        // image-column은 600ms 후 활성화
        if (target === home3Iphone1 && !target.classList.contains("active")) {
          setTimeout(() => {
            target.classList.add("active");
          }, 600);
        }

        // image-column-secondary는 1200ms 후 활성화
        if (target === home3Iphone2 && !target.classList.contains("active")) {
          setTimeout(() => {
            target.classList.add("active");
          }, 1200);
        }

        // 한 번 활성화된 요소는 더 이상 관찰하지 않음
        observer3.unobserve(target);
      }
    });
  },
  { root: null, threshold: 0.4 } // 40% 뷰포트에서 트리거
);

// 각 요소를 관찰
[home3Texth2, home3Textp, home3Iphone1, home3Iphone2].forEach((element) => {
  observer3.observe(element);
});



/* home6 스크롤 width 조절 이벤트 */
window.addEventListener("resize", initialize);

/* 스크롤 이벤트 - earth-image width 조정 */
const walls = document.querySelectorAll(".earth-image");
const home6Wall = document.querySelector(".earth-content");

const home6WidthControlHandler = () => {
  const difference = windowHeight - home6Wall.getBoundingClientRect().top;

  walls.forEach((item) => {
    // 스크롤 위치에 따라 width 계산
    if (difference > 0 && difference <= 700) {
      const newWidth = 1000 + (difference / 700) * 1800; // 200px에서 2000px까지 비례 증가
      item.style.width = `${newWidth}px`;
    } else if (difference > 700) {
      item.style.width = "2000px"; // 최대 너비
    } else {
      item.style.width = "1000px"; // 초기 너비
    }
  });

  // 디버깅용 로그
  console.log("Difference:", difference);
};

window.addEventListener("scroll", home6WidthControlHandler);