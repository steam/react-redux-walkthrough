const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          key: action.key,
          text: action.text,
          name: action.name,
          time: action.time,
          avatar: action.avatar
        }
      ]
    default:
      return state
  }
}

export default messages
