import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useSelector } from 'react-redux'

import actions from '../../redux/actions'
import styles from './style'
import { moderateScale, moderateScaleVertical } from '../../styles/resposnsiveSize'
import colorsPath from '../../constants/colorsPath'
import navigationStrings from '../../constants/navigationStrings'
import imagePath from '../../constants/imagePath'



const Post = ({ navigation, route }) => {
  const [data, setData] = useState([])

  // console.log("this is data in the post screen+++++++++++++++++ ",data)
  const [skip, setSkip] = useState(0)

  
  
  useEffect(() => {
    fetchData()

  }, [])


  const fetchData = async () => {
    try {
      if (skip === 100) {
        return;
      }
      const prevData = data

      // const res = await axios.get(`${baseUrl}skip=${skip}&limit=20`)
      // console.log('products data', res)
      // let productData = res.data.products

      // console.log("newdatatatat", productData)
      // setData([...prevData,...productData])
      // setSkip(skip + 20)
      const res = await actions.allProducts(`?limit=20&skip=${skip}`)
      console.log("response response response",res)

      let productData = res.products 
      console.log('1234567899',productData)
      setData([...prevData,...productData])
      setSkip(skip+20)
    }
    catch (err) {
      console.log("error raised",err)
    }
  }

  const onItemClick = (item) => {

    navigation.navigate(navigationStrings.ITEM_DETAILS, { id: item.id })
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={()=>{
          onItemClick(item)
        }}
        style={{
          backgroundColor: 'white',
          padding: 8,
          borderRadius: 14,
          borderColor: colorsPath.purple,
          flexDirection: 'row',
          shadowOffset: { height: 2, width: 0 },
          shadowRadius: 1,
          shadowOpacity: 10,
          shadowColor: colorsPath.grey
        }}>

        <Image style={{ height: 140, width: 100 }} source={{ uri: item?.thumbnail }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>{item?.title}</Text>
                        <TouchableOpacity>
                            <Image style={{
                                height: 20, width: 20, tintColor: 'red',
                                position: "absolute",
                                right: 4
                            }} source={imagePath.icBin} />
                        </TouchableOpacity>
                    </View>
          <Text style={{ fontSize: 13, color: 'grey' }}>{item?.description}</Text>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: '500', fontSize: 18, color: 'green' }}>${item?.price}</Text>
                <Text> ({item?.discountPercentage}%off)</Text>
              </View>
              <Text>Rating: {item?.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      
      <FlatList
        data={data}
        renderItem={
          renderItem
        }
        ItemSeparatorComponent={() => {
          return (
            <View style={{ marginTop: moderateScaleVertical(16) }} />
          )
        }}
        onEndReached={()=>{
          fetchData()
        }}

      />
    </View>
  )
}
export default Post
