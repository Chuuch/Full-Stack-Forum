import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(errorHandler(404, "Post not found!"));
  }

  if (req.user.id !== post.userRef) {
    return next(errorHandler(401, "You can only delete your own posts!"));
  }

  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json('Post has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(errorHandler(404, "Post not found!"));
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(errorHandler(404, "Post not found!"));
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("userRef");
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
