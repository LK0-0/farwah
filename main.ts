input.onButtonPressed(Button.A, function () {
    radio.sendString("Salut")
    basic.showString("Salut")
})
radio.onReceivedString(function (receivedString) {
    if (0 == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("cv?")
    basic.showString("cv?")
})
radio.setGroup(77)
