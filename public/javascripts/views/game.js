namespace('Simon.Views')

Simon.Views.Game = function(options) {
  this.el       = options.el
  this.$el      = $(this.el)
  this.solution = []
  this.guess    = []
  this.COLORS   = ['green', 'red', 'yellow', 'blue']
  this.interval = 175
  this.gameOver = false

  this.setListeners = function() {
    this.$el.find('.outer-ring div:not(.inner-ring)').on('click', function(e) {
      this.guess.push(this.clickedColor($(e.target)))
      this.checkAnswer()
    }.bind(this))

    this.$el.find('.outer-ring div:not(.inner-ring)').on('mousedown', function(e) {
      $(e.target).addClass('active')
    })

    this.$el.find('.outer-ring div:not(.inner-ring)').on('mouseup', function(e) {
      $(e.target).removeClass('active')
    })
  }

  this.addColor = function() {
    this.solution.push(this.randomColor())
    this.showPattern(0)
  }

  this.showPattern = function(index) {
    this.lightUp(index, function() {
      this.pause(index, function() {
        if (index++ < this.solution.length) this.showPattern(index)
      }.bind(this))
    }.bind(this))
  }

  this.lightUp = function(index, callback) {
    this.color(this.solution[index]).addClass('active')
    setTimeout(callback, this.interval)
  }

  this.pause = function(index, callback) {
    this.color(this.solution[index]).removeClass('active')
    setTimeout(callback, this.interval)
  }

  this.randomColor = function() {
    return _.sample(this.COLORS)
  }

  this.color = function(color) {
    return this.$el.find('.' + color)
  }

  this.colors = function() {
    return this.$el.find('.outer-ring div:not(.inner-ring)')
  }

  this.clickedColor = function($node) {
    return _.find(this.COLORS, function(color) {
      return $node.hasClass(color)
    })
  }

  this.checkAnswer = function() {
    for (var i = 0; i < this.guess.length; ++i) {
      if (this.guess[i] !== this.solution[i]) this.loseGame()
    }
    if (!this.gameOver && this.solution.length === this.guess.length) {
      this.guess = []
      this.incrementScore()
      setTimeout(function() {
        this.addColor()
      }.bind(this), this.interval * 3)
    }
  }

  this.loseGame = function() {
    this.gameOver = true
    $('.message').html('<h2>GAME OVER</h2>')
  }

  this.incrementScore = function() {
    var currentScore = Number($('.score span').text())
    $('.score span').html(currentScore + 100)
  }
}
