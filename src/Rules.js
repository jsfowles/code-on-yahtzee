import React from 'react';
import scorecard from './images/scorecard.jpg'

const Rules = () => (
  <div className="container">
    <h2 className="center">Rules</h2>
    <p>The game consists of a number of rounds. In each round, a player gets three rolls of the dice, although they can choose to end their turn after one or two rolls. After the first roll the player can save any dice they want and re-roll the other dice. This procedure is repeated after the second roll. The player has complete choice as to which dice to roll. They can re-roll a die for the third roll that was not rolled on the second roll.
    </p>
    <p>The Yahtzee scorecard contains 13 different category boxes and in each round, after the third roll, the player must choose one of these categories. The score entered in the box depends on how well the five dice match the scoring rule for the category. Details of the scoring rules for each category are given below. As an example, one of the categories is called Three of a Kind. The scoring rule for this category means that a player only scores if at least three of the five dice are the same value. The game is completed after 13 rounds by each player, with each of the 13 boxes filled. The total score is calculated by summing all thirteen boxes, together with any bonuses.
    </p>
    <p>The Yahtzee scorecard contains 13 scoring boxes divided between two sections: the upper section and the lower section.
    </p>
    <img src={scorecard} />
  </div>
)

export default Rules;
