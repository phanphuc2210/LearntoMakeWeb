var boxs = document.querySelectorAll('.box')
var targets = document.querySelectorAll('.target')

var currentTarget = null

targets.forEach(target => {
    target.ondragstart = function(e) {
        this.classList.add('dragging')
        currentTarget = this
    }
    
    target.ondragend = function(e) {
        this.classList.remove('dragging')
    }
})


boxs.forEach(box => {
    box.ondragover = function(e) {
        e.preventDefault()
        if(!box.querySelector('.target'))
            this.appendChild(currentTarget)
    }

    box.ondrop = function(e) {
        if(!box.querySelector('.target'))
            this.appendChild(currentTarget)
    }
})
