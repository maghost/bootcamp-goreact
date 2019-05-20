/**
 * TYPES
 */
export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

/**
 * REDUCERS
 */
const INITIAL_STATE = {
  visible: false,
  data: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        visible: true,
        data: action.payload.data,
      };

    case Types.HIDE:
      return {
        visible: false,
        data: null,
      };

    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  showModal: data => ({
    type: Types.SHOW,
    payload: { data },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
