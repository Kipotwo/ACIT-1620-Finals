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
    let newsrc = event.target.getAttribute('src')
    let newalt = event.target.getAttribute('alt')
    displayImage.setAttribute('src', newsrc)
    displayImage.setAttribute('alt', newalt)
    footer.style.display= 'initial'
}

function inputCheck(){
    toCheck = input.value
    if (toCheck.toLowerCase() === "blur"){
        src = displayImage.getAttribute('src')
        blurredImage = src.slice(0, 11) + 'B' + src.slice(11, 15)
        alt = displayImage.getAttribute('alt')
        blurredAlt = alt.slice(0, 4) + 'B' + alt.slice(4, 8)
        displayImage.setAttribute('src', blurredImage)
        displayImage.setAttribute('alt', blurredAlt)
    }
    else{
        alert('Invalid Input, we only accept "blur"')
    }
    input.value = '';
}

let displayImage = document.querySelector('.displayed-img')

let input = document.querySelector('input')

let button = document.querySelector('button')

button.addEventListener('click', inputCheck)