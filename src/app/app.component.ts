import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { delayWhen, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public frontPage: boolean;
  public isLoading: boolean;

  private routerEventsSub: Subscription;

  constructor(
    private router: Router
  ) {
    this.frontPage = true;
  }

  public ngOnInit(): void {
    const delay = (event: NavigationEnd) => {
      let dueTime = 0;

      this.frontPage = event.url === '/';
      this.isLoading = true;

      if (!this.frontPage) {
        dueTime = 3000;
      }

      return timer(dueTime);
    };

    this.routerEventsSub = this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        delayWhen(delay)
      )
      .subscribe(() => this.isLoading = false);
  }

  public ngOnDestroy(): void {
    if (this.routerEventsSub) {
      this.routerEventsSub.unsubscribe();
    }
  }
}
