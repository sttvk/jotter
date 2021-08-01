const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="tools">
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `
  const btnEdit = note.querySelector('.btn-edit');
  const btnDelete = note.querySelector('.btn-delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  btnDelete.addEventListener('click', () => {
    note.remove();
  });

  btnEdit.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  })

  textArea.addEventListener('input', (e) => {
    const {
      value
    } = e.target;

    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
};