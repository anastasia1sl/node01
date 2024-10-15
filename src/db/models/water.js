import { model, Schema } from 'mongoose';

const waterSchema = new Schema(
  {
    // userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    value: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

const WaterCollection = model('water', waterSchema);

export default WaterCollection;
