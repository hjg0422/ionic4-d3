/**
 * 重力球
 */
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-d-three-tw',
  templateUrl: './d-three-tw.page.html',
  styleUrls: ['./d-three-tw.page.scss'],
})
export class DThreeTwPage implements OnInit {
  // d3: any;
  strength: number = -5;
  demo1(): void {
    const numNodes = 100;
    var width = 400, height = 400;
    const nodes = d3.range(numNodes).map(function (d) {
      return { radius: Math.random() * 25 }
    })


    // 添加一个或多个力功能（例如forceManyBody，forceCenter，forceCollide）到系统
    /**
     * forceManyBody （用于使元素彼此吸引或排斥）
     * forceCollide （用于防止元素重叠）
     * forceX和forceY（用于吸引元素到给定点）
     * forceLink （用于在连接元素之间创建固定距离）
     */
    let that = this;
    console.log(window.innerWidth / 2, window.innerHeight / 2);
    d3.select('svg').style('width', _ => window.innerWidth + 'px').style('height', _ => window.innerHeight + 'px')
    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(this.strength))
      .force('center', d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))
      .force('collision', d3.forceCollide().radius(function (d) {
        return d.radius;
      }))
      .on('tick', ticked);
    function ticked() {
      const u = d3.select('svg')
        .selectAll('circle')
        .data(nodes).on('mouseover', _ => console.log('飘过')).on('click', _ => {
          if (that.strength >= 20) {
            that.strength = that.strength -25;
          }
          else {
            that.strength = that.strength + 5;
          }
          console.log('点击', that.strength);
          return that.demo1()
        });

      u.enter()
        .append('circle')
        .attr('r', d => d.radius)
        .merge(u)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .style('fill', _ => 'orange');


      u.exit().remove();
    }
  }
  constructor() {
    // this.d3 = D3;
  }

  ngOnInit() {
    this.demo1();
  }
}
