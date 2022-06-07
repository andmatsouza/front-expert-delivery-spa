import { useState } from "react";
import {
  IconArrowRight,
  IconSupport,
  IconClose,
  IconMail,
  IconDocument,
  IconPhone,
} from "../../icon-family";
import { Dialog } from '@headlessui/react';
import Image from "next/image";
import Styles from './styles.module.css';

export const SettingsSupport = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <>
          <div>
            <IconSupport color="#503E9D" />
            Suporte
          </div>
          <IconArrowRight color="#A3A3A4" size={16} />
        </>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex bg-black/25 items-center justify-center p-4">
          <Dialog.Panel className={Styles.modal}>
            <Dialog.Title
              as="h2"
              className="mb-8 flex justify-between items-center"
            >
              <div>Suporte</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <ul>
              <li>
                <button>
                  <div className={Styles.purple}>
                    <IconMail color="#503E9D" size={16} />
                  </div>
                  <div>
                    <h4>Chat ao vivo</h4>
                    <p>Tempo de Espera: 5 min</p>
                  </div>
                  <IconArrowRight color="#A3A3A4" size={16} />
                </button>
              </li>

              <li>
                <button>
                  <div className={Styles.orange}>
                    <IconDocument color="#FB6D3A" size={16} />
                  </div>

                  <div>
                    <h4>FAQ</h4>
                    <p>182 Park Row Street, Suite 8</p>
                  </div>
                  <IconArrowRight color="#A3A3A4" size={16} />
                </button>
              </li>

              <li>
                <button>
                  <div className={Styles.yellow}>
                    <IconPhone color="#FACD5D" size={16} />
                  </div>

                  <div>
                    <h4>Phone number</h4>
                    <p>+1 (987) 1234 098</p>
                  </div>
                  <IconArrowRight color="#A3A3A4" size={16} />
                </button>
              </li>
            </ul>

          </Dialog.Panel>
        </div>
      </Dialog>


    </>
  )
}