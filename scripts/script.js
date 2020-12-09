let footer = document.querySelector('Footer')
footer.style.display = 'none';

let images = document.querySelectorAll('img') 

function hoverImage(){
    let displayImage = document.querySelector('.displayed-img')
    displayImage.setAttribute('src') = ''
    displayImage.setAttribute('alt') = ''
}

images.addEventListener('mouseover', hoverImage)