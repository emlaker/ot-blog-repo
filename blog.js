// A wee bit of magic — adds new posts dynamically

document.addEventListener("DOMContentLoaded", () => {
  const blogSection = document.getElementById("blog-posts");

  // Example: Add a new post after 3 seconds
  setTimeout(() => {
    const newPost = document.createElement("article");
    newPost.classList.add("post");

    newPost.innerHTML = `
      <h2 class="post-title">Another Adventure</h2>
      <p class="post-date">${new Date().toLocaleDateString()}</p>
      <p class="post-content">
        And so the spiritualjourney continues... with more posts to come!
      </p>
    `;

    blogSection.appendChild(newPost);
  }, 3000);
});
