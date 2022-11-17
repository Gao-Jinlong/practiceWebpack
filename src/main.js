import createHeading from "./heading.js";
import * as echarts from "echarts";
// const heading = createHeading();
// document.body.append(heading);

const div = document.createElement("div");
div.id = "main";
div.style.width = "600px";
div.style.height = "400px";
document.body.append(div);
var myChart = echarts.init(document.getElementById("main"));

myChart.setOption({
  title: {
    text: "Echarts 入门示例",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
    {
      name: "售价",
      type: "line",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
});
