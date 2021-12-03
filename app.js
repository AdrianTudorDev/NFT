document.addEventListener('DOMContentLoaded', () => {
    let size = document.querySelector('.size')
    let button32x32 =document.querySelector('.button32x32')
    let button64x64 = document.querySelector('.button64x64')
    let colorsGrid = document.querySelector('.colors')
    let backGround = document.querySelector('.background')
    let clear = document.querySelector('.clear')
    let save = document.querySelector('.save')
    let resolution
    let currentColor = 'black'
    let currentColor2 = 'white'
    let customColor = document.querySelector('.custom-color')
    let x
    let y
    //press button 32
    button32x32.addEventListener('click', () => {
        resolution = 32
        createPicture()
        createColorsGrid()
    })
    //press button 64
    button64x64.addEventListener('click', () => {
        resolution = 64
        createPicture()
        createColorsGrid()
    })
    //create working area
    function createPicture() { 
        size.innerHTML = '' 
        if(resolution === 32){           
            for (let i = 0; i < resolution ** 2; i++) {
                let div = document.createElement('div')
                div.id = 'size_32x32'
                size.appendChild(div)
            } 
        } else if(resolution === 64){ 
            for (let i = 0; i < resolution ** 2; i++) {
                let div = document.createElement('div')
                div.id = 'size_64x64'
                size.appendChild(div)
            }  
        }      
    }
    //create colors grid
    function createColorsGrid(){
        colorsGrid.innerHTML = ''
        let divCurrentColorGrid = document.createElement('div')
        divCurrentColorGrid.classList.add('current-color')
        divCurrentColorGrid.style.backgroundColor = currentColor
        colorsGrid.appendChild(divCurrentColorGrid)
        let divCurrentColorGrid2 = document.createElement('div')
        divCurrentColorGrid2.classList.add('current-color')
        divCurrentColorGrid2.style.backgroundColor = currentColor2
        colorsGrid.appendChild(divCurrentColorGrid2)
        let backGroundColors = [
            'black', 'white', 'none',
            'gray', 'lightgray', 'none',
            'rgb(102, 0, 0)', 'brown', 'none',
            'red', 'rgb(255, 179, 179)', 'none',
            'rgb(255, 128, 0)', 'rgb(255, 191, 128)', 'none',
            'rgb(255, 255, 0)', 'rgb(255, 255, 179)', 'none',
            'rgb(0, 153, 51)', 'lightgreen', 'none',
            'rgb(0, 191, 255)', 'rgb(179, 236, 255)', 'none',
            'indigo', 'rgb(179, 102, 255)', 'none',
            'purple', 'rgb(224, 179, 255)', 'none'
        ]
        for (let i = 0; i < 30; i++) {
            let  div = document.createElement('div')
            div.id = 'color'
            div.style.backgroundColor = backGroundColors[i]
            colorsGrid.appendChild(div)
        } 
    }
    //add color to a square
    size.addEventListener('click', (event) => {
        event.preventDefault()
        let xAbsolute = event.clientX;
        let yAbsolute = event.clientY;
        x = xAbsolute - 101
        y = yAbsolute - 80
        if (resolution === 32) {
            size.childNodes[(Math.floor(x / 26) + Math.floor(y / 26) * resolution)].style.backgroundColor = currentColor
        } else if (resolution === 64) {
            size.childNodes[(Math.floor(x / 13) + Math.floor(y / 13) * resolution)].style.backgroundColor = currentColor
        }
    })
    //add color2 to a square 
    size.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        let xAbsolute = event.clientX;
        let yAbsolute = event.clientY;
        x = xAbsolute - 101
        y = yAbsolute - 80
        if (resolution === 32) {
            size.childNodes[(Math.floor(x / 26) + Math.floor(y / 26) * resolution)].style.backgroundColor = currentColor2
        } else if (resolution === 64) {
            size.childNodes[(Math.floor(x / 13) + Math.floor(y / 13) * resolution)].style.backgroundColor = currentColor2
        }
    })
    // delete a square
    size.addEventListener('auxclick', (event) => {
        event.preventDefault()
        let xAbsolute = event.clientX;
        let yAbsolute = event.clientY;
        x = xAbsolute - 101
        y = yAbsolute - 80
        if (resolution === 32) {
            size.childNodes[(Math.floor(x / 26) + Math.floor(y / 26) * resolution)].style.backgroundColor = ''
        } else if (resolution === 64) {
            size.childNodes[(Math.floor(x / 13) + Math.floor(y / 13) * resolution)].style.backgroundColor = ''
        }
    })
    //change current color
    colorsGrid.addEventListener('click', (event) => {
        event.preventDefault()
        let xAbsolute = event.clientX;
        let yAbsolute = event.clientY;
        x = xAbsolute + 10
        y = yAbsolute - 310      
        currentColor = colorsGrid.childNodes[1 + (Math.floor(x / 24) + Math.floor(y / 24) * 3)].style.backgroundColor
        colorsGrid.childNodes[0].style.backgroundColor = currentColor
    })    
    //change current color 2
    colorsGrid.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        let xAbsolute = event.clientX;
        let yAbsolute = event.clientY;
        x = xAbsolute + 10
        y = yAbsolute - 310      
        currentColor2 = colorsGrid.childNodes[1 + (Math.floor(x / 24) + Math.floor(y / 24) * 3)].style.backgroundColor
        colorsGrid.childNodes[1].style.backgroundColor = currentColor2
    })      
    //change background color
    colorsGrid.addEventListener('dblclick', (event) => {
        event.preventDefault()
        let xAbsolute = event.clientX;
        let yAbsolute = event.clientY;
        x = xAbsolute + 10
        y = yAbsolute - 310      
        backGround.style.backgroundColor = colorsGrid.childNodes[1 + (Math.floor(x / 24) + Math.floor(y / 24) * 3)].style.backgroundColor
    })    
    //apply new background color
    backGround.addEventListener('click', () => {
        size.style.backgroundColor = backGround.style.backgroundColor
    })
    //define new color
    customColor.addEventListener('change', (e) =>{
        let newColor = e.target.value
        if (colorsGrid.childNodes[4].style.backgroundColor === ''){
            colorsGrid.childNodes[4].style.backgroundColor = newColor
            colorsGrid.childNodes[7].style.backgroundColor = '' 
        } else if(colorsGrid.childNodes[7].style.backgroundColor === ''){
            colorsGrid.childNodes[7].style.backgroundColor = newColor
            colorsGrid.childNodes[10].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[10].style.backgroundColor === ''){
            colorsGrid.childNodes[10].style.backgroundColor = newColor
            colorsGrid.childNodes[13].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[13].style.backgroundColor === ''){
            colorsGrid.childNodes[13].style.backgroundColor = newColor
            colorsGrid.childNodes[16].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[16].style.backgroundColor === ''){
            colorsGrid.childNodes[16].style.backgroundColor = newColor
            colorsGrid.childNodes[19].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[19].style.backgroundColor === ''){
            colorsGrid.childNodes[19].style.backgroundColor = newColor
            colorsGrid.childNodes[22].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[22].style.backgroundColor === ''){
            colorsGrid.childNodes[22].style.backgroundColor = newColor
            colorsGrid.childNodes[25].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[25].style.backgroundColor === ''){
            colorsGrid.childNodes[25].style.backgroundColor = newColor
            colorsGrid.childNodes[28].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[28].style.backgroundColor === ''){
            colorsGrid.childNodes[28].style.backgroundColor = newColor
            colorsGrid.childNodes[31].style.backgroundColor = ''
        } else if(colorsGrid.childNodes[31].style.backgroundColor === ''){
            colorsGrid.childNodes[31].style.backgroundColor = newColor
            colorsGrid.childNodes[4].style.backgroundColor = ''
        }
    });
    //clear working area
    clear.addEventListener('click', () => {
        size.style.backgroundColor = ''
        backGround.style.backgroundColor = ''
        for( let i = 0; i < resolution ** 2; i++){
            size.childNodes[i].style.backgroundColor = ''
            size.childNodes[i].style.border = 'solid black 1px'
        }
        currentColor = 'black'
        colorsGrid.childNodes[0].style.backgroundColor = currentColor
    })
    //save NFT
    save.addEventListener('click', () => {
        for( let i = 0; i < resolution ** 2; i++){
            size.childNodes[i].style.border= 'solid rgba(255,255,255,.0) 1px'
        }
        const linkElement = document.querySelector('#dl-link'); 
        html2canvas(size).then(canvas => {
            linkElement.href = canvas.toDataURL('image/png');
            linkElement.download = 'NFT.png';
            linkElement.click();                
        })
   }) 
   //draw-line
})

