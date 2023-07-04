let fieldsets = [].slice.call(document.getElementsByTagName('fieldset'));

console.log(fieldsets);

fieldsets.forEach(fieldset => {
    let legend = fieldset.getElementsByTagName('legend')[0];
    console.log(legend.offsetWidth);
    fieldset.style.setProperty('--left0', `${legend.offsetWidth+23}px`);
    fieldset.style.setProperty('--left1', `${legend.offsetWidth+24}px`);
})