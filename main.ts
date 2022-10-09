input.onButtonPressed(Button.A, function () {
    basic.showString("YES!!!!")
    ZAIO += 6
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (ZAIO))
})
let ZAIO = 0
basic.showIcon(IconNames.Heart)
ZAIO = 2
