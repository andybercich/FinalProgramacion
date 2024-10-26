import styles from "./CardSucursal.module.css"
import { Card } from "react-bootstrap";



export const CardSucursal = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardSucursal
