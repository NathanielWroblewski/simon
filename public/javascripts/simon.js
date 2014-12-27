$(document).ready(function() {
  window.game = new Simon.Views.Game({el: '#simon'})
  window.game.setListeners()

  setTimeout(function() {
    $('.inner-ring').html('<h2>3</h2>')
  }, 1000)

  setTimeout(function() {
    $('.inner-ring').html('<h2>2</h2>')
  }, 2000)

  setTimeout(function() {
    $('.inner-ring').html('<h2>1</h2>')
  }, 3000)

  setTimeout(function() {
    $('.inner-ring').html('')
    window.game.addColor()
    setTimeout(function() {
      window.game.addColor()
    }, 175)
  }, 4000)
})
