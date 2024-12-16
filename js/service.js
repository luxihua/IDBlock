

document.addEventListener("DOMContentLoaded", () => {
    // 애니메이션 대상 요소 선택
    const elementsToAnimate = document.querySelectorAll(
        ".service-guide, .identity-verification, .auth-container, .payment-section, .services-container, .block-pay-container"
    );

    // IntersectionObserver 설정
    const observerOptions = {
        root: null,
        threshold: 0.2, // 20% 보일 때 트리거
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // 애니메이션 클래스 추가
                observer.unobserve(entry.target); // 한 번 애니메이션 후 관찰 중지
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    elementsToAnimate.forEach((element) => observer.observe(element));
});