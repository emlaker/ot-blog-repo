document.addEventListener("DOMContentLoaded", () => {
  const blogSection = document.getElementById("blog-posts");

  // === (1) Example: Add a new post after 3 seconds ===
  setTimeout(() => {
    const newPost = document.createElement("article");
    newPost.classList.add("post");

    newPost.innerHTML = `
      <h2 class="post-title">Another Adventure</h2>
      <p class="post-date">${new Date().toLocaleDateString()}</p>
      <p class="post-content">
        And so the journey continues... with more posts to come!
      </p>

      <!-- Comment Section -->
      <div class="comments">
        <h3>Comments</h3>
        <ul class="comment-list"></ul>
        <form class="comment-form">
          <input type="text" name="name" placeholder="Your name" required>
          <textarea name="comment" placeholder="Write a comment..." required></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    `;

    blogSection.appendChild(newPost);

    // Attach comment handling to the new form
    setupCommentForm(newPost.querySelector(".comment-form"));
  }, 3000);

  // === (2) Handle comment form submissions ===
  function setupCommentForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[name='name']").value.trim();
      const commentText = form.querySelector("textarea[name='comment']").value.trim();
      const commentList = form.parentElement.querySelector(".comment-list");

      if (name && commentText) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}:</strong> ${commentText}`;
        commentList.appendChild(li);

        // Reset form
        form.reset();
      }
    });
  }

  // Attach comment handling to all existing forms
  document.querySelectorAll(".comment-form").forEach(setupCommentForm);
});
