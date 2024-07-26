// Skill Box 1

const skillboxes1 = document.querySelectorAll(".skillbox1");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  skillboxes1.forEach(skillbox1 => {
        const topbox = skillbox1.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          skillbox1.classList.add("sbox1")
        }
        else{
          skillbox1.classList.remove("sbox1")
        }
  })

})

// Skill Box 2

const skillboxes2 = document.querySelectorAll(".skillbox2");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  skillboxes2.forEach(skillbox2 => {
        const topbox = skillbox2.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          skillbox2.classList.add("sbox2")
        }
        else{
          skillbox2.classList.remove("sbox2")
        }
  })

})


// Skill Box 3

const skillboxes3 = document.querySelectorAll(".skillbox3");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  skillboxes3.forEach(skillbox3 => {
        const topbox = skillbox3.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          skillbox3.classList.add("sbox3")
        }
        else{
          skillbox3.classList.remove("sbox3")
        }
  })

})


// Skill Box 4

const skillboxes4 = document.querySelectorAll(".skillbox4");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  skillboxes4.forEach(skillbox4 => {
        const topbox = skillbox4.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          skillbox4.classList.add("sbox4")
        }
        else{
          skillbox4.classList.remove("sbox4")
        }
  })

})

// Skill Box 5

const skillboxes5 = document.querySelectorAll(".skillbox5");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  skillboxes5.forEach(skillbox5 => {
        const topbox = skillbox5.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          skillbox5.classList.add("sbox5")
        }
        else{
          skillbox5.classList.remove("sbox5")
        }
  })

})

// Skill Box 6

const skillboxes6 = document.querySelectorAll(".skillbox6");
window.addEventListener('scroll', () => {
  const innerHeightOfWindow= window.innerHeight;
  skillboxes6.forEach(skillbox6 => {
        const topbox = skillbox6.getBoundingClientRect().top
        if( topbox < innerHeightOfWindow)
        {
          skillbox6.classList.add("sbox6")
        }
        else{
          skillbox6.classList.remove("sbox6")
        }
  })

})


