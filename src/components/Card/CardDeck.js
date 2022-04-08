import Suit from "./Suit";
import Rank from "./Rank";

class CardDeck {
    constructor() {
        this.cards = [];
        this.suit = new Suit();
        this.rank = new Rank();
        Object.keys(this.suit.suits).forEach(key => {
            this.rank.ranks.forEach((rank) => {
                this.cards.push({suit: key, rank});
            });
        });
    }

    getCard() {
        const randomNumber = Math.floor(Math.random() * this.cards.length);
        const [card] = this.cards.splice(randomNumber, 1);
        return card;
    }

    getCards(howMany) {
        const cards = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;