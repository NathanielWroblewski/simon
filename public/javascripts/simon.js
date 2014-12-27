$(document).ready(function() {
  window.game = new Simon.Views.Game({el: '#simon'})
  window.game.setListeners()

  window.game.addColor()
  window.game.addColor()
})
