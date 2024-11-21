import { loadPosts, loadComments, createPost } from "./api.js";
import {displayComments, displayPost, getPostData, addPost, showMessage} from "./dom.js";

document.addEventListener("DOMContentLoaded", async () => {
    const postsContainer = document.getElementById("postsContainer");


    //Posts
    const posts = await loadPosts();
    posts.forEach(post => displayPost(post));

    //Comments
    postsContainer.addEventListener('click', async (e) => {
        const postId = e.target.getAttribute("id");

        const comments = await loadComments(postId);
        displayComments(comments, postId);
    });

    //Form TODO


    document.addEventListener("DOMContentLoaded", () => {
        const postForm = document.getElementById("postForm");

        postForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const postData = getPostData();
                const newPost = await createPost(postData);
                addPost(newPost);
                showMessage("Пост створено успішно!", "success");
            } catch (error) {
                showMessage("Сталася помилка. Спробуйте ще раз.", "error");
            }
        });
    });


});
