
import { SHOW_MODAL } from '../actions/ui_actions'
import { HIDE_MODAL } from '../actions/ui_actions'

const defaultState = {
  modal: {
    display: false,
    component: null,
    props: null
  }
}

const uiReducer = (state = defaultState, action) => {
  let modalState;
  switch (action.type) {
    case SHOW_MODAL:
      modalState = {
        modal: {
          display: true,
          component: action.component,
          props: action.props
        }
      }
      return {...state, ...modalState}
    case HIDE_MODAL:
      modalState = { modal: {display: false} }
      return {...state, ...modalState}
    default:
      return state
  }
}

export default uiReducer;
