import { BasketState } from './basketSlice';

export function totalAmount({ items }: BasketState) {
  return items.reduce((amount, item) => amount + item.price, 0);
}
