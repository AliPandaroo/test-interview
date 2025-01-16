declare global {
  interface Author {
    authorID: string | number;
    name: string;
    email?: string;
    profileImage?: string;
  }

  interface CommentMessage {
    commentId: string | number;
    content: string;
    author: Author;
    createdAt: string;
  }

  interface Blog {
    blogId?: string | number;
    subject?: string;
    script?: string;
    author?: Author;

    id: string | number;
    title: string;
    body: string;
    userId: string | number;

    comments?: CommentMessage[];
  }
}
export {};
