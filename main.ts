input.onSound(DetectedSound.Loud, function () {
    claps += 1
    basic.showNumber(claps)
})
let claps = 0
claps = 0
input.setSoundThreshold(SoundThreshold.Loud, 200)
