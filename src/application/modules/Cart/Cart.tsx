import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	User as ProductCart
} from '@nextui-org/react';
import { useCartContext } from '../../hooks/useCartContext';
import { Key, useCallback } from 'react';
import { CartItem } from '../../../domain/cart/models/Cart';

const Cart: React.FC = () => {
	const { cart, removeItem } = useCartContext();

	type TableCartColumn = {
		id: string;
		name: string;
	};

	const columns: TableCartColumn[] = [
		{
			id: 'title',
			name: 'Product'
		},
		{
			id: 'price',
			name: 'Price'
		},
		{
			id: 'category',
			name: 'Quantity'
		},
		{
			id: 'id',
			name: 'Remove'
		}
	];

	const renderCell = useCallback(
		(item: CartItem, columnKey: Key) => {
			const cellValue = item.product[columnKey];

			switch (columnKey) {
				case 'title':
					return (
						<ProductCart
							avatarProps={{
								radius: 'lg',
								src: item.product.image
							}}
							description={item.product.category}
							name={cellValue}
						></ProductCart>
					);
				case 'price':
					return <span>{item.product.price * item.quantity} $</span>;
				case 'category':
					return <span>{item.quantity}</span>;
				case 'id':
					return (
						<span onClick={() => removeItem(item.product)}>
							delete
						</span>
					);
			}
		},
		[removeItem]
	);

	return (
		<Table aria-label='Products selected in a cart'>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn
						key={column.id}
						align='start'
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={cart.items}>
				{(item) => (
					<TableRow key={item.product.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default Cart;