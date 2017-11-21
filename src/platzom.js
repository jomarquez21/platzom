const reverse = (str) => str.split('').reverse().join('')

const minMay = (str) => {
  const length = str.length
  let translation = ''
  let capitalize = true
  for (let i = 0; i < length; i++) {
    const char = str.charAt(i)
    translation += capitalize ? char.toUpperCase() : char.toLowerCase()
    capitalize = !capitalize
  }
  return translation
}

export default function platzom(str) {
  let translation = str

  if (str === reverse(str)) {
    return minMay(str)
  }

  // si la palabra termina en ar se quitan esa ultimas letras
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  // si la palabra inicia con z se le agrega 'pe' al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  const length = translation.length
  if (length >= 10) {
    const first = translation.slice(0, Math.round(length / 2))
    const secund = translation.slice(Math.round(length / 2))
    translation = `${first}-${secund}`
  }

  return translation
}