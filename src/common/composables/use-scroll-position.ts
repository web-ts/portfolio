const [scroll, setScroll] = createSignal(0);

function setScrollPosition() {
  setScroll(window.scrollY);
}

window.addEventListener("scroll", setScrollPosition);

export default function () {
  return scroll;
}
