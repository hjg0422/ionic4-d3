import { scaleLinear } from 'd3-scale';
import { Component, OnInit } from '@angular/core';
import * as D3 from 'd3';
@Component({
  selector: 'app-d-three-one',
  templateUrl: './d-three-one.page.html',
  styleUrls: ['./d-three-one.page.scss'],
})
export class DThreeOnePage implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this.DEMO1();
    this.DEMO2();
  }
  /**
   * 树状图
   */
  DEMO1(): void {
    const data = [50, 86, 168, 281, 303, 565];
    const myScale = D3.scaleLinear()
      .domain([0, 565]) // 定义输入d 的数值范围
      .range([100, 600]); // 输出指定范围比例的数值
    D3.select('.chart') // 选择父元素
      .selectAll('div') // 选择chart 下所有的div子元素
      .data(data) // 注入data
      .enter() // 占位符
      .append('div') // 插入dom
      .style('width', d => myScale(d) + 'px') // 绑定data元
      .style('background-color', d => `#108${Math.floor(myScale(d))}`
      ) //更新样式
      .text(d => '$' + d); // 绑定数据源，插入文本
  }
  DEMO2(): void {
    const points = [
      [0, 80],
      [100, 100],
      [200, 30],
      [300, 50],
      [400, 40],
      [500, 80]
    ];
    const lineGenerator = D3.line().defined(function (d) {
      console.log(d)
      return d !== null;
    }).curve(D3.curveCardinal);
    const pathData = lineGenerator(points);
    D3.select('path').attr('d', pathData);
    D3.select('svg')
      .selectAll('circle')
      .data(points)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return d[0];
      })
      .attr('cy', function (d) {
        return d[1];
      })
      .attr('r', 3);

  }
}
