class PokerHand {
    constructor(cardArray) {
        this.cards = cardArray
    }

    pair(arrayToCheck) {
        let rank = 0;
        for(let i = 0; i < arrayToCheck.length; i++) {
            const copyCards = [...arrayToCheck];
            const [card] = copyCards.splice(i,1);
            for(let j = 0; j < copyCards.length; j++) {
                if(card.rank === copyCards[j].rank) {
                    rank = card.rank;
                    return {rank, found: true};
                }
            }
        }
        return {rank, found: false};
    }

    twoPair() {
        const onePair = this.pair(this.cards);
        if(onePair.found) {
            const filteredArray = this.cards.filter(card => card.rank !== onePair.rank);
            if (this.pair(filteredArray).found) {
                return 'two Pairs';
            } else {
                return 'one Pair';
            }
        } else {
            return 'nothing'
        }
    }

    threeOfAKind(arrayToCheck) {
        let rank = 0;
        for(let i = 0; i < arrayToCheck.length; i++) {
            const copyCards = [...arrayToCheck];
            const [card] = copyCards.splice(i,1);
            for(let j = 0; j < copyCards.length; j++) {
                if(card.rank === copyCards[j].rank) {
                    const copyOfCopyCards = [...copyCards];
                    const [secondCard] = copyOfCopyCards.splice(j, 1);
                    for (let k = 0; k < copyOfCopyCards.length; k++) {
                        if(secondCard.rank === copyOfCopyCards[k].rank) {
                            rank = secondCard.rank;
                            return {rank, found: true}
                        }
                    }
                }
            }
        }
        return {rank, found: false};
    }

    flush() {
        const suit = this.cards[0].suit;
        const filteredArray = this.cards.filter(card => card.suit === suit);
        return filteredArray.length === this.cards.length;
    }

    getOutcome() {
        if(this.flush()) {
            return 'flush';
        }  else if(this.threeOfAKind(this.cards).found) {
            return 'threeOfAKind';
        } else {
            return this.twoPair();
        }
    }
}

export default PokerHand;