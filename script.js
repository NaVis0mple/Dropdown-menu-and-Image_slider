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

    const itemlist = ['a','b','c','d','e']
    itemlist.forEach(item=>{
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
// const pic1 = document.querySelector('.pic-1')
// const pic2 = document.querySelector('.pic-2')
// pic2.classList.add('hide')
// const pic3 = document.querySelector('.pic-3')
// pic3.classList.add('hide')
// const pic4 = document.querySelector('.pic-4')
// pic4.classList.add('hide')
// const pic5 = document.querySelector('.pic-5')
// pic5.classList.add('hide')

// let picStatus = 1
// let picLength = 5


// function changePic(){
//     picStatus = picStatus + 1
//     if (picStatus === picLength+1){
//         picStatus = 1
//     }
//     let targetPic = `pic-${picStatus}`
//     let previousPic = `pic-${picStatus-1}`
//     if (previousPic === 'pic-0'){
//         previousPic = `pic-${picLength}`
//     }
//     const getTargetPic = document.querySelector(`.${targetPic}`)  
//     const getPreviousPic = document.querySelector(`.${previousPic}`)

//     getTargetPic.classList.remove('hide')
//     getPreviousPic.classList.add('hide')
// }

// function changePicBack (){
//     picStatus = picStatus - 1
//     if (picStatus===0){
//         picStatus = picLength
//     }
//     let targetPic = `pic-${picStatus}`
//     let previousPic = `pic-${picStatus+1}`
//     if (previousPic===`pic-${picLength+1}`){
//         previousPic = 'pic-1'
//     }
//     const getTargetPic = document.querySelector(`.${targetPic}`)  
//     const getPreviousPic = document.querySelector(`.${previousPic}`)
//     getTargetPic.classList.remove('hide')
//     getPreviousPic.classList.add('hide')
// }

// const buttonForward = document.querySelector('.forward')
// buttonForward.addEventListener('click',()=>{
//     changePic()
// })
// const buttonBackward = document.querySelector('.back')
// buttonBackward.addEventListener('click',()=>{
//     changePicBack()
// })
const anchor = document.querySelectorAll('a')
anchor.forEach(a=>{  
    a.addEventListener('click',()=>{
        setTimeout(() => {
            const hash = document.location.hash
            console.log(hash) 
        }, 0)  
        anchor.forEach(other=>{
            if(other!==a){
                other.style.backgroundColor= ''
            }
        })
        a.style.backgroundColor = 'black'
    })
})

const rightbutton = document.getElementById('right')
const leftbutton = document.getElementById('left')

function updateHash(newHash) {
    window.location.hash = newHash;
}
const getHash = ()=>{
    const hash = document.location.hash
    return hash
}
function handleHashF(){
    const hash = getHash()
    const indexpic = hash.slice(-1)
    let nextpic = parseInt(indexpic) +1
    if (nextpic===6){
        nextpic = 1
    }
    return nextpic
}
function handleHashB(){
    const hash = getHash()
    const indexpic = hash.slice(-1)
    let nextpic = parseInt(indexpic) -1
    if (nextpic===0){
        nextpic = 5
    }
    return nextpic
}

updateHash(`#pic-1`)
rightbutton.addEventListener('click',()=>{
    const nextpic = handleHashF()
    const pic = document.getElementById(`pic-${nextpic}`)
    pic.scrollIntoView({ behavior: 'smooth' })
    updateHash(`#pic${nextpic}`)
})

leftbutton.addEventListener('click',()=>{
    const nextpic = handleHashB()
    const pic = document.getElementById(`pic-${nextpic}`)
    pic.scrollIntoView({ behavior: 'smooth' })
    updateHash(`#pic${nextpic}`)
})
