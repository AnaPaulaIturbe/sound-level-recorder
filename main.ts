input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(2000)
    loudness = input.soundLevel()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(loudness)
})
let loudness = 0
loudness = 0
