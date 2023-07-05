let contacts = [].slice.call(document.getElementsByClassName('contact'));
let popup = document.getElementById('popup');
let x, y;

window.addEventListener('load', function () {
    let fieldsets = [].slice.call(document.getElementsByTagName('fieldset'));
    fieldsets.forEach(fieldset => {
        let legend = fieldset.getElementsByTagName('legend')[0];
        fieldset.style.setProperty('--left0', `${legend.offsetWidth+27}px`);
        fieldset.style.setProperty('--left1', `${legend.offsetWidth+28}px`);
    })
})

setInterval(() => {
    document.onmousemove = function(e){x = e.clientX; y = e.clientY+window.pageYOffset;}
})

contacts.forEach(contact => {
    [].slice.call(contact.children).forEach(img => {
        img.addEventListener('mouseover', () => {
            popup.style.display = 'flex';
            document.getElementById('logo').src = img.src;
            img.name == '' ? document.getElementById('info').innerText = contact.parentElement.children[1].innerText : document.getElementById('info').innerText = img.name
            setInterval(() => {
                popup.style.top = `${y-50}px`;
                popup.style.left = `${x-25}px`;
            })
            })
            img.addEventListener('mouseout', () => {
                popup.style.display = 'none';
            })
    })
})
