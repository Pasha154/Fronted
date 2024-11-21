const postsContainer = document.getElementById("postsContainer");


export function displayPost(post) {
    const postCard = document.createElement("div");
    postCard.className = "post";

    postCard.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button class="load-comments" id="${post.id}">Завантажити коментарі</button>
      <div class="comments" id="comments-${post.id}"></div>
    `;

    postsContainer.appendChild(postCard);
}

export function displayComments(comments, postId) {
    const commentsContainer = document.getElementById(`comments-${postId}`);

    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
          <p><strong>${comment.name}</strong> (${comment.email}):</p>
          <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv);
    });
}

export function getPostData() {
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;

    return { title, body, userId: 1 };
}

export function addPost(post) {
    const postContainer = document.getElementById("posts");
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <span>Автор ID: ${post.userId}</span>
    `;
    postContainer.appendChild(postElement);
}

export function showMessage(message, type = "success") {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = message;
    messageContainer.className = type;
    setTimeout(() => {
        messageContainer.textContent = "";
        messageContainer.className = "";
    }, 3000);
}




