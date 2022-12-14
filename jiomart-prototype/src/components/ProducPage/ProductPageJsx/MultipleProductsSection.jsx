import React from 'react'
import styles from '../ProductPageModuleCss/MultipleProductsSection.module.css'
import { Pagination } from './Pagination'
import { SingleProductCard } from './SingleProductCard'
import { Spinner } from '@chakra-ui/react'

export const MultipleProductsSection = ({ data }) => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.title}>
        ALL PRODUCTS
      </div>
      {
        data.length === 0
          ?
          <Spinner
            style={{ "marginLeft": "48%" }}
            size={"xl"}
            color="red"
          />
          :
          <div className={styles.productdiv}>
            {
              data.map((e) => {
                return <SingleProductCard item={e} />
              })
            }
          </div>
      }

      <Pagination />
    </div>
  )
}

