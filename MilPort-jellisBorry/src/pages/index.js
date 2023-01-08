import * as React from "react"
import { graphql,useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import VehicleCard from "../components/vehicleCard"

const IndexPage = () => {
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
    <h2>Featured</h2>
    <div className={styles.container}>
      {data.allWpVehicle.edges.map((cVehicle,index) =>index<3&& <VehicleCard key={index} vehicle={cVehicle.node}/>)}
    </div>
  </Layout>
)}

export const Head = () => <Seo title="Home" />

export default IndexPage
