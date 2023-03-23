import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalProvider";
type Props = {
  poap: poap;
};

function Poap({ poap }: Props) {
  const { toggleModal } = useContext(ModalContext);

  return (
    <motion.div
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.95 }}
      className="h-24 w-24 relative overflow-hidden rounded-full cursor-pointer"
      onClick={() =>
        toggleModal({
          title: poap.event.name,
          img: poap.event.image_url,
          imgKey: poap.event.fancy_id,
          key: poap.event.id.toString(),
          date: formatDate(poap.created),
          description: poap.event.description,
        })
      }
    >
      <Image
        src={poap.event.image_url}
        fill
        className="object-cover border-none "
        alt={poap.event.fancy_id}
        sizes={"6rem 6rem"}
      />
    </motion.div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();

  const monthName = monthNames[monthIndex];

  return `${monthName} ${day} of ${year}`;
}

export default Poap;
