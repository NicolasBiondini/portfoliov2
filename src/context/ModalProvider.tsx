import React, { createContext, useState } from "react";

type ModalContextType = {
  showModal: boolean;
  modalInfo: ModalInfo;
  toggleModal: (info?: ModalInfo) => void;
};

export const ModalContext = createContext<ModalContextType>({
  showModal: false,
  modalInfo: {
    title: "",
    img: "",
    imgKey: "",
    key: "",
    date: "",
    description: "",
  },
  toggleModal: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ModalProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    title: "",
    img: "",
    imgKey: "",
    key: "",
    date: "",
    description: "",
  });

  const toggleModal = (info?: ModalInfo) => {
    setShowModal(!showModal);
    if (!showModal) {
      document.documentElement.style.overflow = "hidden";
    }
    if (showModal) {
      document.documentElement.style.overflow = "auto";
    }
    if (info) {
      setModalInfo(info);
    }
  };

  return (
    <ModalContext.Provider value={{ showModal, modalInfo, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
