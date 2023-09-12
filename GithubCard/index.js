
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/





/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/

function github(image , name,bio,fllowe) {


  // crate elemnet you need 

  let main = document.createElement("div")
  let GITHUBIMGE = document.createElement("img")
  let seconde = document.createElement("div")

  let h3 =   document.createElement("h3")
  let p =   document.createElement("p")
  let puser =   document.createElement("p")

  let puserfllowe =   document.createElement("p")




  //  waa isku xuaray waxa samysaty
 

  main.appendChild(GITHUBIMGE)
  main.append(seconde)
  main.append(h3)
  main.append(p)
  main.appendChild(puser)
  main.appendChild(puserfllowe)
  console.log(main)
  seconde.appendChild(h3)
  seconde.appendChild(p)
  seconde.appendChild(puser)
  seconde.appendChild(puserfllowe)
  



// calss ama css baa ku adaray



  main.classList.add("card")
  seconde.classList.add("card-info")

  p.classList.add("username")
  h3.classList.add("name")



  

  // wxaan isku xiray ilemnte sameyy iyo parametr function
  
GITHUBIMGE.src = image
p.textContent = name
puser.textContent =  bio
puserfllowe.textContent = fllowe



 // ka dibna dhif wayn ba so ciliyy
  return main
 
 
  
}


let usernames = ['Abdrhmaan' , "duraanali" , "	Leoyoon5" , "	Muniir1",'Abdrhmaan' , "duraanali" , "	Leoyoon5" , "	Muniir1"] 


let card = document.querySelector(".cards")


 usernames.forEach((username) => {
  axios.get(`https://api.github.com/users/${username}`).then((res) => {
  console.log(res.data
    )
    let xaan = res.data.avatar_url
    let name = res.data.login
    let bio = res.data.bio
    let floowe = res.data.followers




   card.appendChild(github(xaan,name,bio,floowe))

})

 })  






/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = [];

