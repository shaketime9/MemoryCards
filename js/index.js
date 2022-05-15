const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 7;
// Привязываем текст
playerLivesCount.textContent = playerLives;

//Работа с данными
const getData = () => [
    {imgSrc: "./assets/images/crabcard.svg", name: "crab"},
    {imgSrc: "./assets/images/tigercard.svg", name: "tiger"},
    {imgSrc: "./assets/images/frogcard.svg", name:"frog"},
    {imgSrc: "./assets/images/ladybugcard.svg", name: "ladybug"},
    {imgSrc: "./assets/images/pigcard.svg", name: "pig"},
    {imgSrc: "./assets/images/dogcard.svg", name: "dog"},
    {imgSrc: "./assets/images/crabcard.svg", name: "crab"},
    {imgSrc: "./assets/images/tigercard.svg", name: "tiger"},
    {imgSrc: "./assets/images/frogcard.svg", name:"frog"},
    {imgSrc: "./assets/images/ladybugcard.svg", name: "ladybug"},
    {imgSrc: "./assets/images/pigcard.svg", name: "pig"},
    {imgSrc: "./assets/images/dogcard.svg", name: "dog"},

];

// Рандомность карточек
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random()- 0.5);
    return cardData;
};


// создание карточек
const cardGenerator = () => {
    const cardData = randomize();

 cardData.forEach((item) => {
    const card = document.createElement("div");
    const front = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    front.classList = "front";
    back.classList = "back";
    //Добавляем данные для карточек
    front.src = item.imgSrc;
    card.setAttribute("name", item.name)
    //Добовляем карточки к секции
    section.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    //Вызываем анимацию переворота карточки.
    card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
    })
});
};
//Проверка карточек на сходство 
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')
    //Логика проверки
    if(flippedCards.length === 2 ) {
        if(
            flippedCards[0].getAttribute("name") === 
            flippedCards[1].getAttribute("name")
    ){
         flippedCards.forEach(card =>{
             card.classList.remove("flipped");
             card.style.pointerEvents = "none";
         })
        } else {
          flippedCards.forEach(card => {
              card.classList.remove('flipped');
             setTimeout(() => card.classList.remove('toggleCard'), 1000);
          })
          playerLives--;
          playerLivesCount.textContent = playerLives;
          if (playerLives === 0){
              alert("You Lose 😰, press Ok to restart");
              location.reload();
          }
        }
        //Проверка на победу
        if(toggleCard.length === 12){
            alert("You win 🤑 , press Ok to restart")
            location.reload()
        }
    }


};
    


cardGenerator();
