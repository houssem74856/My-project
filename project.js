const ul = document.querySelector(".items")
const lis = document.querySelectorAll(".item")
const popupMsg = document.querySelector(".normal")
const popupMsgText = document.querySelector("h1")
const popupMsgBtn = document.querySelector(".close2-normal")
const div = document.querySelectorAll(".div")
let bolean = true
let i = 0

ul.addEventListener('click',function(event) { 
    if(event.target.className === 'close') {
        let a = i
        i+=1
        const li = event.target.parentElement.parentElement
        ul.removeChild(li)
        let popupMsgClass = popupMsg.classList
    popupMsg.classList.replace(`${popupMsgClass}`,'red')
    popupMsgBtn.classList.replace('close2-normal','close2-edited')
    popupMsgText.innerText = 'Item successfully deleted!'
    if(popupMsgBtn.firstChild === null) {
        const img = document.createElement('img')
        img.classList.add('img2')
        img.src = 'close2.png'
        img.width = '20'
        popupMsgBtn.appendChild(img)
    }
    setTimeout(function() {
        if(a === i - 1) {
            if (bolean === true) {
            popupMsg.classList.replace('red','normal')
            popupMsgBtn.classList.replace('close2-edited','close2-normal')
            if (popupMsg.className === 'normal') {
                popupMsgText.innerText = ''
                popupMsgBtn.removeChild(popupMsgBtn.firstElementChild)
            }
            }
            else {
                bolean = true
            }
        }
    },3000)
    }
    else if (event.target.parentElement.className === 'close') {
        let a = i
        i+=1
        const li = event.target.parentElement.parentElement.parentElement
        ul.removeChild(li)
        let popupMsgClass = popupMsg.classList
    popupMsg.classList.replace(`${popupMsgClass}`,'red')
    popupMsgBtn.classList.replace('close2-normal','close2-edited')
    popupMsgText.innerText = 'Item successfully deleted!'
    if(popupMsgBtn.firstChild === null) {
        const img = document.createElement('img')
        img.classList.add('img2')
        img.src = 'close2.png'
        img.width = '20'
        popupMsgBtn.appendChild(img)
    }
    setTimeout(function() {
        if(a === i - 1) {
            if (bolean === true) {
            popupMsg.classList.replace('red','normal')
            popupMsgBtn.classList.replace('close2-edited','close2-normal')
            if (popupMsg.className === 'normal') {
                popupMsgText.innerText = ''
                popupMsgBtn.removeChild(popupMsgBtn.firstElementChild)
            }
            }
            else {
                bolean = true
            }
        }
    },3000)
    }
})

popupMsgBtn.addEventListener('click',function() {
    let popupMsgClass = popupMsg.classList
    popupMsgBtn.classList.replace('close2-edited','close2-normal')
    popupMsg.classList.replace(`${popupMsgClass}`,'normal')
    popupMsgBtn.removeChild(popupMsgBtn.firstElementChild)
    popupMsgText.innerText = ''
})

const searchBar = document.forms['search-bar']

searchBar.addEventListener('submit',function(event) {
    event.preventDefault()

    const liTitle = searchBar.querySelector('input[type="text"]').value
    const li = document.createElement('li')
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')

    h2.textContent = liTitle
    div.classList.add('div')
    li.classList.add('item')
    button1.classList.add('modify')
    button2.classList.add('close')
    img1.src = 'pen.png'
    img1.width = '20'
    img2.src = 'close.png'
    img2.width = '20'

    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(h2)
    div.appendChild(button1)
    div.appendChild(button2)
    button1.appendChild(img1)
    button2.appendChild(img2)
})

