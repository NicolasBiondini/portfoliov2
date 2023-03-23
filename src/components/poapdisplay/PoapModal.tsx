import { ModalContext } from "@/context/ModalProvider";
import Image from "next/image";
import React, { useContext } from "react";
import Markdown from "../Markdown";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

const PoapModal = ({}: Props) => {
  const { toggleModal, modalInfo } = useContext(ModalContext);
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div
      key={"modal"}
      onClick={(e) => handleClose(e)}
      className="w-full h-screen bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto fixed top-0 left-0 z-30 flex justify-center items-center"
    >
      <div
        key={modalInfo.key}
        className="w-[90%] h-[80%] lg:w-1/2 lg:h-3/5 lg:min-h-[600px]  bg-black border-2 border-orange-600 flex flex-col z-40"
      >
        <button className=" self-end mt-4 mr-4" onClick={() => toggleModal()}>
          <XCircleIcon className="w-8 h-8 text-orange-600 hover:text-orange-400" />
        </button>
        <div className="flex flex-col gap-8 justify-center  h-full items-center">
          <h2 className="text-xl font-extrabold text-center max-w-[80%]">
            {modalInfo.title}
          </h2>
          <motion.div
            key={modalInfo.imgKey}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-32 w-32 relative overflow-hidden rounded-full"
          >
            <Image
              fill
              key={`${modalInfo.imgKey} ${modalInfo.key}`}
              src={modalInfo.img}
              alt={modalInfo.imgKey}
              sizes={"8rem 8rem"}
            />
          </motion.div>
          <p>{modalInfo.date}</p>
          <div className="max-w-[70%] pb-10 overflow-auto text-xs font-light font-mono ">
            <Markdown modal>{modalInfo.description}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoapModal;
