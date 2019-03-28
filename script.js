const handleSubmit = (e) => {
  e.preventDefault()
  const firstName = document.querySelector('.first-name').value
  const lastName = document.querySelector('.last-name').value
  const combineName = firstName + lastName
  const name = combineName.split('')
  netWorth = generateNumber(name)
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
  var feedback = document.querySelector('.feedback')
  console.log('feedback', feedback)
  const guessInput = parseInt(document.querySelector('.guess-input').value) 
  if (guessInput > netWorth) {
    feedback.innerText = `Keep dreaming, That's too high! Guess again`
  } else if (guessInput < netWorth) {
    feedback.innerText = `Good news, that\'s that's too low! Guess again`
  } else {
    feedback.innerText = `That's correct! What a fortune! Now go earn your millions`
  }
}

document.querySelector('.guess-btn').addEventListener('click', handleGuess)
