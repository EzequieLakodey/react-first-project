// React
import { useEffect, useState } from 'react'

// Components
import ItemsDetails from '../ItemsDetails/ItemsDetails'

// FireStore
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../utils/firebase/FireBaseConfig'

// Material Ui
import CircularProgress from '@mui/material/CircularProgress'

// React Router Dom
import { useParams } from 'react-router'

// Data Hook
import useGetProducts from '../../utils/Hooks/GetFireBaseData'

/* Imports */

export const ItemsDetailsContainer = () => {
  const { data: productsData, isLoading } = useGetProducts()
  console.log(productsData)

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const docReference = doc(db, 'Fake Store Api ', id)
    getDoc(docReference)
      .then(result => {
        setData({ ...result.data(), id: result.id })
      })

      .finally(() => setLoading(false))
  }, [id])

  return <div>{loading ? <CircularProgress color='success' /> : <ItemsDetails data={data} />}</div>
}

export default ItemsDetailsContainer
