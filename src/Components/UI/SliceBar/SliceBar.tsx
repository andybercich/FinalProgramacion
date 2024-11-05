import { useState } from "react";
import styles from "./Slice.module.css"
import { Link } from "react-router-dom";

export const SliceBar = () => {
  const [show, setShow] = useState(false);
  const handleSlice = () => setShow(!show);
  const [selectedLinkId, setSelectedLinkId] = useState<number | null>(null);

  const handleLinkId = (id: number) => {
    setSelectedLinkId(id);
    setShow(false) 
  };

  return (
    <div className={`${styles.mainDiv} ${!show ? styles.hidden : ''}`}>

      <div className={`${styles.divBar} ${!show ? styles.hidden : ''}`}>

        <div className={styles.barTitle}>

          <h1>Admin</h1>

        </div>

        <div className={styles.enlaces}>

          <Link 
            to="/admin/productos"
            className={`${styles.divText} ${selectedLinkId === 1 ? styles.divTextSelected : ""}`} 
            onClick={() => handleLinkId(1)}
          >
            <h2>Productos</h2>
          </Link>


          <Link 
          to="/admin/alergenos"
            className={`${styles.divText} ${
              selectedLinkId === 2 ? styles.divTextSelected : ""
            }`} 
            onClick={() => handleLinkId(2)}
            >
            <h2>Alergenos</h2>
          </Link>

          
          <div className={`${styles.divText} ${
              selectedLinkId === 3 ? styles.divTextSelected : ""
            }`} 
            onClick={() => handleLinkId(3)}
            >
            <h2>Categorias</h2>
          </div>
        </div>


      </div>


      <span
        className={`material-symbols-outlined ${styles.arrowButton} ${!show ? styles.hidden : ''}`}
        onClick={handleSlice}
      >
        {show ? 'arrow_back_ios' : 'arrow_forward_ios'}
      </span>
    </div>
  );
};