let users = [
    {
        id:1,
        img: "zzz",
        name: "Imran",
        phone: "1111",
        email: "12@mail.com"
    },
    {
        id:2,
        img: "zzz",
        name: "Zamir",
        phone: "1111",
        email: "12@mail.com"
    },
    {
        id:3,
        img: "zzz",
        name: "Ali",
        phone: "1111",
        email: "12@mail.com"
    },
]

if (JSON.parse(localStorage.getItem('users'))===null) {
    localStorage.setItem("users",JSON.stringify(users))
}

let body = document.getElementById("body")


function writer(){
    let arr = JSON.parse(localStorage.getItem("users"))
    arr.forEach(e => {
        body.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <p class="card-text">${e.email}</p>
                <a onclick=navigatePage(${e.id}) class="btn btn-primary">Edit</a>
            </div>
        </div>
        `
       });
}

function navigatePage(id){
    let arr = JSON.parse(localStorage.getItem("users")) 
    let item = arr.find(e=> e.id === id)
    localStorage.setItem("current",JSON.stringify(item))
    window.location.href = "edit.html"
}

writer()





