import React, {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import Test from './test'
import './index.styl'

const Demo2 = props => {
  const [userName ,setUserName] = useState('Taro')

  const setName = name => {
    setUserName(`Taro--${name}`)
  }

  const goDemo1 = () => {
    Taro.navigateTo({
      url: '/pages/demo1/index?num=100'
    })
  }

  const getReq = async reqObj => {
    const {url, data, success} = reqObj

    await Taro.request({
      url,
      method: 'Get',
      data,
      success,
      fail: err => {
        console.log(err)
      }
    })
  }

  const postReq = async reqObj => {
    const {url, data, success} = reqObj
    await Taro.request({
      url,
      method: 'POST',
      data,
      success,
      fail: err => {
        console.log(err)
      }
    })
  }

  const testReq = async () => {
    await getReq({
      url: 'https://apiblog.jspang.com/default/getArticleList',
      data: {
        test: '1111'
      },
      success: res => {
        console.log(res.data)
      }
    })
  }

  useEffect(() => {
    testReq()
  }, [])

  console.log(Taro)
  return ( 
    <View className="taro-test">
      <Text className="taro-name">{userName}</Text>
      <Button onClick={() => goDemo1()}>godemo1</Button>
      <Button onClick={() => setName('demo2')}>demo2</Button>
      <Test name={userName} setName={setName} />
    </View>
  )
}

export default Demo2
