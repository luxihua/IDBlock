
document.addEventListener('DOMContentLoaded', function () {
    const languageToggleButton = document.querySelector('.language-toggle');
    const languageDropdown = document.querySelector('.dropdown_lang');

    languageToggleButton.addEventListener('click', function () {
        // 드롭다운 메뉴의 표시 상태를 토글
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // 다른 영역 클릭 시 드롭다운 메뉴 닫기
    document.addEventListener('click', function (e) {
        if (!languageToggleButton.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.style.display = 'none';
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".dropdown_menu li a");

    dropdownLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            if (this.hash) {
                e.preventDefault(); // 기본 동작 방지
                const targetId = this.hash.substring(1); // # 제거
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // 부드럽게 스크롤 이동
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });

                    // 페이드인 애니메이션 추가
                    targetElement.classList.add("fade-in");

                    // 1초 후 애니메이션 제거
                    setTimeout(() => {
                        targetElement.classList.remove("fade-in");
                    }, 1000);
                }
            }
        });
    });
});