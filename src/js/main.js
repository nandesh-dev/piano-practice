const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 200

const gap = 16

function drawLines(){
    const center = canvas.height / 2

    for(let l = -2; l < 3; l++){
        ctx.beginPath()
        ctx.moveTo(0, center + l * gap)
        ctx.lineTo(canvas.width, center + l * gap)
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 1.5
        ctx.stroke()
    }
}

function drawNote(row, location){
    const radius = gap / 3
    ctx.beginPath()
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 4
    ctx.ellipse(location * canvas.width / 100, 
        (canvas.height / 2) + (gap / 2) * row, 
        radius * 1.5, 
        radius, 
        0, 
        0, 
        Math.PI * 2
    )
    ctx.stroke()
}

const notes = []
const noteCount = 50

var speed = {
    x: 2
}

function increaseSpeed(){
    speed.x++
    console.log(speed.x)
}

function decreaseSpeed(){
    speed.x--
}

function loop(){
    setTimeout(()=>{
        requestAnimationFrame(loop)
    }, speed.x * 10)
    ctx.clearRect(0,0,10000,10000)

    drawLines()
    for(let note of notes){
        if(note.location < 100 && note.location > 0){
            drawNote(note.row, note.location)
        }
        note.location+= 0.5
        note.location = note.location % (noteCount * 10)
    }
}

function setup(){
    let location = 0
    for(let c = 0; c < noteCount; c++){
        if(Math.random() < 0.5){
            notes.push({
                row: Math.round(Math.random() * 4 - 2),
                location: location
            })
        }
        location += 10
    }
    loop()
}

setup()