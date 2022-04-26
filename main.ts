namespace SpriteKind {
    export const goal = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setWallAt(location, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . e e e 1 e e 1 . . . . 
    . . . . e e 3 . . . e e e . . . 
    . . e e e e e e e e e e e e . . 
    . e e . . . . . . . . . . e e . 
    . e . . . . . . . e e e e e e . 
    . e e e e e e e e . . . . . e e 
    . e e . . . . . . . . . . . . e 
    . e . . . . . . . . . . . . . e 
    e e . . . . . . . . . . . . . e 
    . e e e e e e . . . . . . . . e 
    . . . . . . . e e e e e e . e e 
    . . . . . . . . . . . . . e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`レベル3`)
scene.setBackgroundColor(2)
mySprite.setPosition(18, 48)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let ketsu = sprites.create(img`
    . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . 4 4 . . . . . 4 . . . . . 
    . . . 4 . . . . . . . . . . . . 
    . . . 4 . . . . . . . . . . . . 
    . . . 4 4 . . . . . . . . . . . 
    . . . . 4 4 . . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . 4 4 . . . . . . . . . . 
    . . . 4 4 . . . . . . . . . . . 
    . . . 4 . . . . . . . . 4 4 . . 
    . . . 4 4 . . . . . 4 4 4 4 4 4 
    . . . . 4 4 4 4 4 4 . . . . . 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.goal)
tiles.placeOnRandomTile(ketsu, sprites.builtin.oceanDepths8)
let tin = sprites.create(img`
    . . d d d d . . . . . . . . . . 
    . d d . . d d . . . . . . . . . 
    . d . . . . d . . . . . . . . . 
    d . . . . . d . . . . . . . . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . . . . . . . d d . . 
    . . . . . . . . . . . . d d . . 
    . . . . d . . . . d d d d . . . 
    d . . . d d . . . . . . d . . . 
    d . . . . d d . . . . . d . . . 
    d . . . d . d d d d d d d . . . 
    d d . d d . . . . . . . . . . . 
    . d d d . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tin.setPosition(0, 0)
tin.follow(mySprite, 70)
music.playMelody("C C C C C C C C ", 120)
game.splash("はよ逃げろ")
