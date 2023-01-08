import * as React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"

export default function VehiclePage({data: {wpVehicle: {vehicleMeta: vehicle}}}) {
  return(
  <Layout>
    <h1>{vehicle.vehicleName}</h1>
    <img src={vehicle.vehicleImage.sourceUrl} />
    <p>{vehicle.vehicleDescription}</p>
    <ul>
        <li>Type of transport: {vehicle.transportType}</li>
        <li>Maximum cargo capacity: {vehicle.maximumCargoCapacity}Kg</li>
        <li>Armor: {vehicle.armor}</li>
        <li>Empty weight: {vehicle.emptyWeight}Kg</li>
        <li>Maximum speed (in best conditions): {vehicle.maximumSpeed}km/h</li>
        <li>Maximum operational range: {vehicle.maxRange}km</li>
        <li>Used by (branch or nation): {vehicle.militaryBranch}</li>
    </ul>
  </Layout>
)}
export const query = graphql`
query ($slug: String) {
    wpVehicle(slug: {eq: $slug}) {
      id
      vehicleMeta {
        vehicleName
        vehicleImage {
          sourceUrl
        }
        vehicleDescription
        transportType
        maximumCargoCapacity
        maximumSpeed
        emptyWeight
        armor
        maxRange
        militaryBranch
      }
    }
  }
`