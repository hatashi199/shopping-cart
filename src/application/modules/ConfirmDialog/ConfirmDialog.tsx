import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure
} from '@nextui-org/react';
import DeleteIcon from '../../../icons/Delete';

interface ConfirmDialogProps {
	trueMethod: () => boolean;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	trueMethod
}: ConfirmDialogProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleClose = () => {
		trueMethod();
		onClose();
	};

	return (
		<>
			<span
				className='cursor-pointer'
				onClick={() => onOpen()}
			>
				<DeleteIcon />
			</span>
			<Modal
				size='md'
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Product deletion
							</ModalHeader>
							<ModalBody>
								<p>
									Are you sure for delete this product or
									unity of product from cart?
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color='danger'
									variant='light'
									onPress={onClose}
								>
									Close
								</Button>
								<Button
									color='primary'
									onPress={() => handleClose()}
								>
									Delete
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ConfirmDialog;
