import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, OnDestroy {

  @Input() tabIndex: number;
  @Input() tabTitle: string;
  @Input() tabContent: string;

  public isActivated: boolean;

  private routeParamsSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.routeParamsSub = this.route.params.subscribe((params: Params) => {
      this.isActivated = Number(params.id) === this.tabIndex;
    });
  }

  public ngOnDestroy(): void {
    if (this.routeParamsSub) {
      this.routeParamsSub.unsubscribe();
    }
  }

  public selectTab(index: number): void {
    this.router.navigate([`tabs/${index}`]);
  }
}
