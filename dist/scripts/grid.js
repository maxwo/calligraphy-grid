function render() {
    var text = document.getElementById('text').value;
    text = text.replace(/\n/, '<br/>');
    text = text.replace(/\r/, '');
    document.getElementById('rendering').innerHTML = text;
}
