import { Schema, model, Types } from 'mongoose';

interface IFriend {
  user: Types.ObjectId;
  friend: Types.ObjectId;
  status: 'pending' | 'accepted';
  createdAt: Date;
  updatedAt: Date;
}

const FriendSchema = new Schema<IFriend>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  friend: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted'], required: true },
}, { timestamps: true });

const Friend = model<IFriend>('Friend', FriendSchema);
export default Friend;

