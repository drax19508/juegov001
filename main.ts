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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel3`)
scene.setBackgroundImage(assets.image`FondodeEscuela`)
mySprite = sprites.create(assets.image`Estudiante2`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(false)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
forever(function () {
    music.play(music.stringPlayable("G A E E G E E D ", 72), music.PlaybackMode.UntilDone)
})
