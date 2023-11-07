import { Component } from '@angular/core';
import { recent_orders } from './recent-orders.json';
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
