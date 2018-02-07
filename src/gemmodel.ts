import { reviewmodel } from './reviewmodel';

export class gemModel {
    id: number;
    name: string;
    price: number;
    description: string;
    fullImagePath: string;
    inventory: number;
    colors: string[];
    reviews: reviewmodel[];
}