const addNote = document.querySelector('#add-note');
const main = document.querySelector('main');

const note = document.createElement('div');
note.classList.add('note');
note.innerHTML = '<div class="noteHeader"><div class="noteTrash"></div></div><textarea class="noteCanvas">';

addNote.addEventListener('click', function() {
    console.log('clicked me');
    createNote();
});

main.addEventListener('click', removeNote); 

function removeNote(event) {
    const trash = event.target.parentNode.parentNode;
    if (trash.classList.contains('note')) trash.remove();
};

function createNote() {
    const newNote = note.cloneNode(deep = true);
    main.appendChild(newNote);
};
