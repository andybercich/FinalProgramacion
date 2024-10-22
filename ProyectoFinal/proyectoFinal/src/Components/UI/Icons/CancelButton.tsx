import { FC } from "react";
import styles from "./styles.module.css"

interface CancelButtonProps {
  onClick: () => void; 
}

export const CancleButton: FC<CancelButtonProps> = ({onClick}) => {
  return (
    <span onClick={onClick} className={`material-symbols-outlined ${styles.customIcon}`}>

        cancel
    </span>
  )
}
