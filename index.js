const HAMBURGER_ICON = document.getElementById('hamburger');
const NAVIGATION = document.getElementById('header__navigation');
const NAV_LINK = document.querySelectorAll('.nav__link');
const LIST_WRAPPER = document.querySelector('.list-wrapper');
const petCard = LIST_WRAPPER.getElementsByClassName('pet');
const PREV_ARROW = document.querySelector('.prev-arrow_main');
const NEXT_ARROW = document.querySelector('.next-arrow_main');

const data =  [
    {id: 1, imgUrl: "./src/assets/ourFriends/pets-katrine.png", name: "Katrine", type: "Cat - British Shorthair", description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."},
    {id: 2, imgUrl: "./src/assets/ourFriends/pets-jennifer.png", name: "Jennifer", type: "Dog - Labrador", description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."},
    {id: 3, imgUrl: "./src/assets/ourFriends/pets-woody.png", name: "Woody", type: "Dog - Golden Retriever", description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him."},
    {id: 4, imgUrl: "./src/assets/ourFriends/pets-sophia.png", name: "Sophia", type: "Dog - Shih tzu", description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice."},
    {id: 5, imgUrl: "./src/assets/ourFriends/pets-timmy.png", name: "Timmy", type: "Cat - British Shorthair", description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with."},
    {id: 6, imgUrl: "./src/assets/ourFriends/pets-charly.png", name: "Charly", type: "Dog - Jack Russell Terrier ", description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy."},
    {id: 7, imgUrl: "./src/assets/ourFriends/pets-scarlet.png", name: "Scarlet", type: "Dog - Jack Russell Terrier ", description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human."},
    {id: 8, imgUrl: "./src/assets/ourFriends/pets-freddie.png", name: "Freddy", type: "Dog - Jack Russell Terrier ", description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home."},
]

HAMBURGER_ICON.addEventListener('click', ()=>{
    toggleNav()
    toggleHamburger()
})
window.addEventListener('click', (e)=>{
    if(e.target == NAVIGATION){
        toggleNav()
        toggleHamburger()
    }
})

function toggleNav(){
    NAVIGATION.classList.toggle('show_nav')
}

function toggleHamburger(){
    HAMBURGER_ICON.classList.toggle('hamburger-toggled');
}

NAV_LINK.forEach(element => {
    element.addEventListener('click', toggleNav)
});

// draw pets grid

data.map(pet => {
    LIST_WRAPPER.innerHTML +=`
                                <div key=${pet.id} class="pet">
                                    <img class="pet-image" src=${pet.imgUrl} alt="">
                                    <p class="pet-name">${pet.name}</p>
                                    <a class="button button_bordered" href="#">Learn more</a>
                                </div>
                              `
})


// Carousel

NEXT_ARROW.addEventListener('click', ()=>{
    LIST_WRAPPER.append(petCard[0])
})

PREV_ARROW.addEventListener('click', ()=>{
    LIST_WRAPPER.prepend(petCard[petCard.length -1])
})
