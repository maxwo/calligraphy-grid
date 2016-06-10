function render() {
    var text = document.getElementById('text').value;
    text = text.replace(/\n/g, '<br/>');
    text = text.replace(/\r/g, '');
    document.getElementById('rendering').innerHTML = text;
}
