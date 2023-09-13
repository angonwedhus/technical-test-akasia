import { Component } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  data: Users[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.usersService.getData().subscribe((response) => {
      this.data = response;
    });
  }

}
