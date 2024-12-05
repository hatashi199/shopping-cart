import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	User as ProductCart
} from '@nextui-org/react';
import { useGenericContext } from '../../hooks/useCartContext';
import { Key, useCallback } from 'react';
import { CartItem } from '../../../domain/cart/models/Cart';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import { helpers } from '../../utils/helpers';
import { CartContext, CartContextInt } from '../../contexts/CartContext';

const Cart: React.FC = () => {
	const { cart, removeItem } = useGenericContext<CartContextInt>(CartContext);
	const { formatDecimal } = helpers;

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
								radius: 'md',
								src: item.product.image
							}}
							description={item.product.category}
							name={cellValue}
						></ProductCart>
					);
				case 'price':
					return (
						<span>
							{formatDecimal(
								item.product.price * item.quantity,
								2
							)}{' '}
							$
						</span>
					);
				case 'category':
					return <span>{item.quantity}</span>;
				case 'id':
					return (
						<ConfirmDialog
							trueMethod={() => removeItem(item.product)}
						/>
					);
				default:
					return cellValue;
			}
		},
		[removeItem, formatDecimal]
	);

	return (
		<>
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
				<TableBody
					items={cart.items}
					emptyContent={<span>EMPTY CART</span>}
				>
					{(item) => (
						<TableRow key={item.product.id}>
							{(columnKey) => (
								<TableCell>
									{renderCell(item, columnKey)}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</>
	);
};

export default Cart;
