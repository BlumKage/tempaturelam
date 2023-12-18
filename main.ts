let current_tempature = 0
basic.forever(function () {
    current_tempature = input.temperature()
    basic.showNumber(current_tempature)
    basic.pause(1000)
    basic.clearScreen()
})
