"use server";

export async function checkAvaliabilityBySku(sku: string) {
	// Camisas Dimona
	// Teste: https://camisadimona.com.br/api/v2/sku/010110110108/availability

	const _base = "https://camisadimona.com.br";
	const _url = `${_base}/api/v2/sku/${sku}/availability`;

	const headers = new Headers();
	headers.append("Accept", "application/json");
	headers.append("Content-Type", "application/json");
	headers.append("api-key", process.env.DIMONA_API as string);

	const response = await fetch(_url, { headers });
	const data = await response.json();

	return data[sku];
}
