import { Accessor } from "solid-js";

export default function (el: HTMLElement, classValue: Accessor<string>) {
  const [isVisible, setIsVisible] = createSignal(false);

  const options = {
    rootMargin: "20px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  }, options);

  function execute() {
    el.classList.add(...classValue().split(" "));
    observer.unobserve(el);
    observer.disconnect();
  }

  observer.observe(el);

  observer.takeRecords();

  if (isVisible()) {
    execute();
  }

  createEffect(() => {
    if (isVisible()) {
      execute();
    }
  });
}
