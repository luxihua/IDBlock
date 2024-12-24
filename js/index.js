
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
document.addEventListener("DOMContentLoaded", () => {
  // 애니메이션 클래스 추가 함수
  const applyAnimation = (target, animationClass) => {
    if (!target.classList.contains(animationClass)) {
      target.classList.add(animationClass);
    }
  };

  // 공통 Observer 생성
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          applyAnimation(target, "active"); // active 클래스로 애니메이션 트리거
          observer.unobserve(target); // 관찰 해제
        }
      });
    },
    {
      threshold: 0.4, // 요소가 40% 보이면 트리거
    }
  );

  // 섹션별 요소 선택
  const heroSection = document.querySelector(".hero-section");
  const heroElements = heroSection.querySelectorAll("h1, p, .download-buttons");

  const featureSection = document.querySelector(".features-section");
  const featureElements = featureSection.querySelectorAll(
    ".feature-title, .feature-description, .image-container .image-wrapper"
  );

  const passportSection = document.querySelector(".passport-section");
  const passportElements = passportSection.querySelectorAll(
    ".heading, .description, .image-container, .image-wrapper"
  );


  const paymentSection = document.querySelector(".payment-section");
  const paymentElements = paymentSection.querySelectorAll(
    ".main-title, .payment-description, .image-column"
  );

  // Observer로 관찰 시작
  [...heroElements, ...featureElements, ...passportElements, ...paymentElements].forEach((element) => {
    observer.observe(element);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = new Set();

  // 공통 애니메이션 적용 함수
  const applyAnimation = (target, animationClass) => {
    if (!animatedElements.has(target)) {
      target.classList.add(animationClass);
      animatedElements.add(target);
    }
  };

  // IntersectionObserver 설정
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;

          // 섹션별 애니메이션
          if (target.classList.contains("travel-heading")) {
            applyAnimation(target, "fade-slide-in");
          }
          else if (target.classList.contains("partners-title")) {
            applyAnimation(target, "flip-in");
          } else if (target.classList.contains("partners-image")) {
            applyAnimation(target, "zoom-in");
          }

          // 애니메이션이 적용된 후 더 이상 관찰하지 않음
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.4 } // 요소가 40% 보이면 애니메이션 실행
  );
  // 요소 등록
  document
    .querySelectorAll(".travel-heading, .partners-title, .partners-image")
    .forEach((element) => {
      observer.observe(element);
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
