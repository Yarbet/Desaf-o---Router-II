import { useContext } from 'react';
import { ProductosContext } from '../context/ProductosProvider';
import { useNavigate } from 'react-router-dom';

export const Productos = () => {
	const { productos, loading } = useContext(ProductosContext);
	const navigate = useNavigate();

	const handleNavigate = (event) => {
		const name = event.target.name;
		navigate(`/producto/${name}`);
	};

	console.log(productos);

	return (
		<div>
			{loading ? (
				<h1>Loading data...</h1>
			) : (
				productos.map((product, index) => (
					<div key={index}>
						<img
							src={product.image}
							alt=""
						/>
						<p>
							<strong>Name: {product.name}</strong>
						</p>
						<button
							name={product.name}
							onClick={handleNavigate}
						>
							View Details
						</button>
					</div>
				))
			)}
		</div>
	);
};
export default Productos
