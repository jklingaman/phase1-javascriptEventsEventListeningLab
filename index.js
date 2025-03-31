function addingEventListener() {
    const butt = document.getElementById('button')
    // butt.addEventListener('click', function() {
    //     alert('I was clicked');
    // });
    butt.addEventListener('click', () => alert('I was clicked!'))
}
addingEventListener()