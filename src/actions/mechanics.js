export const resetRoll = () => {
  return { type: 'RESET_ROLL' }
}

export const startNewGame = () => {
  return { type: 'START_NEW_GAME' }
}

export const rollDice = (currentDice, keep) => {
  return (dispatch) => {
    let dice = currentDice.map( (el, i) => {
      if (keep.includes(i))
        return el
      return Math.floor(Math.random() * 6) + 1
    });
    dispatch({ type: 'ROLL_DICE', dice });
  }
}

export const updateScores = (scores) => {
  return { type: 'UPDATE_SCORES', scores }
}

export const toggleKept = (currentKeep, index) => {
  return (dispatch) => {
    let keep;
    if (currentKeep.includes(index))
      keep = currentKeep.filter( k => k !== index )
    else
      keep = [...currentKeep, index]
    dispatch({ type: 'TOGGLE_KEPT', keep });
  }
}
