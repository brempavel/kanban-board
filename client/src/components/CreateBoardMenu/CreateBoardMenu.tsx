import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';

import { BoardTitleInput } from '../BoardTitleInput';

export const CreateBoardMenu = () => {
	return (
		<Menu>
			<MenuButton as={Button}>Create board</MenuButton>
			<MenuList p=".5rem" w="10rem">
				<BoardTitleInput />
			</MenuList>
		</Menu>
	);
};
