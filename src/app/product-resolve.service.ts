import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Item} from './item.interface';
import {Observable} from 'rxjs';
import {FeedService} from './feed.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Item> {

  constructor(private feedService: FeedService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Item> {
    const id = route.params.id;

    return this.feedService.getProductById(id);
  }
}
