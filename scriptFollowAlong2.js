let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');

//Hide text
textArea.style.display = 'none';

textArea.innerText = 'Hello World';
okButton.addEventListener('click', function() {
    //textArea.innerText = 'Button clicked!';
    //Show text with block or inline
    textArea.style.display = 'inline';
})
