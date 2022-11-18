function cardCollapse(){
    const cards = document.querySelectorAll('[data-bs-toggle]')
      
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const target = document
                        .querySelector(card.dataset.cardValue);
      
                    cardInfos.forEach(cardInfo => {
                        cardInfo.classList.add('collapsed')
                    })
                    target.classList.add('collapsed');
                })
            })
        }