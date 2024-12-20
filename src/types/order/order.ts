export interface Order {
	id: string;
	merchantImage: string;
	merchantName: string;
	merchantLogo: string;
	date: string;
	nextDueAmount: number;
	nextDueDate: string;
	status: string;
	reference: string;
	price: number;
	numberOfArticles: number;
	shippedArticles: number;
}