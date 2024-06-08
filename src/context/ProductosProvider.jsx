import { createContext, useEffect, useState } from 'react';

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

	const fetchData = async () => {
		try {
			const productosJson = await fetch(API_URL);
			const { results } = await productosJson.json();

			const data = handleClearData(results);

			setLoading(false);
			setProductos(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleClearData = (productos) => {
		return productos.map((producto) => {
			let product_details = {};

			product_details['name'] = producto.name;

			fetch(producto.url)
				.then((response) => response.json())
				.then((producto) => {
					const img = producto.sprites.other.home.front_default;
					const stats = producto.stats.map((stat) => ({
						name: stat.stat.name,
						base_stat: stat.base_stat,
					}));

					product_details['id'] = producto.id;
					product_details['weight'] = producto.weight;
					product_details['image'] = img;
					product_details['stats'] = stats;
				})
				.catch((error) => console.log(error));

			return product_details;
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<ProductosContext.Provider value={{ productos, loading }}>
				{children}
			</ProductosContext.Provider>
		</>
	);
};
