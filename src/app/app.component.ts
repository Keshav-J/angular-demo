import { Component } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLastName: boolean;

  pageNumber: number = 1;
  totalPages: number = 3;

  showPrevious: boolean;
  showNext: boolean;

  customers = [];
  searchTerm: string = "";

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.getCustomers(this.pageNumber);
  }

  getCustomers(pageNumber: number) {
    pageNumber = +pageNumber > 1 && +pageNumber <= this.totalPages ? +pageNumber : 1;

    setTimeout(() => {
      this.pageNumber = pageNumber;
    }, 0);

    this.customersService.getCustomers(pageNumber).subscribe(
      response => {
        response.data.forEach(cust => {
          cust.revenue = cust.id * 200000;
        });

        this.customers = response.data;
        this.totalPages = response.total_pages;

        this.showNext = this.pageNumber < this.totalPages;
        this.showPrevious = this.pageNumber > 1;

        console.log("After Response");        
      },
      error => {
        console.log(error);        
      }
    )
    console.log("Before Response");
  }

  toggleLastName() {
    this.showLastName = !this.showLastName;
  }

  nextPage() {
    this.pageNumber++;
    this.getCustomers(this.pageNumber);
  }

  previousPage() {
    this.pageNumber--;
    this.getCustomers(this.pageNumber);
  }

  validate(customer) {
    return (
      (customer.first_name as string).toLowerCase().includes(this.searchTerm) ||
      (customer.last_name as string).toLowerCase().includes(this.searchTerm) ||
      (customer.email as string).toLowerCase().includes(this.searchTerm)
    );
  }
}
