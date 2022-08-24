let rainbowing = false;
const button = document.createElement('button');
button.textContent = 'Rainbowing';
button.addEventListener('click', event => {
    console.log('button clicked');
    const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    let color = colors[0];;
    rainbowing = !rainbowing;
    for (let i = 1; i < colors.length; i++) {
        //console.log(`${i}: ${colors[i]}`);
        if (rainbowing)
            color = colors[i];
        for (const heading of document.querySelectorAll(`h${i}`)) {
            console.log(heading);
            heading.style.color = color;
        }
    }
});
document.body.prepend(button);
