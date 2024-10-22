import { Schema, model, Types } from 'mongoose';

interface ILike {
  post?: Types.ObjectId; // Post ID as ObjectId
  comment?: Types.ObjectId; // Comment ID as ObjectId
  user: Types.ObjectId; // User ID as ObjectId
  createdAt: Date;
}

const LikeSchema = new Schema<ILike>({
  post: { type: Schema.Types.ObjectId, ref: 'Post' },  // Fixed here
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' },  // Fixed here
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Fixed here
}, { timestamps: true });

const Like = model<ILike>('Like', LikeSchema);
export default Like;
