document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("postsContainer");
    const postForm = document.getElementById("postForm");
    const messageContainer = document.getElementById("message");


    async function loadPosts() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const posts = await response.json();

            posts.forEach(post => {
                displayPost(post);
            });
        } catch (error) {
            console.error("Помилка при завантаженні постів:", error);
        }
    }


    function displayPost(post) {
        const postCard = document.createElement("div");
        postCard.className = "post";

        postCard.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button class="load-comments" onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
      <div class="comments" id="comments-${post.id}"></div>
    `;

        postsContainer.appendChild(postCard);
    }


    window.loadComments = async (postId, button) => {
        const commentsContainer = document.getElementById(`comments-${postId}`);

        if (commentsContainer.innerHTML) {
            commentsContainer.innerHTML = ""; // Очищення коментарів
            button.textContent = "Завантажити коментарі";
            return;
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
            const comments = await response.json();

            comments.forEach(comment => {
                const commentDiv = document.createElement("div");
                commentDiv.className = "comment";
                commentDiv.innerHTML = `
          <p><strong>${comment.name}</strong> (${comment.email}):</p>
          <p>${comment.body}</p>
        `;
                commentsContainer.appendChild(commentDiv);
            });

            button.textContent = "Сховати коментарі";
        } catch (error) {
            console.error("Помилка при завантаженні коментарів:", error);
        }
    };

    postForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const title = document.getElementById("postTitle").value;
        const body = document.getElementById("postBody").value;

        const postData = {
            title: title,
            body: body,
            userId: 1
        };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            });

            if (response.ok) {
                const newPost = await response.json();


                displayPost(newPost);


                messageContainer.textContent = "Пост створено успішно";


                postForm.reset();
                setTimeout(() => {
                    messageContainer.textContent = "";
                }, 3000);
            } else {
                messageContainer.textContent = "Не вдалося створити пост";
            }
        } catch (error) {
            console.error("Помилка при створенні поста:", error);
            messageContainer.textContent = "Сталася помилка. Спробуйте ще раз.";
        }
    });


    loadPosts();
});
