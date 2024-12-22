

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

    const pcDropdownLinks = document.querySelectorAll(".pc-menu .dropdown > a");

    pcDropdownLinks.forEach((link) => {
        link.addEventListener("mouseenter", function () {
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
            }
        });

        link.parentElement.addEventListener("mouseleave", function () {
            const dropdownMenu = link.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });
    });

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

    document.querySelectorAll('.sidebar-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const dropdown = item.querySelector('.sidebar-dropdown');
            if (!dropdown) {
                item.classList.add('no-dropdown');
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

document.addEventListener("DOMContentLoaded", function () {
    initializeAfterIncludeHTML(); // 직접 DOM 초기화
});



// function initializeMenusWithIncludeHTML() {
//     if (typeof includeHTML === 'function') {
//         includeHTML();
//         document.addEventListener('includeHTMLComplete', () => {
//             initializeAfterIncludeHTML();
//         });
//     } else {
//         console.error("includeHTML is not defined.");
//     }
// }

// document.addEventListener("DOMContentLoaded", initializeMenusWithIncludeHTML);
// document.addEventListener("readystatechange", function () {
//     if (document.readyState === "complete") {
//         initializeMenusWithIncludeHTML();
//     }
// });

