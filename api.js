

export async function loadPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        return await response.json();
    } catch (error) {
        console.error("Помилка при завантаженні постів:", error);
    }
}

export async function loadComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
        return await response.json();
    } catch (error) {
        console.error("Помилка при завантаженні коментарів:", error);
    }

}

export async function createPost(postData) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error("Не вдалося створити пост");
        }

        return await response.json();
    } catch (error) {
        console.error("Помилка API:", error);
        throw error;
    }
}

