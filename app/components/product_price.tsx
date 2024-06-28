"use client";
import { ChangeEvent, useEffect, useState } from "react";

type ProductPriceType = {
	price: number;
	discountType: String;
	discount: number;
};

export default function ProductPrice({ price }: { price?: ProductPriceType }) {
	const initialPrice: ProductPriceType = {
		price: 0,
		discountType: "porcentagem",
		discount: 0,
	};
	const [productPrice, setProductPrice] = useState<ProductPriceType>(price || initialPrice);
	const [finalprice, setFinalprice] = useState<number>(0);

	const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
		setProductPrice({ ...productPrice, price: parseInt(e.currentTarget.value.trim()) });
	};

	const handleChangeDiscountType = (e: ChangeEvent<HTMLSelectElement>) => {
		setProductPrice({ ...productPrice, discountType: e.currentTarget.selectedOptions[0].value });
	};

	const handleChangeDiscount = (e: ChangeEvent<HTMLInputElement>) => {
		setProductPrice({ ...productPrice, discount: parseInt(e.currentTarget.value.trim()) });
	};

	useEffect(() => {
		if (productPrice.discountType == "porcentagem") {
			setFinalprice(productPrice.price - productPrice.price * (productPrice.discount / 100));
		} else {
			setFinalprice(productPrice.price > productPrice.discount ? productPrice.price - productPrice.discount : 0);
		}
	}, [productPrice]);

	return (
		<div className="flex w-full justify-between items-center gap-4 text-white">
			<div>
				Preço: R$
				<input type="text" name="price" value={productPrice?.price.toString()} onChange={handleChangePrice} className="bg-transparent text-center w-[100px] text-white border-2 rounded p-1 ml-1" />
			</div>
			<div>
				Tipo de desconto:
				<select onChange={handleChangeDiscountType} className="bg-transparent text-center w-[100px] text-white border-2 rounded p-1 ml-1">
					<option value="porcentagem" selected={productPrice.discountType == "porcentagem"} className="bg-gray-500">
						%
					</option>
					<option value="valor" selected={productPrice.discountType == "valor"} className="bg-gray-500">
						Valor
					</option>
				</select>
			</div>

			<div>
				Desconto:
				{productPrice.discountType == "valor" ? " R$" : null}
				<input type="text" name="discount" value={productPrice?.discount.toString()} onChange={handleChangeDiscount} className="bg-transparent text-center w-[100px] text-white border-2 rounded p-1 ml-1" />
				{productPrice.discountType == "porcentagem" ? " %" : null}
			</div>
			<div>
				Preço final:
				<span> R$ {finalprice.toFixed(2)}</span>
			</div>
		</div>
	);
}
