import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
employees: Employee[] = [
    {
      id: '12',
      name: 'John Doe',
      email: 'jose.bush@gmail.com',
      phone: 9329439843,
      salary: 50000,
      department: 'IT',
    },
    {
      id: '23',
      name: 'Sole Doe',
      email: 'jose.bush@gmail.com',
      phone: 9329439843,
      salary: 50000,
      department: 'IT',
    },
    {
      id: '34',
      name: 'Muze Doe',
      email: 'jose.bush@gmail.com',
      phone: 9329439843,
      salary: 50000,
      department: 'IT',
    },
    {
      id: '45',
      name: 'Num Doe',
      email: 'jose.bush@gmail.com',
      phone: 9329439843,
      salary: 50000,
      department: 'IT',
    },
    {
      id: '56',
      name: 'Xick Doe',
      email: 'jose.bush@gmail.com',
      phone: 9329439843,
      salary: 50000,
      department: 'IT',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}


