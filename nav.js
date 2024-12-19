window.onload = function () {
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

    document.addEventListener("DOMContentLoaded", function () {
        const dropdownLinks = document.querySelectorAll(".dropdown_menu li a");

        if (dropdownLinks) {
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
        }
    });
};

function initializeMobileMenu() {
    const languageToggleButton = document.querySelector('.language-toggle');
    const languageDropdown = document.querySelector('.dropdown_lang');

    if (languageToggleButton && languageDropdown) {
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
    }

    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebarNavMenu = document.querySelector('.sidebar-nav-menu');
    const menuCloseButton = document.querySelector('.sidebar-menu-close');

    const toggleSidebarMenu = () => {
        if (sidebarNavMenu && sidebarNavMenu.style.right === '0px') {
            sidebarNavMenu.style.right = '-100%';
        } else if (sidebarNavMenu) {
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

    const dropdownLinks = document.querySelectorAll(".sidebar-dropdown-item");
    dropdownLinks.forEach((link) => {
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
                    // 선택된 섹션에 효과 추가 (선택 사항)
                    targetElement.classList.add("fade-in");
                    setTimeout(() => {
                        targetElement.classList.remove("fade-in");
                    }, 1000);
                } else {
                    console.error(`Element with ID '${targetId}' not found.`);
                }
            }
        });
    });

    document.querySelectorAll('.sidebar-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const dropdown = item.querySelector('.sidebar-dropdown');
            if (!dropdown) {
                console.error("Dropdown not found for", item);
                return;
            }

            const isActive = item.classList.contains('active');

            document.querySelectorAll('.sidebar-menu-item').forEach(el => {
                const elDropdown = el.querySelector('.sidebar-dropdown');
                if (elDropdown) {
                    el.classList.remove('active');
                    elDropdown.style.display = 'none';
                    el.style.marginBottom = '0';
                }
            });

            if (!isActive) {
                item.classList.add('active');
                dropdown.style.display = 'flex';
                const dropdownHeight = dropdown.offsetHeight;
                item.style.marginBottom = `${dropdownHeight}px`;
            }
        });
    });
}

// Ensure initializeMobileMenu runs after includeHTML is finished
function initializeAfterIncludeHTML() {
    if (typeof includeHTML === 'function') {
        includeHTML(); // Ensure includeHTML executes
        setTimeout(() => {
            initializeMobileMenu();
        }, 100); // Slight delay to allow DOM updates
    } else {
        console.error("includeHTML is not defined.");
    }
}

document.addEventListener("DOMContentLoaded", initializeAfterIncludeHTML);

