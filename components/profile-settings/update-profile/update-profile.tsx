import { useState } from "react";
import { Button } from "../../";
import {
  IconArrowRight,
  IconProfile,
  IconClose,
} from "../../icon-family";
import { Dialog } from '@headlessui/react';
import { UserProfile } from "../../user-profile";
import { InputText } from '../../../components';

export const SettingsUpdateProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUpdateProfile = () => {
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
            <IconProfile color="#503E9D" />
            Informações Pessoais
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
              <div>Informações Pessoais</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <p>Imagem do Perfil</p>
            <div className="mt-[32px] mb-[60px] flex justify-between items-center">
              <UserProfile />
              <button className="w-[116px] h-[40px]  bg-[#503E9D] text-white font-bold  rounded-[8px]">Upload</button>
              <button className="w-[116px] h-[40px]  bg-[#F7F7F7] text-[#182135] font-bold  rounded-[8px]">Deletar</button>
            </div>

            <p>Detalhes do Perfil</p>
            <div className="mt-[32px]">
            <IconProfile size={20} color="#503E9D" />
            <InputText label='Nome Completo' type='text' placeholder='Informe o seu nome' />
            <InputText label='Endereço de E-mail' type='email' placeholder='Informe o seu e-mail' />
            <InputText label='Número do Telefone' type='text' placeholder='Informe o seu telefone' />
            </div>

            <Button
              variant="primary"
              loadingMessage="Enviando..."
              isLoading={isLoading}
              onClick={handleUpdateProfile}
            >
              Atualizar Perfil
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>


    </>
  )
}