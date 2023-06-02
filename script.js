const nav = document.createElement('nav')
function createDropDownMenu () {
  const start = document.createElement('div')
  start.classList.add('start')
  start.innerHTML = 'start'
  nav.appendChild(start)

  const togglepart = document.createElement('div')
  togglepart.classList.add('togglePart')
  start.appendChild(togglepart)

  const gridcontainer = document.createElement('div')
  gridcontainer.classList.add('gridcontainer')
  togglepart.appendChild(gridcontainer)

  const itemlist = ['a', 'b', 'c', 'd', 'e']
  itemlist.forEach(item => {
    const createitem = document.createElement('div')
    createitem.classList.add('item')
    gridcontainer.appendChild(createitem)
  })
}
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
createDropDownMenu()
document.querySelector('.try').appendChild(nav)

//image slider

const anchor = document.querySelectorAll('a')
anchor.forEach(a => {
  a.addEventListener('click', () => {
    clearInterval(timer)
    timeFiveSec()
    setTimeout(() => {
      const hash = getHash()
      console.log(hash)
    }, 0)
    anchor.forEach(other => {
      if (other !== a) {
        other.style.backgroundColor = ''
      }
    })
    a.style.backgroundColor = 'black'
  })
})

const rightbutton = document.getElementById('right')
const leftbutton = document.getElementById('left')

function updateHash (newHash) {
  window.location.hash = newHash
}
function getHash () {
  const hash = document.location.hash
  return hash
}
function handleHashF () {
  const hash = getHash()
  const indexpic = hash.slice(-1)
  let nextpic = parseInt(indexpic) + 1
  if (nextpic === 6) {
    nextpic = 1
  }
  return nextpic
}
function handleHashB () {
  const hash = getHash()
  const indexpic = hash.slice(-1)
  let nextpic = parseInt(indexpic) - 1
  if (nextpic === 0) {
    nextpic = 5
  }
  return nextpic
}

rightbutton.addEventListener('click', () => {
  clearInterval(timer)
  timeFiveSec()
  const nextpic = handleHashF()
  const pic = document.getElementById(`pic-${nextpic}`)
  pic.scrollIntoView({ behavior: 'smooth' })
  updateHash(`#pic-${nextpic}`)

  anchor.forEach(a => {
    const hash = getHash()
    if (a.hash !== hash) {
      a.style.backgroundColor = ''
    } else {
      a.style.backgroundColor = 'black'
    }
  })
})

leftbutton.addEventListener('click', () => {
  clearInterval(timer)
  timeFiveSec()
  const nextpic = handleHashB()
  const pic = document.getElementById(`pic-${nextpic}`)
  pic.scrollIntoView({ behavior: 'smooth' })
  updateHash(`#pic-${nextpic}`)

  anchor.forEach(a => {
    const hash = getHash()
    if (a.hash !== hash) {
      a.style.backgroundColor = ''
    } else {
      a.style.backgroundColor = 'black'
    }
  })
})
let timer
function timeFiveSec () {
  clearInterval(timer)
  timer = setInterval(() => {
    const nextpic = handleHashF()
    const pic = document.getElementById(`pic-${nextpic}`)
    pic.scrollIntoView({ behavior: 'smooth' })
    updateHash(`#pic-${nextpic}`)

    anchor.forEach(a => {
      const hash = getHash()
      if (a.hash !== hash) {
        a.style.backgroundColor = ''
      } else {
        a.style.backgroundColor = 'black'
      }
    })
  }, 3000)
}

//flow
updateHash(`#pic-1`)
anchor.forEach(a => {
  const hash = getHash()
  if (a.hash !== hash) {
    a.style.backgroundColor = ''
  } else {
    a.style.backgroundColor = 'black'
  }
})
timeFiveSec()
