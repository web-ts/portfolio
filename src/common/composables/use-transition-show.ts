export default function (delay: number | [number, number] = 0, defaultState: boolean = false) {
  const [show, setShow] = createSignal(defaultState);

  const [isShowing, setIsShowing] = createSignal(defaultState);

  let showTimeout: NodeJS.Timeout | undefined = undefined;
  let hideTimeout: NodeJS.Timeout | undefined = undefined;

  createEffect(() => {
    if (Array.isArray(delay)) {
      if (show()) {
        if (showTimeout) clearTimeout(showTimeout);
        hideTimeout = setTimeout(() => {
          setIsShowing(true);
        }, delay[1]);
      } else {
        if (hideTimeout) clearTimeout(hideTimeout);
        showTimeout = setTimeout(() => {
          setIsShowing(false);
        }, delay[0]);
      }
    } else {
      if (show()) {
        setIsShowing(true);
        if (showTimeout) clearTimeout(showTimeout);
      } else {
        showTimeout = setTimeout(() => {
          setIsShowing(false);
        }, delay);
      }
    }
  });

  return {
    show,
    setShow,
    isShowing
  };
}
