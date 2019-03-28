document.querySelector('.enter-btn').addEventListener('click', handleSubmit)
// document.querySelector('.restart-btn').addEventListener('click', handleRestart)

function handleSubmit(e) {
  e.preventDefault()
  const firstName = document.querySelector('.first-name').value
  const lastName = document.querySelector('.last-name').value
  const combineName = firstName + lastName
  const name = combineName.split('')
  console.log(name)
  const millions = generateNumber(name)
}

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
  }, 0) * 10
  console.log(totalSum)
}

