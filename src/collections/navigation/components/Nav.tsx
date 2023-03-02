import useScrollPosition from "@/common/composables/use-scroll-position";
import useTransitionShow from "@/common/composables/use-transition-show";
import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

const Nav: Component<{ disableAnimation?: boolean }> = (props) => {
  const navItems = [
    {
      href: "/home",
      label: "Home",
      icon: "heroicons-outline:home"
    },
    {
      href: "/about",
      label: "About",
      icon: "heroicons-outline:information-circle"
    },
    {
      href: "/projects",
      label: "Projects",
      icon: "heroicons-outline:collection"
    },
    {
      href: "/contact",
      label: "Contact",
      icon: "heroicons-outline:mail"
    }
  ];

  const { show, setShow, isShowing } = useTransitionShow(300);

  const scroll = useScrollPosition();

  return (
    <nav class={` fixed z-30 p-6 md:p-4 ${props.disableAnimation ?? "slide-in-left"}`} style="--animation-delay:2000ms">
      <button
        aria-label="Open Menu"
        aria-controls="navigation-list"
        class="neumorphic-reverse flex items-center justify-center rounded-full p-3 md:hidden"
        onClick={() => setShow(!show())}
      >
        <Icon icon="heroicons-outline:menu" class="text-2xl text-gray-600" />
      </button>
      <ul
        id="navigation-list"
        class={`${isShowing() ? "flex" : "hidden"} ${show() ? "slide-in-top" : "slide-out-top"} ${
          scroll() > 10 ? "shadow-lg" : ""
        } md:(flex gap-4 p-0 mt-0 flex-row) bg-kinda-white transition-shadow mt-2 flex-col flex-wrap gap-8 rounded-md p-4`}
        style="--animation-delay:0ms"
      >
        <For each={navItems}>
          {(item) => (
            <li class="text-md font-thin text-gray-800 p-4">
              <A
                href={item.href}
                class="flex items-center justify-center gap-1"
                activeClass="text-blue-600"
                onClick={() => setShow(false)}
              >
                <Icon icon={item.icon} class="text-md" />
                {item.label}
              </A>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default Nav;
