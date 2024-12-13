
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
