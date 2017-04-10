const initialState = [
  {
    id: 1,
    name: 'HBIB Ginger Fusion',
    quantity: 3
  }, {
    id: 2,
    name: 'Mangose & Melons',
    quantity: 1
  }
]

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = {id: action.id, name: action.name, quantity: 1}

      // state.push({id: action.id, name: action.name, quantity: 1})
      return [...state, newItem]

  default:
    return state
  }
}

export default cart
