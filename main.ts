input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
})
function rotateColours () {
    RED.push(RED[0])
    RED.shift()
    BLUE.push(BLUE[0])
    BLUE.shift()
    GREEN.push(GREEN[0])
    GREEN.shift()
    for (let index = 0; index <= 4; index++) {
        strip.setPixelColor(index, neopixel.rgb(RED[index], GREEN[index], BLUE[index]))
    }
    strip.show()
}
input.onButtonPressed(Button.B, function () {
	
})
let strip: neopixel.Strip = null
let BLUE: number[] = []
let RED: number[] = []
let GREEN: number[] = []
GREEN = [
0,
0,
255,
0,
128
]
RED = [
255,
0,
0,
128,
128
]
BLUE = [
0,
255,
0,
128,
0
]
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.clear()
basic.forever(function () {
    rotateColours()
    basic.pause(1000)
})
