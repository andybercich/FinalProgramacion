import { FC } from "react";
import styles from "./VerAlergeno.module.css"
import { IAlergenos } from "../../../../Models/types/dtos/alergenos/IAlergenos";
import { useDispatch } from "react-redux";
import { removeElementActive } from "../../../../Redux/Slice/TablaReducer";

interface Props {
  onClose: () => void,
  alergeno: IAlergenos | null
}



export const VerAlergeno: FC<Props> = ({ onClose,alergeno }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.mainDiv}>

      <div className={styles.cardContainer}>

        <span onClick={() =>{onClose(); dispatch(removeElementActive())}} className="material-symbols-outlined">cancel</span>

          <div className={styles.bodyContainer}>
            
          <p style={{fontWeight:"bold"}}>{alergeno?.denominacion}</p>
            {alergeno?.imagen ? <img src={alergeno.imagen.url} alt="fotoAlergeno" /> : <img src={"imgNotFound.jpg"} alt="fotoAlergeno" /> }

          </div>
      </div>
    </div>
  );
};
