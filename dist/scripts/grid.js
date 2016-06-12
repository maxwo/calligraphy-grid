function render() {

    rendering.className = '';

    // Setting text
    var text = document.getElementById('text').value;
    text = text.replace(/\n/g, '<br/><br/>');
    text = text.replace(/\r/g, '');
    document.getElementById('rendering').innerHTML = text;

    // Setting font
    setFont(document.getElementById('font').value);

    // Setting font
    setGrid(document.getElementById('grid').value);
}

function setFont(font) {
    var rendering = document.getElementById('rendering');
    rendering.classList.add('font-'+ font);
}

function setGrid(grid) {
    var rendering = document.getElementById('rendering');
    rendering.classList.add('grid-'+ grid);
}
