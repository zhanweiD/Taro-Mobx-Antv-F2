import React, { Component } from "react"
import { View } from "@tarojs/components"
import F2Canvas from "@/components/F2Canvas/F2Canvas"
import F2 from "@antv/f2"

const Demo3 = (props) => {
  const onInit = (config) => {
    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 },
    ]
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart(config)
    // Step 2: 载入数据源
    chart.source(data)

    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval().position("genre*sold").color("genre")

    // Step 4: 渲染图表
    chart.render()
    return chart
  }
  return (
    <View className="index">
      <F2Canvas
        id="demo3"
        style="width: 100%; height: 300px;"
        onInit={onInit}
      />
    </View>
  )
}

export default Demo3
