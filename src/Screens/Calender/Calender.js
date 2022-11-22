import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Calender = () => {
  const [data, setData] = useState([])

  let baseUrl = "https://dummyjson.com/products/search?q=Laptop"

  useEffect(() => {
    fetchData()

  }, [])

  //production
  const fetchData = () => {
    let promise = new Promise(function (resolve, reject) {
      // let res = axios.get(_URl)
      const data=1234
      if (false) {
        resolve(data)
      } else {
        reject()
      }
    })
    return promise
  }
//consumer
   fetchData().then(
      (data) => {
        console.log("result",data)
      }).catch(() => {
        console.log( 'error error error')
      }
    )
  





  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text>{item?.title}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={() => {
          return (
            <Text>no data here</Text>
          )
        }}
      />
    </View>
  )
}

export default Calender
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})