
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
      applyAnimation(homeIphone1, "appear_from_bottom ease 1.0s", 300);
      applyAnimation(homeTextH3, "appear_from_bottom ease 1.0s", 600);
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
        applyAnimation(item, "appear_from_bottom ease 1.0s", 300)
      );
      home2Content.forEach((item, index) =>
        applyAnimation(item, "appear_from_bottom ease 1.0s", 600)
      );
      observer2.unobserve(home2Text);
    }
  },
  { threshold: 0.4 }
);
observer2.observe(home2Text);

/* home3 스크롤 이벤트 */
document.addEventListener("DOMContentLoaded", () => {
  const home3Texth2 = document.querySelector(".payment-container .payment-content-wrapper h2");
  const home3Textp = document.querySelector(".payment-container .payment-content-wrapper p");
  const home3Iphone = document.querySelector(".image-section .image-grid .image-column");

  // 요소가 null인지 확인
  if (!home3Texth2 || !home3Textp || !home3Iphone) {
    console.error("하나 이상의 요소를 찾을 수 없습니다. 선택자를 확인하세요.");
    return;
  }

  const observer3 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;

          // 각 요소별로 active 클래스 추가
          if ((target === home3Texth2 || target === home3Textp) && !target.classList.contains("active")) {
            target.classList.add("active");
          }

          // image-column은 300ms 후 활성화
          if (target === home3Iphone && !target.classList.contains("active")) {
            setTimeout(() => {
              target.classList.add("active");
            }, 300);
          }

          // 한 번 활성화된 요소는 더 이상 관찰하지 않음
          observer3.unobserve(target);
        }
      });
    },
    { root: null, threshold: 0.4 } // 40% 뷰포트에서 트리거
  );

  // 각 요소를 관찰
  [home3Texth2, home3Textp, home3Iphone].forEach((element) => {
    observer3.observe(element);
  });
});



/* home6 스크롤 width 조절 이벤트 */
window.addEventListener("resize", initialize);




// 특허 증명 이벤트
document.addEventListener("DOMContentLoaded", () => {
  const certificateImageLeft = document.querySelector(".certificate-image-left");
  const certificateImageRight = document.querySelector(".certificate-image-right");

  if (!certificateImageLeft || !certificateImageRight) {
    console.error("이미지 요소를 찾을 수 없습니다.");
    return;
  }

  const originalLeftSrc = certificateImageLeft.src.trim();
  const originalRightSrc = certificateImageRight.src.trim();
  const alternateLeftSrc = "static/cert_image1.png";
  const alternateRightSrc = "static/cert_image2.png";

  const changeImageWithEffect = (imageElement, newSrc) => {
    console.log(`Changing image source to: ${newSrc}`);
    imageElement.classList.add("flip-animation");
    setTimeout(() => {
      imageElement.src = newSrc;
      console.log(`Image source changed to: ${imageElement.src}`);
    }, 200);
    setTimeout(() => {
      imageElement.classList.remove("flip-animation");
    }, 500);
  };

  const isMobile = () => window.innerWidth <= 479;

  // PC 이벤트
  if (!isMobile()) {
    certificateImageLeft.addEventListener("mouseenter", () => {
      console.log("Mouse entered left image");
      changeImageWithEffect(certificateImageLeft, alternateLeftSrc);
    });

    certificateImageRight.addEventListener("mouseenter", () => {
      console.log("Mouse entered right image");
      changeImageWithEffect(certificateImageRight, alternateRightSrc);
    });

    certificateImageLeft.addEventListener("mouseleave", () => {
      console.log("Mouse left left image");
      changeImageWithEffect(certificateImageLeft, originalLeftSrc);
    });

    certificateImageRight.addEventListener("mouseleave", () => {
      console.log("Mouse left right image");
      changeImageWithEffect(certificateImageRight, originalRightSrc);
    });
  }

  // 모바일 터치 이벤트
  if (isMobile()) {
    certificateImageLeft.addEventListener("touchstart", () => {
      console.log("Touched left image");
      const currentSrc = certificateImageLeft.src.trim();
      const newSrc = currentSrc === originalLeftSrc ? alternateLeftSrc : originalLeftSrc;
      changeImageWithEffect(certificateImageLeft, newSrc);
    });

    certificateImageRight.addEventListener("touchstart", () => {
      console.log("Touched right image");
      const currentSrc = certificateImageRight.src.trim();
      const newSrc = currentSrc === originalRightSrc ? alternateRightSrc : originalRightSrc;
      changeImageWithEffect(certificateImageRight, newSrc);
    });
  }
});
