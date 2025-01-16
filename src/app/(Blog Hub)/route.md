# Route Groups

## Group: Blog Hub

**outlines the routing structure for managing blog posts and their comments.**

### Included Routes

- **Hub Routes**

  - **`/blogs`**: Displays a list of all blog posts.
  - **`/blogs/[blogId]`**: Displays the details of the blog post by its ID.

- **Comment Routes**
  - **`/blogs/[blogId]/comments`**: Displays a list of all comments related to the blog post by its ID.
  - **`/blogs/[blogId]/comments/[commentId]`**: Accesses the comment for the blog post by its comment ID.
