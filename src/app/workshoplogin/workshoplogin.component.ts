import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface User {
  username: string;
  password: string;
}
@Component({
  selector: 'app-workshoplogin',
  templateUrl: './workshoplogin.component.html',
  styleUrls: ['./workshoplogin.component.scss']

})
export class WorkshoploginComponent {
  username!: string;
  password!: string ;
  users!: User[];
  constructor(private http: HttpClient) {
    this.http.get<User[]>('../../assets/log.json').subscribe(users => {
      this.users = users;
    });
}
login() {
  console.log('Form submitted');
  console.log('Username:', this.username);
  console.log('Password:', this.password);
  const foundUser = this.users.find((user: User) => user.username === this.username && user.password === this.password);

  if (foundUser) {
    alert('เข้าสู่ระบบสำเร็จ');
  } else {
    alert('เข้าสู่ระบบไม่สำเร็จ');
  }
}
}
