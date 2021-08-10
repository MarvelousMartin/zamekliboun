import { useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Lightbox({ isOpen, setIsOpen, image }) {
  let cancelButtonRef = useRef(null);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        initialFocus={cancelButtonRef}
        ref={cancelButtonRef}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto w-full h-full flex items-center justify-center"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <div className="relative w-11/12 h-2/6 lg:w-5/12 lg:h-3/6">
          <Image src={image} layout="fill" objectFit="cover" className="" />
          <button
            className="absolute right-4 top-4 p-2 bg-damask-700 w-6 h-6 flex justify-center items-center rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} size="xs" className="text-white" />
          </button>
        </div>
      </Dialog>
    </Transition>
  );
}
