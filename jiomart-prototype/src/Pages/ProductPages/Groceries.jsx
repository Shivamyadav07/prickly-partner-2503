import React from 'react'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import styles from './Groceries.module.css'
import {useDispatch, useSelector} from 'react-redux'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getProductData } from '../../Redux/ProductReducer/action'

export const Groceries = () => {
  const products=useSelector(state=>state.productreducer.products);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProductData());
  },[])

  
  return (
    <div className={styles.home}>
      <div className={styles.toplink}>
        <Breadcrumb 
          spacing='8px' separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>AllCategory</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Groceries</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className={styles.maindiv} >
        <SideBarFilter />
        <ProductPage data={products} />
      </div>
    </div>
  )
}
