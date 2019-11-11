import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedEntryComponent } from './modules/feed-entry/feed-entry.component';
import { FeedComponent } from './modules/feed/feed.component';


const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    data: {
      title: 'Feed list',
      desc: 'Feed list'
    },
  },
  {
    path: 'entry',
    component: FeedEntryComponent,
    data: {
      title: 'Feed Entry',
      desc: 'Feed Entry',
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
