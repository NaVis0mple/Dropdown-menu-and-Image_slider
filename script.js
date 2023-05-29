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
const pic1 = document.querySelector('.pic-1')
const pic2 = document.querySelector('.pic-2')
pic2.classList.add('hide')
const pic3 = document.querySelector('.pic-3')
pic3.classList.add('hide')
const pic4 = document.querySelector('.pic-4')
pic4.classList.add('hide')
const pic5 = document.querySelector('.pic-5')
pic5.classList.add('hide')

let picStatus = '1'
let picLength = '5'


function changePic(){
    picStatus =`${parseInt(picStatus) + 1}`
    if (picStatus === `${parseInt(picLength)+1}`){
        picStatus = '1'
    }
    let targetPic = `pic-${parseInt(picStatus)}`
    let previousPic = `pic-${parseInt(picStatus)-1}`
    if (previousPic === 'pic-0'){
        previousPic = `pic-${parseInt(picLength)}`
    }
    const getTargetPic = document.querySelector(`.${targetPic}`)  
    const getPreviousPic = document.querySelector(`.${previousPic}`)

    getTargetPic.classList.remove('hide')
    getPreviousPic.classList.add('hide')
}

function changePicBack (){
    picStatus =`${parseInt(picStatus) - 1}`
    if (picStatus==='0'){
        picStatus = `${parseInt(picLength)}`
    }
    let targetPic = `pic-${parseInt(picStatus)}`
    let previousPic = `pic-${parseInt(picStatus)+1}`
    if (previousPic===`pic-${parseInt(picLength)+1}`){
        previousPic = 'pic-1'
    }
    const getTargetPic = document.querySelector(`.${targetPic}`)  
    const getPreviousPic = document.querySelector(`.${previousPic}`)
    getTargetPic.classList.remove('hide')
    getPreviousPic.classList.add('hide')
}

const buttonForward = document.querySelector('.forward')
buttonForward.addEventListener('click',()=>{
    changePic()
})
const buttonBackward = document.querySelector('.back')
buttonBackward.addEventListener('click',()=>{
    changePicBack()
})
