// Project Box 1

const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  boxes.forEach(box => {
        const topbox = box.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          box.classList.add("show")
        }
        else{
          box.classList.remove("show")
        }
  })

})

// Project Box 2

const boxes2 = document.querySelectorAll(".box2");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  boxes2.forEach(box2 => {
        const topbox = box2.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          box2.classList.add("show3")
        }
        else{
          box2.classList.remove("show3")
        }
  })

})

// Project Text 1

const texts1 = document.querySelectorAll(".text");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  texts1.forEach(text1 => {
        const toptext = text1.getBoundingClientRect().top
        if( toptext < innerHeightOfWindow)
        {
          text1.classList.add("show2")
        }
        else{
          text1.classList.remove("show2")
        }
  })

})

// Project Text 2

const texts2 = document.querySelectorAll(".text2");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  texts2.forEach(text2 => {
        const toptext = text2.getBoundingClientRect().top
        if( toptext < innerHeightOfWindow)
        {
          text2.classList.add("show4")
        }
        else{
          text2.classList.remove("show4")
        }
  })

})