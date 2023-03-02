export default function (callback: (isVisible: boolean) => void) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  });

  function bind(element: HTMLElement) {
    observer.observe(element);
  }

  function destroy() {
    observer.disconnect();
  }

  return {
    bind,
    destroy
  };
}
