controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    // Velocidad de la animación (ms por frame)
    // Se repite en bucle
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Estudiante`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
forever(function () {
    music.play(music.stringPlayable("G A E E G E E D ", 120), music.PlaybackMode.UntilDone)
})
