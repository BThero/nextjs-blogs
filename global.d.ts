import { IPost } from './services/data';

declare global {
  var posts: IPost[];
  var counter: number;
}
