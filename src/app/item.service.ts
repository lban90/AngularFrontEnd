import {Injectable} from "@angular/core";
import {Item} from "./item";
import {Http,Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService{

  private itemsUrl='api/items';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http){}

  getItems(): Promise <Item[]>{
    return this.http.get(this.itemsUrl).toPromise().then(response=>response.json().data as Item[]).catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  getItem(id:number):Promise<Item>{
    const url=`${this.itemsUrl}/${id}`;
    return this.http.get(url).toPromise().then(response=>response.json().data as Item[]).catch(this.handleError)
  }

  create(manufacturer:string,name:string,description:string,cuantity:number,price:number):Promise<Item>{
    return this.http.post(this.itemsUrl,JSON.stringify({manufacturer:manufacturer,name:name,description:description,cuantity:cuantity,price:price}),{headers: this.headers}).toPromise().then(res=>res.json().data as Item).catch(this.handleError)
  }

  createItem(name:string):Promise<Item>{
    return this.http.post(this.itemsUrl,JSON.stringify({manufacturer:"test2",name:name,description:"Test1",cuantity:1,price:100}),{headers:this.headers}).toPromise().then(res=>res.json().data as Item).catch(this.handleError)
  }

  delete(id:number):Promise<void>{
    const url= `${this.itemsUrl}/${id}`;
    return this.http.delete(url,{headers:this.headers}).toPromise().then(()=>null).catch(this.handleError)
  }

  update(item:Item):Promise<Item>{
    const url=`${this.itemsUrl}/${item.id}`;
    return this.http.put(url,JSON.stringify(item),{headers: this.headers}).toPromise().then(()=>item).catch(this.handleError)
  }

  updateAddOne(item:Item):Promise<Item>{
    const url=`${this.itemsUrl}/${item.id}`;
    item.cuantity=Number(item.cuantity)+1;
    return this.http.put(url,JSON.stringify(item),{headers: this.headers}).toPromise().then(()=>item).catch(this.handleError)
  }

  updateSubstractOne(item:Item):Promise<Item>{
    const url=`${this.itemsUrl}/${item.id}`;
    if(item.cuantity==0){
      return this.http.put(url,JSON.stringify(item),{headers: this.headers}).toPromise().then(()=>item).catch(this.handleError)
    }
    else {
      item.cuantity=item.cuantity-1;
      return this.http.put(url,JSON.stringify(item),{headers: this.headers}).toPromise().then(()=>item).catch(this.handleError)
    }
  }

}
