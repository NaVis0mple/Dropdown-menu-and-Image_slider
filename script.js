function createDropDownMenu () {
    const nav = document.createElement('nav')
    
    const start = document.createElement('div')
    start.classList.add('start')
    start.innerHTML = 'start'
    nav.appendChild(start)

    const togglepart = document.createElement('div')
    togglepart.classList.add('togglePart')
    nav.appendChild(togglepart)

    
    const gridcontainer = document.createElement('div')
    gridcontainer.classList.add('gridcontainer')
    togglepart.appendChild(gridcontainer)

    const itemlist = ['a','b','c','d','e']
    itemlist.forEach(item=>{
        const createitem = document.createElement('div')   
        createitem.classList.add('item')
        gridcontainer.appendChild(createitem)    

    })
    document.querySelector('.try').appendChild(nav)
}
createDropDownMenu()