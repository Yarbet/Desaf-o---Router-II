import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductosContext } from '../context/ProductosProvider';

export const ProductDetail = () => {
	const { productos } = useContext(ProductosContext);

	const { product_id } = useParams();

	const pokemonFound = productos.find((product) =>
		product.name.includes(product_id)
	);
	console.log(pokemonFound);

	return (
		<>
			{pokemonFound ? (
				<div>
					<img
						src={pokemonFound.image}
						alt=""
					/>
					<p>
						<strong>Name: {pokemonFound.name}</strong>
						<strong>Weight: {pokemonFound.weight}</strong>
						<strong>Stats:</strong>

						{/* product_details['id'] = producto.id;
					product_details['weight'] = producto.weight;
					product_details['image'] = img;
					product_details['stats'] = stats; */}
					</p>
				</div>
			) : (
				<h1>Pokemon cargando</h1>
			)}
		</>
	);
};
