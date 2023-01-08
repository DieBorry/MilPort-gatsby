import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/vehicleoverview.module.css"
const VehicleCard = ({ vehicle }) => {
    console.log(vehicle)
    return(
        <div className={styles.card}>
            <Link to={`/${vehicle.slug}`}>
            <h4>{vehicle.vehicleMeta.vehicleName}</h4>
            <img src={vehicle.vehicleMeta.vehicleImage.sourceUrl} />
            </Link>
        </div>
)}

export default VehicleCard
