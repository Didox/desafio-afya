import { useState } from 'react';

import ClientsModal from '../../../components/ClientsModal';
import Sidebar from '../../../components/Sidebar';

import { ClientsContainer } from './styles';

const Clients: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <ClientsContainer>
        <Sidebar title="Clientes" />
        <main>
          <button type="button" onClick={handleModalOpen}>
            Cadastrar cliente
          </button>
        </main>
      </ClientsContainer>
      <ClientsModal state={modalIsOpen} setState={setModalIsOpen} />
    </>
  );
};

export default Clients;
