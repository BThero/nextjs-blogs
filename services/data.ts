export interface IPostRequired {
  title: string;
  text: string;
}

export interface IPost extends IPostRequired {
  id: number;
  createdAt: string;
  likeCount: number;
  dislikeCount: number;
}

globalThis.posts = globalThis.posts ?? [];
// globalThis.posts = [];

globalThis.counter = globalThis.counter ?? 0;
// globalThis.counter = 0;

export function getPosts(): IPost[] {
  return globalThis.posts;
}

export function addPost(data: IPostRequired) {
  const post: IPost = {
    id: globalThis.counter,
    createdAt: new Date().toLocaleString(),
    likeCount: 0,
    dislikeCount: 0,
    ...data
  };

  globalThis.counter += 1;
  globalThis.posts.push(post);
}

export function updatePost(id: number, data: Partial<IPost>) {
  const index = globalThis.posts.findIndex((item) => item.id === id);

  if (index !== -1) {
    globalThis.posts[index] = { ...globalThis.posts[index], ...data };
  }
}

export function deletePost(id: number) {
  globalThis.posts = globalThis.posts.filter((item) => item.id !== id);
}
