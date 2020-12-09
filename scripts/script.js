let footer = document.querySelector('Footer')
footer.style.display = 'none';

for (let num = 0; num < 5; num++){
    let div = document.querySelector('div')
    let newImage = document.createElement('img')
    newImage.setAttribute('src', 'images/pic' + (num+1) + '.jpg')
    newImage.setAttribute('alt', 'pic' + (num+1) + '.jpg')
    div.append(newImage)
}

function hoverImage(){
    let displayImage = document.querySelector('.displayed-img')
    displayImage.setAttribute('src') = ''
    displayImage.setAttribute('alt') = ''
}
