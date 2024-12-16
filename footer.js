// 소셜 아이콘에 마우스 이벤트 추가
document.querySelectorAll('.social-icon').forEach((icon, index) => {
    // 소셜 아이콘별 새 이미지 소스 배열
    const newSrc = [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/670e003c598bb1e18cc476ed11227c7fbab37898a84b77cbd94369adc02e4260?placeholderIfAbsent=true&apiKey=bc9f4e82a65e42379470e4a631b8b0f9",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1022afeff1e83edfef6997c0ba1e1479c1a751190caee358d5833b84e3f5b1e7?placeholderIfAbsent=true&apiKey=bc9f4e82a65e42379470e4a631b8b0f9",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8760e895502dd9a6b288eb6740ee37b8ef03ad0ae6792bf6e4de88fbd29ee2dc?placeholderIfAbsent=true&apiKey=bc9f4e82a65e42379470e4a631b8b0f9",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e7ba0a5144b762dc2bc2169e912162617f3e29153692af98abc9086284ba15d?placeholderIfAbsent=true&apiKey=bc9f4e82a65e42379470e4a631b8b0f9"
    ];

    const originalSrc = icon.src; // 초기 이미지 저장

    // 마우스를 올릴 때 이벤트
    icon.addEventListener('mouseenter', () => {
        icon.src = newSrc[index]; // 새 이미지로 변경
    });

    // 마우스가 떠날 때 이벤트
    icon.addEventListener('mouseleave', () => {
        icon.src = originalSrc; // 원래 이미지로 복원
    });
});