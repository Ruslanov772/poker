import './css/cards.css';
import Suit from "./Suit";

const Card = props => {
    const suit = new Suit();
    const rank = 'rank-' + props.rank.toLowerCase();
    const userSuit = suit.suits[props.suit];
    const cardClassName = "card " + rank + " " + userSuit.name;
    return (
        <div className="playingCards">
            <div className={cardClassName}>
                <span className="rank">{props.rank}</span>
                <span className="suit">{userSuit.symbol}</span>
            </div>
        </div>
    )
};
export default Card;