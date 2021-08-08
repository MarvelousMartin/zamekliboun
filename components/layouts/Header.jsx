import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faTimesCircle,
  faBed,
  faUtensils,
  faHeart,
  faWineGlassAlt,
  faCrown,
  faCheese,
  faCameraRetro,
  faHistory,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@headlessui/react";
import LanguageList from "components/elements/LanguageList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [items, setItems] = useState([]);

  const submenus = [
    {
      name: "Zámek",
      icon: faBed,
      children: [
        {
          name: "Apartmán 1",
          href: "",
          description: "Náš první krásný apartmán",
          icon: faCrown,
        },
        {
          name: "Apartmán 2",
          href: "",
          description: "Náš druhý krásný apartmán",
          icon: faCrown,
        },
        {
          name: "Apartmán 3",
          href: "",
          description: "Náš třetí krásný apartmán",
          icon: faCrown,
        },
        {
          name: "Apartmán 4",
          href: "",
          description: "Náš čtvrtý krásný apartmán",
          icon: faCrown,
        },
      ],
    },
    {
      name: "Restaurace",
      icon: faUtensils,
      children: [
        {
          name: "Jídelní lístek",
          href: "/restaurace/jidelni-listek",
          description: "Co si dáte dnes k obědu?",
          icon: faCheese,
        },
      ],
    },
    {
      name: "Služby",
      icon: faHeart,
      children: [
        {
          name: "Svatby",
          href: "/sluzby/svatby",
          description: "Poskytujeme i svatby",
          icon: faHeart,
        },
        {
          name: "Večírky",
          href: "/sluzby/vecirky",
          description: "I na večírky jsme připraveni",
          icon: faWineGlassAlt,
        },
      ],
    },
  ];

  const menu = [
    {
      name: "Penzion",
      description: "Náš úžasný penzion",
      href: "/penzion",
      icon: faBed,
    },
  ];

  const additionalMenu = [
    {
      name: "Historie",
      description: "Něco málo o naší historii",
      href: "/historie",
      icon: faHistory,
    },
    {
      name: "Galerie",
      description: "Podívejte se na fotky našeho zámku",
      href: "/galerie",
      icon: faCameraRetro,
    },
    {
      name: "Kontakt",
      description: "Jak nás kontaktovat",
      href: "/kontakt",
      icon: faPhone,
    },
  ];

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10 dark:border-white">
              <div className="lg:w-0 lg:flex-1">
                <Link href="/">
                  <a className="flex items-baseline font-black text-xl md:text-2xl">
                    Zámek Libouň{" "}
                    <FontAwesomeIcon
                      size="xs"
                      icon={faCrown}
                      className="flex-shrink-0 text-red-600 ml-2"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                <p className="font-md text-md">Kamenný barokní zámek</p>
              </div>
              <div className="-mr-2 -my-2 xl:hidden">
                <Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Otevřít menu</span>
                  <FontAwesomeIcon icon={faBars} />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden xl:flex space-x-10">
                {submenus.map((menu) => (
                  <Popover className="relative" key={menu.name}>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? "text-gray-900 dark:text-gray-200"
                              : "text-gray-500 dark:text-gray-200",
                            "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-red-500 dark:ring-offset-gray-900"
                          )}
                        >
                          <span>{menu.name}</span>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            size="sm"
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                                {menu.children.map((child) => (
                                  <Link href={child.href} key={child.name}>
                                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                      <FontAwesomeIcon
                                        fixedWidth
                                        icon={child.icon}
                                        className="flex-shrink-0 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                          {child.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                          {child.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
                {menu.map((item) => (
                  <Popover className="relative" key={item.name}>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? "text-gray-900 dark:text-gray-200"
                              : "text-gray-500 dark:text-gray-200",
                            "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-red-500 dark:ring-offset-gray-900"
                          )}
                        >
                          <span>{item.name}</span>
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                                {additionalMenu.map((item) => (
                                  <Link href={item.href} key={item.name}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                      <FontAwesomeIcon
                                        fixedWidth
                                        icon={item.icon}
                                        className="flex-shrink-0 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-gray-900 dark:text-gray-200"
                            : "text-gray-500 dark:text-gray-200",
                          "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-red-500 dark:ring-offset-gray-900"
                        )}
                      >
                        <span>Ostatní</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          size="sm"
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                              {additionalMenu.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <FontAwesomeIcon
                                      fixedWidth
                                      icon={item.icon}
                                      className="flex-shrink-0 text-red-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 dark:bg-gray-800 sm:px-8 sm:py-8">
                              <div>
                                <ul className="mt-4 space-y-4">
                                  {items.map((post) => (
                                    <li
                                      key={post.name}
                                      className="text-base truncate"
                                    >
                                      <Link href={item.href}>
                                        <a
                                          href={`/blog/${post.slug}`}
                                          className="font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-200"
                                        >
                                          {post.title}
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <div className="text-base font-medium text-gray-500">
                                  <Link href="/auth/login">
                                    <a className="text-red-600 hover:text-red-500">
                                      Přihlásit se
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="hidden xl:flex items-center justify-end md:flex-1 lg:w-0">
                <LanguageList />
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right xl:hidden z-10"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-dashed divide-y-2 divide-red-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="font-black text-xl md:text-2xl">Menu</div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Zavřít menu</span>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {submenus.map((menu) => (
                        <div key={menu.name}>
                          <Menu>
                            <Menu.Button className="flex justify-between w-full">
                              <div>
                                <FontAwesomeIcon
                                  fixedWidth
                                  icon={menu.icon}
                                  className="flex-shrink-0 text-red-600"
                                  aria-hidden="true"
                                />
                                <span className="ml-5 text-base font-medium text-gray-900">
                                  {menu.name}
                                </span>
                              </div>
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                size="sm"
                                className={classNames(
                                  open ? "text-gray-600" : "text-gray-400",
                                  "ml-2 h-5 w-5 group-hover:text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                            </Menu.Button>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Menu.Items className="flex flex-col ml-3 mt-5">
                                {menu.children.map((child) => (
                                  <Menu.Item className="mb-3" key={child.name}>
                                    {({ active }) => (
                                      <Link href={child.href}>
                                        <a
                                          className={`${
                                            active && "bg-blue-500"
                                          }`}
                                        >
                                          <FontAwesomeIcon
                                            fixedWidth
                                            size="xs"
                                            icon={child.icon}
                                            className="flex-shrink-0 text-red-600"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-3 text-base text-gray-900">
                                            {child.name}
                                          </span>
                                        </a>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      ))}
                      {menu.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="flex-shrink-0 text-red-600"
                              aria-hidden="true"
                              fixedWidth
                            />
                            <span className="ml-5 text-base font-medium text-gray-900">
                              {item.name}
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                {item.description}
                              </p>
                              {item.children}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {additionalMenu.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-base font-medium text-gray-500">
                      <Link href="/auth/login">
                        <a className="text-red-600 hover:text-red-500 mr-3">
                          Přihlásit se
                        </a>
                      </Link>
                    </div>
                    <LanguageList />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
