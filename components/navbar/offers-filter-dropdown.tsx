import { Fragment, useState, useEffect } from 'react';
import { IconDiscount, IconArrowTopDown } from "../icon-family";
import { Menu, Transition } from '@headlessui/react';

export function OffersFilter() {
  const [offersModeSelected, setoffersModeSelected] = useState("");
  const offerdefault = "Na região";
  const offerOptions = [
    {
      title: "Na região",
    },
    {
      title: "Da semana",
    }
  ]

  const saveOfferMode = (offermode: string) => {
    setoffersModeSelected(offermode);
  }

  useEffect(() => {
    const update = () => {
      setoffersModeSelected(offerdefault);
    }

    update();
  }, [])
  return (

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center w-full">
          <IconDiscount color="#FACD5D" />
          {offersModeSelected}
          <div className='flex'>
            <IconArrowTopDown size={16} color="#000000" />
          </div>

        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-40 mt-2 bg-gray-100 shadow rounded-lg overflow-hidden">
          {offerOptions.map((offer, index) => (

            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  onClick={() => saveOfferMode(offer.title)}
                  className={`${active && 'bg-gray-200 text-gray-600'} py-2 px-4`}
                >
                  {offer.title}
                </a>
              )}
            </Menu.Item>
          ))}

        </Menu.Items>
      </Transition>
    </Menu>
  )
}