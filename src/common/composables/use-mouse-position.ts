const [mouse, setMouse] = createSignal({ x: 0, y: 0 });

window.addEventListener("mousemove", (e) => {
  setMouse({ x: e.clientX, y: e.clientY });
});

export default function () {
  return mouse;
}
