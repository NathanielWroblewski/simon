$(document).ready(function() {
  var game = new Simon.Views.Game({el: '#simon'})
  game.setListeners()

  $('.inner-ring').html('<h2>3</h2>')

  setTimeout(function() {
    $('.inner-ring').html('<h2>2</h2>')
  }, 1000)

  setTimeout(function() {
    $('.inner-ring').html('<h2>1</h2>')
  }, 2000)

  setTimeout(function() {
    $('.inner-ring').html('')
    game.addColor()
    setTimeout(function() {
      game.addColor()
    }, 175)
  }, 3000)
})
