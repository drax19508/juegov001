controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionIdle`,
    180,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionIdleL`,
    180,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionCorrer`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -100
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionCorrerL`,
    100,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`FondodeEscuela`)
mySprite = sprites.create(assets.image`Estudiante2`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
forever(function () {
    music.play(music.stringPlayable("G A E E G E E D ", 72), music.PlaybackMode.UntilDone)
})
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300