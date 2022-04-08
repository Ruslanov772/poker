import './App.css';
import {Component} from "react";
import Card from './components/Card/Card';
import CardDeck from "./components/Card/CardDeck";
import PokerHand from "./components/Card/PokerHand";

class App extends Component {

    state = {
        cards: [],
        result : ''
    };

    generateCards = () => {
        const cardDeck = new CardDeck();
        const cards = cardDeck.getCards(5);
        this.setState({
            cards
        });

        const hand = new PokerHand(cards);
        const handResult = hand.getOutcome();
        this.setState({
            result : handResult
        });
    }

    render() {
        const cards = this.state.cards.map((card, i) => (
            <Card key={i} suit={card.suit} rank={card.rank}/>
        ));

        return (
            <div className="App">
                <button className="btn-cards" onClick={this.generateCards}>Generate cards</button>
                <div className="cards">
                    {cards}
                </div>
                <div>
                    {this.state.result}
                </div>
            </div>
        );
    }
}

export default App;
