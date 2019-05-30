import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.page.html',
  styleUrls: ['./study-list.page.scss'],
})
export class StudyListPage implements OnInit {
  /**
   * 路由跳转
   */
  jumpToPage(): void {
    this.router.navigate(['/d3-three'], {
      queryParams: {
        page: 'week'
      }
    });
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    /*     setTimeout(_ => {
          this.jumpToPage()
        }, 500) */
  }

}
