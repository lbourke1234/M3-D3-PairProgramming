
window.onload = () => {
    let btnNode = document.querySelector('.container>p>a.btn-primary')
    btnNode.addEventListener('click', loadImages)
    console.log(btnNode)
}
// 1) When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]


function loadImages() {
    fetch("https://api.pexels.com/v1/search?query=cat", {
        headers: {
            Authorization: "Bearer 563492ad6f917000010000013f2896b62ab44486bb25056553521451"
        }
    }).then((response) => response.json())
    .then((songs) => {
    console.log(songs);
    let albums = songs.photos

        let cardNode = document.querySelectorAll('.card')
        let svgNode = document.querySelectorAll('.bd-placeholder-img')

        for (let i = 0; i < cardNode.length; i++) {
            

            let albumPhoto = albums[i].album.cover

            let imgNode = document.createElement('img')
            imgNode.setAttribute("src", albumPhoto);
            imgNode.setAttribute("style", "height: 225px");
            
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

// fetch("https://api.pexels.com/v1/search?query=[your-secondary-query]") , {
//     headers: {

//         Authorization: "Bearer 563492ad6f917000010000013f2896b62ab44486bb25056553521451"
//     }
// }.then(response => response.json())
// .then(info => {
//     console.log(info)
// })