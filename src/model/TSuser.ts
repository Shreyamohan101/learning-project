import { Schema, model } from 'mongoose';

interface IUser {
  username: string;
  email: string;
  password: string;
  bio?: string;
  avatarUrl?: string;
  followers: string[];  // List of user IDs
  following: string[];  // List of user IDs
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  avatarUrl: { type: String },
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const User = model<IUser>('User', UserSchema);//->model ka type
export default User;
