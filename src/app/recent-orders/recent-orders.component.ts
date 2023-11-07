import { Component } from '@angular/core';
import { recent_orders } from './recent-orders.json';
import { DatePipe } from '@angular/common';

export interface Order {
  srNo:number;
  customer:string;
  products:string;
  deliveryDate:any;
  status:any;
  trackingNo:any;
  shipping:any;
}

const ORDER: Order[] = [
  {srNo:1, customer: '', products: "", deliveryDate:"" ,status:'', trackingNo:'',shipping:''},
 
];
@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.css']
})
export class RecentOrdersComponent {
  constructor(private datePipe: DatePipe) { }
  isoDateString = "2023-10-25T17:44:25Z";
  date = new Date(this.isoDateString);
  
  // Format the date using the DatePipe
  formattedDate = this.datePipe.transform(this.date, 'dd MMM, y');
  recent_orders=recent_orders;
  
  orderColumn: string[] = ["srNo",
    "customer",
    "products",
    "deliveryDate",
    "status",
    "trackingNo",
    "shipping"];
  dataSource = recent_orders;
}
