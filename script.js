const handleSubmit = (e) => {
  e.preventDefault()
  const firstName = document.querySelector('.first-name').value
  const lastName = document.querySelector('.last-name').value
  const combineName = firstName + lastName
  const name = combineName.split('')
  netWorth = generateNumber(name)
  displayGuessSection()
  document.querySelector('.name-form').style.display='none'
  return netWorth
}

document.querySelector('.enter-btn').addEventListener('click', handleSubmit)

generateNumber = (name) => {
  const vowelValues = {
    a: 1,
    e: 1,
    i: 3,
    o: 2,
    u: 3
  }

  const totalSum = name.reduce((sum, letter) => {
    if (!vowelValues[letter]) {
      sum += 0
    } else {
      sum += vowelValues[letter]
    }
    return sum
  }, 0) * 5
  console.log(totalSum)
  return totalSum
}

handleGuess = (e) => {
  e.preventDefault()
  if (e.target.classList.contains('guess-btn')) {
    var feedback = document.querySelector('.feedback')
    const guessInput = parseInt(document.querySelector('.guess-input').value) 
    if (guessInput > netWorth) {
      feedback.innerText = `Keep dreaming, That's too high! Guess again`
    } else if (guessInput < netWorth) {
      feedback.innerText = `Good news, that\'s that's too low! Guess again`
    } else {
      feedback.innerText = `That's correct! What a fortune! Now go earn your millions`
    }
  } else if (e.target.classList.contains('restart-btn')) {
      location.reload();
  }
}

document.querySelector('.guess-section').addEventListener('click', handleGuess)

displayGuessSection = () => {
    document.querySelector('.guess-section').innerHTML = 
    ` <p class="enter-p">Guess your predicted net worth below!</p>
    <form class="guess-form">
      <p class="worth-p">I'll be worth</p>
      <input  type="number"
              class='guess-input'
              name='guess-input'
      >
      <p class="million-p">million dollars</p>
      <button class="guess-btn btn">Enter</button>
    </form>
    <p class="feedback"></p> 
    <form class="restart-form">
      <button class="restart-btn btn">Restart</button> 
    </form> `
}