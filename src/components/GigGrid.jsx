import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { useState } from 'react'
import { useEffect } from 'react' */
import { GifGridItem } from './GifGridItem'


export const GigGrid = ({category}) => {
    

    const {data:images, loading} = useFetchGifs( category )
    

    

  

   
     
    return (
        <Fragment>
      <h1 className="animate__animated animate__fadeIn">{ category }</h1>

      {loading && <p className="animate__animated animate__bounce">Cargando...</p>}
      
       {
        <div className="card-grid ">
              {
              images.map( (img) => (
              <GifGridItem 
               key={img.id}
               {...img}  v
               />
                 ))
              }
              
          
        </div> 
        }
        </Fragment>
    )
}
