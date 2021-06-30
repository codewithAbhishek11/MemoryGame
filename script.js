const cards = document.querySelectorAll('.memory-card')
let hasFlipped=false;
let firstCard;
let secondCard;
let lockBoard =false;

    function flipCard(){
       if(lockBoard) return;
       if(this===firstCard) return;
        this.classList.add('flip');

        if(!hasFlipped){
            firstCard = this;
            hasFlipped=true;
        }
        else{
            secondCard =this;
            hasFlipped=false;

            checkMatch();
        }
       

        
    }

    function checkMatch(){
        let ismatch = firstCard.dataset.card === secondCard.dataset.card;     
      
          ismatch?  disableCards(): unflipCards();
    }

    function disableCards(){
        firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click',flipCard);
    }

    function unflipCards(){
        lockBoard = true;
        setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            firstCard =null;
            secondCard =null;
            lockBoard = false;
            },1500)
    }
    
 (function shuffle(){
     cards.forEach(card=>{
        let randomPos = Math.floor(Math.random() *12);
        card.style.order = randomPos;
     });
 })();

cards.forEach((card)=>{
    card.addEventListener('click',flipCard)
})

