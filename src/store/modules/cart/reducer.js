import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const { product } = action;
        const productIndex = state.findIndex(p => p.id === product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const { id } = action;
        const productIndex = draft.findIndex(p => p.id === id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
