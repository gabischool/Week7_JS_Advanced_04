function gitmaker(data) {

  //step1: create elements
const mainCard = document.createElement('div')
const Profileimage = document.createElement('img')
const info = document.createElement('div')
const Profilename = document.createElement('h3')
const username = document.createElement('p')
const location = document.createElement('p')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')


//step2: connect elements
mainCard.appendChild(Profileimage)
mainCard.appendChild(info)
info.appendChild(Profilename)
info.appendChild(username)
info.appendChild(location)
info.appendChild(followers)
info.appendChild(following)
info.appendChild(bio)

//step3: connect to css using classlist

  mainCard.classList.add("card")
  info.classList.add("card-info")
  Profilename.classList.add("name")
  username.classList.add("username")

  //step4: add content  
    Profileimage.src= data.avatar_url 
    Profilename.textContent = data.name
    username.textContent = data.login
    location.textContent = "location: "+data.location
    followers.textContent = "followers: "+data.followers
    following.textContent = "following: "+data.following
    bio.textContent = "bio: "+ data.bio



    return mainCard

}


// Fetching all data
let Teacher = document.querySelector(".cards")
const FetchingTeacherDuraan = async()=>{
const request = await fetch("https://api.github.com/users/duraanali");
const response = await request.json();
Teacher.appendChild(gitmaker(response))
};

let Me = document.querySelector(".cards")
const FetchingMe = async()=>{
const request = await fetch("https://api.github.com/users/Cleverprogramer");
const response = await request.json();
Me.appendChild(gitmaker(response))
};

let MyFreinds1 = document.querySelector(".cards")
const FetchingMyFreinds1 = async()=>{
  const request = await fetch("https://api.github.com/users/Miirshe");
  const response = await request.json();
  MyFreinds1.appendChild(gitmaker(response))
};

let MyFreinds2 = document.querySelector(".cards")
const FetchingMyFreinds2 = async()=>{
  const request = await fetch("https://api.github.com/users/yaasiinaxmed");
  const response = await request.json();
  MyFreinds2.appendChild(gitmaker(response))
};


// calling all functions

FetchingTeacherDuraan();
FetchingMe();
FetchingMyFreinds1();
FetchingMyFreinds2();