import mongoose, { Schema, Document, model } from 'mongoose';

// Define an interface to represent the User document in TypeScript
interface IUser extends Document {
  email: string;
  fullName: string;
  address: string;
}

// Define the User schema
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation regex
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Create the User model from the schema
const User = model<IUser>('User', userSchema);

export default User;
