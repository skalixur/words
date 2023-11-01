const wordContainer = document.querySelector('.word-container')

// hsla(${Math.floor(Math.random() * 359)}, 18%, 60%, 0.5)

const shakeValue = 10
const cooldown = 120
const permHue = Math.floor(Math.random() * 359)
const minWordSize = 4.8
const maxWordSize = 30
const wordOpacityMultiplier = 2

let time = Date.now()
document.addEventListener('mousemove', e => {
  if (Date.now() >= time + cooldown) {
    time = Date.now()
    makeWord(
      (e.clientX / window.innerWidth) * 100 +
        (Math.floor(Math.random() * shakeValue) - shakeValue / 2),
      (e.clientY / window.innerHeight) * 100 +
        (Math.floor(Math.random() * shakeValue) - shakeValue / 2),
      0,
      Math.floor(Math.random() * maxWordSize) + minWordSize
    )
  }
})

let time2 = Date.now()
document.addEventListener('mousemove', e => {
  if (!(e.buttons > 0)) return
  if (Date.now() >= time2 + cooldown / 3) {
    time2 = Date.now()
    makeWord(
      (e.clientX / window.innerWidth) * 100 +
        (Math.floor(Math.random() * shakeValue) - shakeValue / 2),
      (e.clientY / window.innerHeight) * 100 +
        (Math.floor(Math.random() * shakeValue) - shakeValue / 2),
      0,
      minWordSize / 1.5 +
        (Math.floor((Math.random() * minWordSize) / 3) - minWordSize / 6)
    )
  }
})

const makeWord = (x, y, color, size) => {
  const word = document.createElement('span')
  word.classList.add('word', 'other-word')
  word.innerHTML = words[Math.floor(Math.random() * words.length)]
  wordContainer.appendChild(word)
  word.style.left = x + '%'
  word.style.top = y + '%'
  word.style.color = `hsla(${permHue}, 20%, 60%, ${
    wordOpacityMultiplier / size
  })`
  word.style.fontSize = size + 'vw'
}
