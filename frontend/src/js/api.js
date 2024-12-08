 const apiUrl = 'http://localhost:3000';

export async function updateBook(id, updateData){
     const responce = fetch(`${apiUrl}/books/${id}`, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(updateData)
     });
     if (!responce){
         throw new Error(`Failed to update book with ID ${id}`);
     }
}