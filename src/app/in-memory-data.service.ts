import {InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const items=[
      {id:0,manufacturer:'Zeiss',name:'Lentila',description:'convex',cuantity:1,price:100},
      {id:11,manufacturer:'Zeiss',name:'Lentila',description:'convex',cuantity:1,price:100},
      {id:12,manufacturer:'Zeiss',name:'Lentila',description:'concava',cuantity:2,price:120},
      {id:13,manufacturer:'Zeiss',name:'Rama',description:'sport',cuantity:19,price:150},
      {id:14,manufacturer:'Zeiss',name:'Rama',description:'casual',cuantity:10,price:200},
      {id:15,manufacturer:'Laica',name:'Lentila',description:'convex',cuantity:15,price:100},
      {id:16,manufacturer:'Laica',name:'Lentila',description:'concava',cuantity:1,price:100},
      {id:17,manufacturer:'Laica',name:'Rama',description:'sport',cuantity:12,price:140},
      {id:18,manufacturer:'Laica',name:'Rama',description:'casual',cuantity:1,price:100},
      {id:19,manufacturer:'Laica',name:'Rama',description:'business',cuantity:2,price:400},
      {id:20,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:21,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:22,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:23,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:24,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:25,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:26,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:27,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:28,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:29,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:30,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
      {id:31,manufacturer:'Zeiss',name:'Rama',description:'business',cuantity:2,price:420},
    ];
    return{items}
  }
}
