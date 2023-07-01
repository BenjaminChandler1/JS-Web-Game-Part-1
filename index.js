function newImage(location, left, bottom) {
    let object = document.createElement('img')
    object.src = location
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

newImage('assets/pine-tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(location, left, bottom) {
let object = document.createElement('img')
object.src = location
object.position = 'fixed'
object.left = left + 'px'
object.bottom = bottom + 'px'
document.body.append(object)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)