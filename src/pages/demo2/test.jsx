import React, {useEffect, useState} from 'react'
import { Button, View, Text } from '@tarojs/components'

const Test = props => {
  return (
    <View>
      <Button onClick={() => props.setName('demo1')}>demo1</Button>
      <Button onClick={() => props.setName('demo2')}>demo2</Button>
      <Text className="taro-name">{props.name}</Text>
    </View>
  )
}

export default Test