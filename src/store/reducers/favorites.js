const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description: 'Lorem ispum dolor sit amet',
          url: 'https://github.com.br/facebook/react',
        },
      ];

    default:
      return state;
  }
}
