import { Component, input } from '@angular/core';
import { User } from '../../../../shared/types';

@Component({
  selector: 'app-user-page-detail',
  imports: [],
  templateUrl: './user-page-detail.html',
  styleUrl: './user-page-detail.css',
})
export class UserPageDetail {
    user = input.required<User>();
    ngOnInit(){
      console.log(this.user());
    }
}
