import { BoardID } from './Board';

export type CardParams = {
	boardID: BoardID;
} & (
	| {
			title: string;
			description?: string;
			type?: CardTypes;
	  }
	| {
			title?: string;
			description: string;
			type?: CardTypes;
	  }
	| {
			title?: string;
			description?: string;
			type: CardTypes;
	  }
	| {
			title: string;
			description: string;
			type?: CardTypes;
	  }
	| {
			title: string;
			description?: string;
			type: CardTypes;
	  }
	| {
			title?: string;
			description: string;
			type: CardTypes;
	  }
);

export type CardID = string;

export type CardTypes = 'todo' | 'inProgress' | 'done';