ul.addEventListener('click',function(event) {  
    if(event.target.className === 'modify') {
    const saveBtn = document.querySelector('.submit2')  
    if(saveBtn === null){
        const li = event.target.parentElement.parentElement
        li.style.height = '120px'
        const form = document.createElement('form')
        const input = document.createElement('input')
        const button = document.createElement('button')

        form.setAttribute('id','title-bar')
        input.classList.add('updated-title')
        input.setAttribute('type','text')
        input.setAttribute('placeholder','My updated description of this todolist item')
        button.classList.add('submit2')
        button.textContent = 'save'

        li.appendChild(form)
        form.appendChild(input)
        form.appendChild(button)

        titleBar = document.forms['title-bar']

        titleBar.addEventListener('submit',function(event) {
            event.preventDefault()

            let a = i
            i+=1
        
            const input = titleBar.querySelector('.updated-title')
            const li = input.parentElement.parentElement
            const title = li.querySelector('h2')
            const value = titleBar.querySelector('input[type="text"]').value
        
            title.textContent = value
            li.removeChild(titleBar)
            li.style.height = '60px'

            let popupMsgClass = popupMsg.classList
            popupMsg.classList.replace(`${popupMsgClass}`,'green')
            popupMsgBtn.classList.replace('close2-normal','close2-edited')
            popupMsgText.innerText = 'Item successfully updated!'
            if(popupMsgBtn.firstChild === null) {
                const img = document.createElement('img')
                img.classList.add('img2')
                img.src = 'close2.png'
                img.width = '20'
                popupMsgBtn.appendChild(img)
            }
            setTimeout(function() {
                if(a === i - 1) {
                    if (bolean === true) {
                    popupMsg.classList.replace('green','normal')
                    popupMsgBtn.classList.replace('close2-edited','close2-normal')
                    if (popupMsg.className === 'normal') {
                        popupMsgText.innerText = ''
                        popupMsgBtn.removeChild(popupMsgBtn.firstElementChild)
                    }
                    }
                    else {
                        bolean = true
                    }
                }
            },3000)
        })
    }
}
else if(event.target.parentElement.className === 'modify') {
    const saveBtn = document.querySelector('.submit2')  
    if(saveBtn === null){
        const li = event.target.parentElement.parentElement.parentElement
        li.style.height = '120px'
        const form = document.createElement('form')
        const input = document.createElement('input')
        const button = document.createElement('button')

        form.setAttribute('id','title-bar')
        input.classList.add('updated-title')
        input.setAttribute('type','text')
        input.setAttribute('placeholder','My updated description of this todolist item')
        button.classList.add('submit2')
        button.textContent = 'save'

        li.appendChild(form)
        form.appendChild(input)
        form.appendChild(button)

        titleBar = document.forms['title-bar']

        titleBar.addEventListener('submit',function(event) {
            event.preventDefault()

            let a = i
            i+=1
        
            const input = titleBar.querySelector('.updated-title')
            const li = input.parentElement.parentElement
            const title = li.querySelector('h2')
            const value = titleBar.querySelector('input[type="text"]').value
        
            title.textContent = value
            li.removeChild(titleBar)
            li.style.height = '60px'

            let popupMsgClass = popupMsg.classList
            popupMsg.classList.replace(`${popupMsgClass}`,'green')
            popupMsgBtn.classList.replace('close2-normal','close2-edited')
            popupMsgText.innerText = 'Item successfully updated!'
            if(popupMsgBtn.firstChild === null) {
                const img = document.createElement('img')
                img.classList.add('img2')
                img.src = 'close2.png'
                img.width = '20'
                popupMsgBtn.appendChild(img)
            }
            setTimeout(function() {
                if(a === i - 1) {
                    if (bolean === true) {
                    popupMsg.classList.replace('green','normal')
                    popupMsgBtn.classList.replace('close2-edited','close2-normal')
                    if (popupMsg.className === 'normal') {
                        popupMsgText.innerText = ''
                        popupMsgBtn.removeChild(popupMsgBtn.firstElementChild)
                    }
                    }
                    else {
                        bolean = true
                    }
                }
            },3000)
        })
    }
}
})