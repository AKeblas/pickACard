const main = document.querySelector(".main")
const main2 = document.querySelector(".main2")
const main3 = document.querySelector(".main3")


function getAll (){
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(posts => {
            posts.data.map(user => {
                main.innerHTML += `
            <div class="box">
                <h1 class="btn ${user.username}">${user.username}</h1>
                <h2>${user.title}</h2>
                <img class="${user.id} ${user.username}" src="${user.image}" alt="">
                <p>${user.description}</p>
                <h3>${user.id}</h3>
                <p>${user.timestamp}</p>
            </div>
            `

            })

            const imgs = document.querySelectorAll("img")
            let userName3 = ""
            let userId3 = ""
            imgs.forEach((el)=>{
                el.onclick = (event) => {
                    console.log(event)
                    main.innerHTML = ""
                    userName3 = event.target.classList[1]
                    userId3 = event.target.classList[0]
                    fetch("http://167.99.138.67:1111/getsinglepost/" + userName3 + "/" + userId3)
                        .then(res => res.json())
                        .then(user => {
                            main.innerHTML = `
                     <div class="box">
                         <h1 class="btn ${user.data.username}">${user.data.username}</h1>
                         <h2>${user.data.title}</h2>
                         <img src="${user.data.image}" alt="">
                         <p>${user.data.description}</p>
                         <h3>${user.data.id}</h3>
                         <p>${user.data.timestamp}</p>
                     </div>
                     `
                        })
                }
            })



        })
}

