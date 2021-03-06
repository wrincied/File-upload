const form = document.querySelector('#form');
const fInput = document.getElementById('file-upload');
const ul = document.querySelector('ul');
const dragDrop =('drag-drop')
let fList = undefined;


fInput.addEventListener('change', (e) => {
    ul.innerHTML = '';
    fList = Array.from(e.target.files);


    fList.forEach((f, index) => {
        
        let li = ul.appendChild(document.createElement('li'));
        li.classList.add('form-list')
        li.dataset.index = index;
        let img = li.appendChild(document.createElement('img'));
        img.src = URL.createObjectURL(f);
        let p = li.appendChild(document.createElement('p'));
        p.classList.add('FileName')
        let del = li.appendChild(document.createElement('button'));
        del.innerText = 'Delete';
        del.classList.add('btn');
        let sub = li.appendChild(document.createElement('button'));
        sub.innerText = 'Submit';
        sub.classList.add('subbtn');


        deletebtn.addEventListener('click', () => {
            fList.splice(index, 0);
            URL.revokeObjectURL(f);
            const elem = document.querySelector(`[data-index='${index}']`);
            elem.remove();
            console.log('The file was successful delete');
            document.location.reload()
        });
        p.innerText = f.name;
        

        del.addEventListener('click', () => {
            fList.splice(index, 1);
            URL.revokeObjectURL(f);
            const elem = document.querySelector(`[data-index='${index}']`);
            elem.remove();
            console.log('The file was successful delete');
            
        });
        p.innerText = f.name;
        
    })

}); 




form.addEventListener('submit', (e) => {
  e.preventDefault();
  const files = fList;
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
  }

  formData.append('desc', 'The file has been uploaded');

  console.log(formData.get('desc'))

  fetch('/filelist', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      console.log(response)
    })
});                       