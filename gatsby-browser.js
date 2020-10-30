import "./src/app/global.css"

/**
 * Since HTML is prerendered, need to wait until the JS
 * has loaded to show the screen. This hack fixes the flashing
 * on refresh.
 */
export const onInitialClientRender = () => {
  const item = document.getElementById("hide-content")
  item.removeAttribute("id")

  const setHeight = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  window.addEventListener('resize', setHeight);
  window.addEventListener('orientationchange', setHeight);
}

