const addBookBtn = () => {
    const bookInput = document.getElementById('book_input')
    const authorInput = document.getElementById('author_input')
    const pubInput = document.getElementById('pub_input')
    const bookInputValue = bookInput.value 
    const authorInputValue = authorInput.value
    const pubInputValue = pubInput.value
    if(bookInputValue === '' && authorInputValue === '' ||  pubInputValue === ''){
       return
    }else{
        const tableBody = document.getElementById('table_body')
        const tr = document.createElement('tr')
        const id = Math.round(Math.random() * 100000)
        tr.innerHTML = `
        <th scope="row">${id}</th>
        <td>${bookInputValue}</td>
        <td>${authorInputValue}</td>
        <td>${pubInputValue}</td>
        `
        tableBody.appendChild(tr);
    }
    
    clearInput()
}

const clearInput = () =>{
    const bookInput = document.getElementById('book_input')
    const authorInput = document.getElementById('author_input')
    const pubInput = document.getElementById('pub_input')
    bookInput.value = '';
    authorInput.value = '';
    pubInput.value = '';
}