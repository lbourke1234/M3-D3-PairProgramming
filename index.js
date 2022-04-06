
window.onload = () => {
    let btnNode = document.querySelector('.container>p>a.btn-primary')
    btnNode.addEventListener('click', loadImages)
    let btnNodeSecondary = document.querySelector('.container>p>a.btn-secondary')
    btnNodeSecondary.addEventListener('click', loadSecondaryImages)
    makeEditBtnHideBtn()

    let btnNodeHide = document.querySelectorAll('.btn-group > button.btn-sm:last-of-type')
    btnNodeHide.forEach(btn => {
        btn.addEventListener('click', hideCardBtn)
    })
    replace9MinsWithID ()
}
// 1) When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]


function loadImages() {
    fetch("https://api.pexels.com/v1/search?query=Nature", {
        headers: {
            Authorization: "Bearer 563492ad6f917000010000013f2896b62ab44486bb25056553521451"
        }
    }).then((response) => response.json())
    .then((songs) => {
    let photos = songs.photos
    // console.log(photos)

        let cardNode = document.querySelectorAll('.card')
        // console.log(cardNode)
        let svgNode = document.querySelectorAll('.bd-placeholder-img')
        // console.log(svgNode)

        for (let i = 0; i < photos.length; i++) {
 
            let albumPhoto = photos[i].src.original
            console.log(albumPhoto)

            let imgNode = document.createElement('img')
            imgNode.setAttribute("src", albumPhoto);
            imgNode.setAttribute("style", "height: 225px");
            // console.log(cardNode[i])
            // console.log(imgNode)
            // console.log(svgNode[i])
            cardNode[i].replaceChild(imgNode, svgNode[i]) 
        }

    }).catch(err => console.log(err))
}

// let svgNode = document.querySelectorAll('.bd-placeholder-img')[0]
// console.log(svgNode)

// let cardNode = document.querySelectorAll('.card')[0]
// console.log(cardNode)

// let imgNode = document.createElement('img')
// imgNode.setAttribute("src", "france.jpg");
// imgNode.setAttribute("style", "height: 225px");

// cardNode.replaceChild(imgNode, svgNode)

// 2) When pressing on Load Seconday Images, load the pictures from https://api.pexels.com/v1/search?query=[your-secondary-query]

function loadSecondaryImages () {
    fetch("https://api.pexels.com/v1/search?query=Landscape" , {
    headers: {

        Authorization: "Bearer 563492ad6f917000010000013f2896b62ab44486bb25056553521451"
    }
    }).then(response => response.json())
    .then(body => {
        // console.log(body.photos)
        

            let cardNode = document.querySelectorAll('.card')
            // console.log(cardNode)
            let svgNode = document.querySelectorAll('.bd-placeholder-img')
            // console.log(svgNode)

        for (let i = 0; i < body.photos.length; i++) {
 
            console.log(body.photos[i].src.original)
                let photoSrc = body.photos[i].src.original
                // console.log(photo)

                let albumPhoto = photoSrc
                // console.log(albumPhoto)

                let imgNode = document.createElement('img')
                imgNode.setAttribute("src", photoSrc);
                imgNode.setAttribute("style", "height: 225px");
                // console.log(cardNode[i])
                // console.log(imgNode)
                // console.log(svgNode[i])
                cardNode[i].replaceChild(imgNode, svgNode[i]) 
        }
    }).catch(err => console.log(err))
}

// 3) The Edit button should be replaced with a "Hide" button. 

function makeEditBtnHideBtn() {
    let btnNode = document.querySelectorAll('.btn-group > button.btn-sm:last-of-type')
    btnNode.forEach(btn => {
        btn.innerText = 'Hide'
    })
}

// 4) When the hide button is pressed, the whole picture card should disappear.

function hideCardBtn (event) {
    let cardNode = document.querySelectorAll('.card')
    // console.log(event.target.closest('.card'))
    event.target.closest('.card').classList.add('hidden')

    event.target.classList.toggle('hidden')
    
}

// 5) Replace the "9 mins" string in the card template with the ID of the Image

function replace9MinsWithID () {
    fetch('https://api.pexels.com/v1/search?query=Nature', {
        headers: {
            Authorization: "Bearer 563492ad6f917000010000013f2896b62ab44486bb25056553521451"
        }
    })
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.photos.length; i++ ){

            // console.log(data.photos[0].id)
            data.photos[i]
            // console.log(data.photos[i])
            let textNode = document.querySelectorAll('small')
            textNode[i].innerText = data.photos[i].id
            
        }
})
.catch(err => console.log(err))
}

// 6) Add in the "jumbotron" a search field. Use the value of the search field to search new images and replace the existing ones.

