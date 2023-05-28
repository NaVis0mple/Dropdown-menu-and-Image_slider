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
pic1.classList.add('hide')
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
    let targetPic = `pic-${parseInt(picStatus)}`
    const getTargetPic = document.querySelector(`.${targetPic}`)  
    if(picStatus ==='6'){
        picStatus='1'
    }
    let previousPic
    if (targetPic ==='pic-1'){
        previousPic ='pic-5'
    }else {
        previousPic = `pic-${parseInt(picStatus)-1}`
    }
    const getPreviousPic = document.querySelector(`.${previousPic}`)

    console.log(picStatus)
    console.log(targetPic)
    console.log(previousPic)

    getTargetPic.classList.remove('hide')
    getPreviousPic.classList.add('hide')
    picStatus =` ${parseInt(picStatus) + 1}`
    console.log(picStatus)

    if(picStatus ==='6'){
        picStatus='1'
    }
    console.log(picStatus)
    previousPic = ''
    console.log(previousPic)

}

changePic()
changePic()
changePic()
changePic()
changePic()
changePic()

