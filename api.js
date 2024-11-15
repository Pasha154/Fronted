export const loadPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Помилка при завантаженні постів:", error.message);
            return [];
        });
};




export function loadComments(postId, button) {
        const responce = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`)
    if(!responce.ok){
        console.log("Помилка при додавані коментаря!")
    }
    return responce.json();
}

