import type { NextApiRequest, NextApiResponse } from 'next';
import {
  IPost,
  getPosts,
  addPost,
  updatePost,
  deletePost
} from '../../services/data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPost[]>
) {
  console.log(req.method);

  switch (req.method) {
    case 'POST': {
      const { data } = req.body;
      addPost(data);
      break;
    }

    case 'PUT': {
      const { id, data } = req.body;
      updatePost(id, data);
      break;
    }

    case 'DELETE': {
      const { id } = req.body;
      deletePost(id);
      break;
    }

    default: {
      break;
    }
  }

  res.status(200).json(getPosts());
}
