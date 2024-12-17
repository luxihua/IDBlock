document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > section");
  const footer = document.querySelector("footer");
  let isSnapping = true;

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const target = entry.target;

              // info-app-container 이후로 스크롤 스냅 비활성화
              if (target.classList.contains("partners-section")) {
                  document.querySelector("main").style.scrollSnapType = "none";
                  isSnapping = false;
              }
          }
      });
  });

  // 각 섹션 관찰
  sections.forEach((section) => observer.observe(section));
  observer.observe(footer);
});


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





// 특허 증명 이벤트
document.addEventListener("DOMContentLoaded", () => {
  const certificateImageLeft = document.querySelector(".certificate-image-left");
  const certificateImageRight = document.querySelector(".certificate-image-right");

  // 원본 이미지와 대체 이미지 경로
  const originalLeftSrc = certificateImageLeft.src;
  const originalRightSrc = certificateImageRight.src;
  const alternateLeftSrc = "static/cert_image1.png"; // 대체 이미지 1 경로
  const alternateRightSrc = "static/cert_image2.png"; // 대체 이미지 2 경로

  // 이미지 교체 함수 (애니메이션 포함)
  const changeImageWithEffect = (imageElement, newSrc) => {
      imageElement.classList.add("flip-animation"); // 애니메이션 클래스 추가
      setTimeout(() => {
          imageElement.src = newSrc; // 애니메이션 중간에 이미지 교체
      }, 200); // 0.3초 후에 이미지 변경
      setTimeout(() => {
          imageElement.classList.remove("flip-animation"); // 애니메이션 클래스 제거
      }, 500); // 0.5초 후 애니메이션 종료
  };

  // 클릭 이벤트: 대체 이미지로 변경
  certificateImageLeft.addEventListener("click", () => {
      changeImageWithEffect(certificateImageLeft, alternateLeftSrc);
  });

  certificateImageRight.addEventListener("click", () => {
      changeImageWithEffect(certificateImageRight, alternateRightSrc);
  });

  // 커서가 이미지에서 벗어날 때: 원래 이미지로 복구
  certificateImageLeft.addEventListener("mouseleave", () => {
      changeImageWithEffect(certificateImageLeft, originalLeftSrc);
  });

  certificateImageRight.addEventListener("mouseleave", () => {
      changeImageWithEffect(certificateImageRight, originalRightSrc);
  });
});