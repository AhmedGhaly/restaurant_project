import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { getCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {
  
  private apiPort = environment.apiPort;
  private BaseUrl: string = `https://localhost:${this.apiPort}/`;

  constructor(private httpClient : HttpClient) { }

  GetOrdersByRestaurantId(restaurantId:number):Observable<any>{
    console.log(restaurantId)
    let JsonToken = getCookie('User');
    console.log(JsonToken)
   let Token = JsonToken !=undefined? JSON.parse(JsonToken):null;
    console.log(Token)

    const headers = new HttpHeaders({
      Authorization: `Bearer ${Token}`
    });

    return this.httpClient.get(this.BaseUrl+"api/Order/getOrderByReataurantId/"+restaurantId,{headers});
  }

  GetCartItemsbyOrderId(OrderId:number,restaurantId:number):Observable<any>{
    console.log(OrderId)
    let JsonToken = getCookie('User');
    console.log(JsonToken)
   let Token = JsonToken !=undefined? JSON.parse(JsonToken):null;
    console.log(Token)

    const headers = new HttpHeaders({
      Authorization: `Bearer ${Token}`
    });

    return this.httpClient.get(this.BaseUrl+"api/CartItem/getOrderItemsByOrderId?orderId="+OrderId+"&restaurantId="+restaurantId,{headers});
  }


  updateOrderStatusByOrderId(OrderId:number,newStatus: string):Observable<any>{
    console.log(OrderId)
    let JsonToken = getCookie('User');
    console.log(JsonToken)
   let Token = JsonToken !=undefined? JSON.parse(JsonToken):null;
    console.log(Token)

    const headers = new HttpHeaders({
      Authorization: `Bearer ${Token}`
    });
    //updateStatus/{orderId}/{status}
    return this.httpClient.put(this.BaseUrl+"api/Order/updateStatus/"+OrderId+"/"+newStatus,{headers});
  }


}