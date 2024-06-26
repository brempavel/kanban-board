import { Schema, model } from 'mongoose';

const boardSchema = new Schema({
	title: { type: String, required: true },
	columnIDs: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Column',
			},
		],
		default: [],
	},
});

export const BoardModel = model('Board', boardSchema);
