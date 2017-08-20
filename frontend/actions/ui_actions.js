export const SHOW_MODAL = "SHOW_MODAL"
export const HIDE_MODAL = "HIDE_MODAL"


export const showModal = (component, props) => {
  return {
    type: SHOW_MODAL,
    component,
    props
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}
