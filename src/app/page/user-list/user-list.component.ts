import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = this.userService.getAll();
  // filtering
  filterText: string = '';
  filterKey: string = 'name';
  // sorting
  sorterKey: string = '';
  isActive: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  onDeleteClick(user: User) {
    // console.log(user);
    let response = confirm(`Do you really want to delete user ${user.id}?`);
    if (response === true) {
      this.userService.remove(user).subscribe(() => {
        // console.log('deleted');
        this.users$ = this.userService.getAll();
      });
    }
  }

  onHeadClick(key: string): void {
    this.sorterKey = key;
    const keys = document.querySelectorAll('tr.tableHead th');
    keys.forEach((key) => key.classList.remove('active'));
    document.querySelector('#' + key)?.classList.add('active');
  }

}
