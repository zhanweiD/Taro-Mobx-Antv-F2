import React, {useEffect, useState} from 'react'
import {getCurrentInstance} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

const Demo1 = props => {
  const [ num, setNum ] = useState(0)

  const addNum = () => {
    setNum(num+1)
  }
  const subNum = () => {
    setNum(num-1)
  }
  const syncNum = () => {
    setTimeout(() => setNum(num+1), 1000)
  }

  useEffect(() => {
    getCurrentInstance().router.params.num ? setNum(+getCurrentInstance().router.params.num) : null
  }, [])

  return (
    <View>
      <Text>{num}</Text>
      <Button onClick={addNum}>+</Button>
      <Button onClick={subNum}>-</Button>
      <Button onClick={syncNum}>sync+</Button>
    </View>
  )
}

export default Demo1






// import React, { Component } from 'react'
// import { View, Button, Text } from '@tarojs/components'
// import { observer, inject } from 'mobx-react'

// import Demo2 from '../demo2/index'

// import './index.styl'


// @inject('store')
// @observer
// class Demo1 extends Component {
//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   increment = () => {
//     const { counterStore } = this.props.store
//     counterStore.increment()
//   }

//   decrement = () => {
//     const { counterStore } = this.props.store
//     counterStore.decrement()
//   }

//   incrementAsync = () => {
//     const { counterStore } = this.props.store
//     counterStore.incrementAsync()
//   }

//   render () {
//     const { counterStore: { counter } } = this.props.store
//     return (
//       <View className='index'>
//         <Button onClick={this.increment}>+</Button>
//         <Button onClick={this.decrement}>-</Button>
//         <Button onClick={this.incrementAsync}>Add Async</Button>
//         <Text>{counter}</Text>
//         <Demo2 />
//       </View>
//     )
//   }
// }

// export default Demo1
