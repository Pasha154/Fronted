



export const createCommentElement = (comment) => {
    const commentDiv = document.createElement(div);
    commentDiv.className = ("comment");
    commentDiv.innerHTML = `<p><strong>${comment.name}</strong> (${comment.email}):</p>
          <p>${comment.body}</p>`;
    return commentDiv;
}

export const clearComment = (container) =>{
    container.innerHTML = "";
}

export const updateButtonLabel = (button, isCommentsVisible) => {
    button.textContent = isCommentsVisible ? "Сховати коментарі" : "Завантажити коментарі";
};



