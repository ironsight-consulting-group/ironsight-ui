import "./src/app/global.css"

/**
 * Since HTML is prerendered, need to wait until the JS
 * has loaded to show the screen. This hack fixes the flashing
 * on refresh.
 */
export const onInitialClientRender = () => {
  const item = document.getElementById("hide-content")
  item.removeAttribute("id")

  // const setHeight = () => {
  //   const header = document.getElementById('header')
  //   const container = document.getElementById('container')
  //   const val = header.clientHeight;
  //   container.style.setProperty('margin-top', `${val}px`);
  // }
  // setTimeout(() => setHeight(), 25);
  // window.addEventListener('resize', setHeight);
  // window.addEventListener('orientationchange', setHeight);
}
