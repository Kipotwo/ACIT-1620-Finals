let footer = document.querySelector('Footer')
footer.style.display = 'none';

for (let num = 0; num < 5; num++){
    let div = document.querySelector('div')
    let newImage = document.createElement('img')
    newImage.setAttribute('src', 'images/pic' + (num+1) + '.jpg')
    newImage.setAttribute('alt', 'pic' + (num+1) + '.jpg')
    div.append(newImage)
    newImage.addEventListener('mouseover', hoverImage)
}

function hoverImage(event){
    console.log(event.target)
    let displayImage = document.querySelector('.displayed-img')
    let newsrc = event.target.getAttribute('src')
    let newalt = event.target.getAttribute('alt')
    displayImage.setAttribute('src', newsrc)
    displayImage.setAttribute('alt', newalt)
    footer.style.display= 'initial'
}

function clearInput(){
    input.value = '';
}

let input = document.querySelector('input')

let button = document.querySelector('button')

button.addEventListener('click', clearInput)