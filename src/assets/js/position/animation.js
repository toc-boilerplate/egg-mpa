function upperCase(str) {
  return str[0].toUpperCase() + str.substring(1)
}

const name = upperCase('index')

$('#name').text(name)

console.log('animation.js')
