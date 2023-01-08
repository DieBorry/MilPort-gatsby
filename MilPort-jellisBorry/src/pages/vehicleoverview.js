import * as React from "react"
import { graphql,useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import VehicleCard from "../components/vehicleCard"
import * as styles from "../components/vehicleoverview.module.css"

export default function VehicleOverview() {
const data = useStaticQuery(graphql`
query MyQuery {
  allWpVehicle {
    edges {
      node {
        slug
        vehicleMeta {
          vehicleName
          vehicleImage {
            sourceUrl
          }
          vehicleDescription
          transportType
          maximumCargoCapacity
          emptyWeight
          maximumSpeed
          maxRange
          armor
          militaryBranch
        }
      }
    }
  }
}

`)
  
  return(
  <Layout>
    <h1>Vehicle overview</h1>
    <div className={styles.container}>
    {data.allWpVehicle.edges.map((cVehicle,index) => <VehicleCard key={index} vehicle={cVehicle.node}/>)}

    </div>
  </Layout>
)}
