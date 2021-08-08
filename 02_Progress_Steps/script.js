const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// if someone clicks prev, take 1 away from currentActive
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        curentActive = 1
    }

    update()
})

// if someone clicks prev, add 1 to currentActive
// to a max of total number of circles
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        curentActive = circles.length
    }

    update()
})

// we always want circles up to count of currentActive count to be active
// eg. if currentActive=2, we want the first 2 circles to have class 'active'
function update() {
    circles.forEach(
        (circle, index) => {
            if(index < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
    })

    // count how many active circles we have
    const actives = document.querySelectorAll('.active')

    // active circles divided by total circles for progress bar fill
    progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%'


    if(currentActive === 1) {
        prev.disabled =  true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

