

function initializeAfterIncludeHTML() {
    const languageToggleButton = document.querySelector('.language-toggle');
    const languageDropdown = document.querySelector('.dropdown_lang');

    if (languageToggleButton && languageDropdown) {
        languageToggleButton.addEventListener('click', function () {
            languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function (e) {
            if (!languageToggleButton.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.style.display = 'none';
            }
        });
    }
    const navbarDownloadItem = document.querySelector("#navbar_item_download");
    const navLangDownloadItem = document.querySelector("#navbar_lang_dropdown");
    const navItemDownload = document.querySelector(".nav-item-download");
    const navLangDownload = document.querySelector(".language-toggle");


    if (navbarDownloadItem && navItemDownload) {
        // 공통 함수: 모든 드롭다운 닫기
        function closeAllDropdowns() {
            document.querySelectorAll(".navbar_item_dropdown").forEach(item => {
                item.classList.remove("active");
                const dropdown = item.querySelector(".nav-item-download");
                if (dropdown) {
                    dropdown.style.display = "none";
                }
            });
        }

        // 다운로드 버튼 클릭 또는 마우스 진입으로 드롭다운 열기
        navbarDownloadItem.addEventListener("click", function (e) {
            e.stopPropagation();
            const isActive = navbarDownloadItem.classList.contains("active");

            closeAllDropdowns();

            if (!isActive) {
                navbarDownloadItem.classList.add("active");
                navItemDownload.style.display = "block";
            }
        });

        navbarDownloadItem.addEventListener("mouseenter", function (e) {
            e.stopPropagation();
            const isActive = navbarDownloadItem.classList.contains("active");

            closeAllDropdowns();

            if (!isActive) {
                navbarDownloadItem.classList.add("active");
                navItemDownload.style.display = "block";
            }
        });

        // 다른 드롭다운으로 이동 시 드롭다운 닫기
        document.querySelectorAll(".navbar_item_dropdown").forEach(item => {
            item.addEventListener("mouseenter", function () {
                if (item !== navbarDownloadItem) {
                    closeAllDropdowns();
                }
            });
        });


        // 페이지 외부 클릭 시 드롭다운 닫기
        document.addEventListener("click", () => {
            closeAllDropdowns();
        });

        // 다운로드 드롭다운 외부로 마우스 이동 시 닫기
        navItemDownload.addEventListener("mouseleave", function () {
            navbarDownloadItem.classList.remove("active");
            navItemDownload.style.display = "none";
        });

        // 다운로드 드롭다운 외부로 마우스 이동 시 닫기
        navLangDownload.addEventListener("mouseenter", function () {
            navbarDownloadItem.classList.remove("active");
            navItemDownload.style.display = "none";
        });

        // 다운로드 링크 핸들링
        const iosLink = navItemDownload.querySelector('a[href="#iOS"]');
        const androidLink = navItemDownload.querySelector('a[href="#andorid"]');

        if (iosLink) {
            iosLink.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "https://example.com/ios-download"; // 실제 iOS URL로 변경
            });
        }

        if (androidLink) {
            androidLink.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "https://example.com/android-download"; // 실제 Android URL로 변경
            });
        }
    } else {
        console.error("'navbar_item_download' 또는 'nav-item-download' 요소를 찾을 수 없습니다.");
    }
    // Other existing initializations...
}

const mobileDropdownLinks = document.querySelectorAll('.sidebar-dropdown-item');

if (mobileDropdownLinks) {
    mobileDropdownLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            if (this.hash) {
                e.preventDefault();
                const targetId = this.hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });

                    targetElement.classList.add("fade-in");

                    setTimeout(() => {
                        targetElement.classList.remove("fade-in");
                    }, 1000);
                }
            }
        });
    });
}

const mobileMenuButton = document.querySelector('.mobile-menu-button');
const sidebarNavMenu = document.querySelector('.sidebar-nav-menu');
const menuCloseButton = document.querySelector('.sidebar-menu-close');

const toggleSidebarMenu = () => {
    if (sidebarNavMenu.style.right === '0px') {
        sidebarNavMenu.style.right = '-100%';
    } else {
        sidebarNavMenu.style.right = '0';
    }
};

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleSidebarMenu);
} else {
    console.error("mobile-menu-button not found.");
}

if (menuCloseButton) {
    menuCloseButton.addEventListener('click', toggleSidebarMenu);
} else {
    console.error("menuCloseButton not found.");
}

const menuLinks = document.querySelectorAll(".sidebar-menu-item a, .pc-menu a");
menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        const targetHref = this.getAttribute("href");
        if (targetHref) {
            window.location.href = targetHref;
        }
    });
});
// Sidebar menu item 동작 추가
document.querySelectorAll(".sidebar-menu-item").forEach((item) => {
    const link = item.querySelector("a"); // 내부 링크 확인
    const dropdown = item.querySelector(".sidebar-dropdown");

    item.addEventListener("click", (e) => {
        // 드롭다운 없는 경우
        if (!dropdown && link) {
            e.preventDefault(); // 기본 동작 방지

            // 기존 active 클래스 제거
            document.querySelectorAll(".sidebar-menu-item").forEach((el) => {
                el.classList.remove("active");
            });

            // 현재 아이템에 active 추가
            item.classList.add("active");

            // 링크 이동
            setTimeout(() => {
                window.location.href = link.getAttribute("href");
            }, 100); // 스타일 적용 후 이동
            return;
        }


        // 드롭다운이 있는 경우 기존 동작 유지
        const isActive = item.classList.contains("active");

        // 모든 드롭다운 닫기
        document.querySelectorAll(".sidebar-menu-item").forEach((el) => {
            el.classList.remove("active");
            const elDropdown = el.querySelector(".sidebar-dropdown");
            if (elDropdown) {
                elDropdown.style.display = "none";
                el.style.marginBottom = "0";
            }
        });

        if (dropdown && !isActive) {
            item.classList.add("active");
            dropdown.style.display = "flex";

            const dropdownHeight = dropdown.offsetHeight;
            item.style.marginBottom = `${dropdownHeight}px`;
        } else if (dropdown) {
            item.classList.remove("active");
            dropdown.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    initializeAfterIncludeHTML(); // 직접 DOM 초기화
});
