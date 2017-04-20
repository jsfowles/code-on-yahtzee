import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="container">
    <h2 className="center">About Yahtzee</h2>
    <p>Yahtzee is a dice game made by Milton Bradley (now owned by Hasbro), which was first marketed as "Yatzie" by the National Association Service of Toledo, Ohio, in the early 1940s. Yatzie was included in a game set called "LUCK - 15 Grand Dice Games". It was marketed under the name of Yahtzee by game entrepreneur Edwin S. Lowe in 1956. Lowe is also responsible for introducing Bingo to the U.S. market.[1] The game is a development of earlier dice games such as Poker Dice, Yacht and Generala. It is also similar to Yatzy, which is popular in Scandinavia.
    </p>
    <p>The object of the game is to score points by rolling five dice to make certain combinations. The dice can be rolled up to three times in a turn to try to make various scoring combinations. A game consists of thirteen rounds. After each round the player chooses which scoring category is to be used for that round. Once a category has been used in the game, it cannot be used again. The scoring categories have varying point values, some of which are fixed values and others where the score depends on the value of the dice. A Yahtzee is five-of-a-kind and scores 50 points; the highest of any category. The winner is the player who scores the most points.
    </p>
    <p>Yahtzee was marketed by the E.S. Lowe Company from 1956 till 1973. In 1973, the Milton Bradley Company purchased the E.S. Lowe Company and assumed the rights to produce and sell Yahtzee. During Lowe's ownership over 40 million Yahtzee games were sold worldwide. The game has maintained its popularity. According to current owner Hasbro, 50 million Yahtzee games are sold each year. A classic edition is currently being marketed by Winning Moves.
    </p>
    <Link className="center" to="/rules">See Rules</Link>
  </div>
)

export default About;
