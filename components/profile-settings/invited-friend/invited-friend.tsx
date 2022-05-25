import { useState } from "react";
import { Button } from "../../";
import {
  IconArrowRight,
  IconInvitedFriend,
  IconClose,
} from "../../icon-family";
import { Dialog } from '@headlessui/react';

export const SettingsInveitedFriend = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
    }, 3000)
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <>
          <div>
          <IconInvitedFriend color="#FB6D3A" />
            Convidar Amigos
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
          <Dialog.Panel className="w-[400px] p-8 rounded bg-white">
            <Dialog.Title 
            as="h2" 
            className="mb-8 flex justify-between items-center"
            >
              <div>Convidar Amigos</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <p>[tabs]</p>
            

            <Button 
            variant="primary" 
            loadingMessage="Enviando..." 
            isLoading={isLoading} 
            onClick={handleSend} 
            >
              Salvar Mudanças
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>


    </>
  )
}