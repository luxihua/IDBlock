/* load나 resize, reset 시에 초기화 부분 */

addEventListener('load',()=>{
    initalize()
})
addEventListener('resize',()=>{
    initalize()
})
addEventListener('reset',()=>{
    initalize()
})

const initalize = ()=>{
  windowHeight = window.outerHeight
  history.scrollRestoration = "manual";
}



/* intro 애니메이션 */

// delay를 주기 위하여 설정, css 단독으로는 animation delay를 줄 수 없음

// netify로 배포를 하였는데, 배경 이미지를 다 불러오기 전에 애니메이션이 실행되는 경우가 있었다. 해결하기위해 window.onload 도입하였으나,
// window 자체를 다 불러오는데도 로컬환경고 다르게 배포 환경은 매우 느려서, window가 준비되는데 10초이상이 소요돼서 빼버림

window.onload = ()=>{
    setTimeout(()=>{
        const introContainer = document.querySelector('.hero-content')
        introContainer.style.display="block"
    },400)
}


const introWrap = document.querySelector('.hero-section')
const introContainer = document.querySelector('.hero-content')

setTimeout(()=>{
    introContainer.style.display="block"
}, 400)


let windowHeight = window.innerHeight
initalize()
/* home 스크롤 이벤트 */
const homeText = document.querySelector('.content-wrapper')
const homeTextH2 = document.querySelector('.content-wrapper h2')
const homeTextH3 = document.querySelector('.content-wrapper h3')

const homeIphone1 = document.querySelector('.image-container .image-wrapper')



// homeText가 50% 정도 뷰포트에 나왔을 경우 아래 함수를 실행시키고 싶다

let observer1 = new IntersectionObserver(entries=>{
    observer1cb(entries[0])
  },{root: null,threshold:0.5})
  
  const observer1cb = entry=>{
    if(entry.isIntersecting){
      homeTextH2.style.opacity = 1
      homeTextH2.style.animation = `appear_from_bottom ease 1.5s`
      // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
      setTimeout(()=>{
          homeIphone1.style.opacity = 1
          homeIphone1.style.animation = `appear_from_bottom ease 1.5s`
        setTimeout(()=>{
            homeTextH3.style.opacity = 1
            homeTextH3.style.animation = `appear_from_bottom ease 1.5s`
        },600)
      },600)
    }
  }
  observer1.observe(homeText)


/* home2 스크롤 이벤트 */
const home2Text = document.querySelector('.content-container h2')
const home2Content = document.querySelectorAll('.content-container p')
const home2Images = document.querySelectorAll('.image-wrapper')


let observer2 = new IntersectionObserver(entries=>{
  observer2cb(entries[0])
},{threshold:0.5})

const observer2cb = entry=>{
  if(entry.isIntersecting){
    home2Text.style.animation = 'appear_from_bottom ease 1.5s'
    home2Text.style.opacity = 1
    
    setTimeout(()=>{
      home2Images.forEach(item=>{
        item.style.animation = 'appear_from_bottom ease 1.5s'
        item.style.opacity = 1
      })
      
      setTimeout(()=>{
        home2Content.forEach(item=>{
          item.style.animation = 'appear_from_bottom ease 1.5s'
          item.style.opacity = 1
        })
      },600)
    },600)
    observer2.unobserve(home2Text)
  }
}
observer2.observe(home2Text)

  




