import { useState } from "react";
import {
  IconArrowRight,
  IconInvitedFriend,
  IconClose,
  IconPlus,
} from "../../icon-family";
import { Dialog } from '@headlessui/react';
import Image from "next/image";
import Styles from './styles.module.css';

export const SettingsInviteFriend = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

 
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <>
          <div>
          <IconInvitedFriend color="#FB6D3A" />
            Convidar Amigo
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
              <div>Convidar Amigo</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <button className={Styles.inviteButton}>
              <div><IconPlus color="#503E9D"/></div>
              Enviar um convite para um amigo
            </button>

            <h3>Amigos convidados (2)</h3>
            <ul>
              <li>
                <div>
                <Image src="/woman.png" width="48" height="48" alt="woman" />
                    
                    <div>
                      <h4>Kate Simpson</h4>
                      <p>katesimpson@outlook.com</p>
                    </div>

                </div>
              </li>

               <li>
                <div>
                <Image src="/user-avatar.png" width="48" height="48" alt="man" />
                    
                    <div>
                      <h4>Andrew Smith</h4>
                      <p>andrewsmith@outlook.com</p>
                    </div>

                </div>
              </li>  


            </ul>           
          </Dialog.Panel>
        </div>
      </Dialog>


    </>
  )
}