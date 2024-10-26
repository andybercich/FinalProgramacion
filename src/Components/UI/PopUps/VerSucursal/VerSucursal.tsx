import styles from './VerSucursal.module.css'

const VerSucursal = () => {
  return (
    <div className={styles.containerSucursal}>
        <div className={styles.containerCardSucursal}>
            <div className={styles.containerHeaderCard}>
                <h3 className={styles.cardTitle}>Nombre Sucursal</h3>
                <button className={styles.closeButton}>X</button>
            </div>
            <div className={styles.containerBodyCard}>
                <p>Empresa:</p>
                <p>Domicilio:</p>
                <p>Casa Matriz:</p>
                <p>Horario:</p>
            </div>
            <div className={styles.containerImgCard}>
                <p className={styles.imgCard}>Imagen</p>
            </div>
        </div>
    </div>
  )
}

export default VerSucursal
