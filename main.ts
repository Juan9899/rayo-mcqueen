input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(167)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 50) {
        radio.sendNumber(3)
    }
    if (input.rotation(Rotation.Roll) < -50) {
        radio.sendNumber(4)
    }
})
