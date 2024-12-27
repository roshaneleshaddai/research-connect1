import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  role_id: { type: String, required: true },
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role:{type:String, required:true},
})

export default mongoose.models.User || mongoose.model('User', UserSchema);