const addColour = {
    colorClass: {
        body: document.querySelector('.body'),
        container: document.querySelector('.container'),
        button: document.querySelector('.btn'),
    },
    color: {
        yellow: ['yell', 'textviewyell'],
        blue: ['blue1', 'textviewyell'],
    }
}

function Change(color) {
    this.color = document.querySelector(color);
    const event = this.color;
    event.addEventListener('click', (e) => {
        if (e.target.classList[1].includes('yellow')) {
            addColour.colorClass.body.classList.remove(addColour.color.blue[0]);
            addColour.colorClass.container.classList.remove(addColour.color.blue[0]);
            addColour.colorClass.body.classList.add(addColour.color.yellow[0]);
            addColour.colorClass.container.classList.add(addColour.color.yellow[0]);
        } else if (e.target.classList[1].includes('blue')) {
            addColour.colorClass.body.classList.remove(addColour.color.yellow[0]);
            addColour.colorClass.container.classList.remove(addColour.color.yellow[0]);
            addColour.colorClass.body.classList.add(addColour.color.blue[0]);
            addColour.colorClass.container.classList.add(addColour.color.blue[0]);
        }
    });
}

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    const exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}







const yellow = new Change('.yellow');
const blue = new Change('.blue');