
export function hightEditModal(){
    document.querySelector('#editModal').classList.add('hidden');
}
export function getEditFormValues() {
    return {
        id: document.getElementById('editId').value,
        bookName: document.getElementById('editTitle').value,
        author: document.getElementById('editAuthor').value,
        year: document.getElementById('editYear').value
    };
}