import {Component,Input,OnInit} from "@angular/core";
import {Item} from "../item";
import {ItemService} from "../item.service";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {FormControl, Validators} from "@angular/forms";
const isNumberRegEx = /^[0-9]*$/;

@Component({
  selector:"add-component",
  templateUrl:'./add.component.html',
  styleUrls:['./add.component.css']
  })

export class AddComponent implements OnInit{
    @Input() item: Item;
    items:Item[];
    selectedItem:Item;

    constructor(
      private itemService:ItemService,
      private route:ActivatedRoute,
      private location:Location,
      private router:Router,
    ){}

    isNumberPrice=new FormControl('',[Validators.pattern(isNumberRegEx), Validators.required])
    isNumberCuantity=new FormControl('',[Validators.pattern(isNumberRegEx),Validators.required])
    isRequiredManufacturer=new FormControl('',[Validators.required])
    isRequiredName=new FormControl('',[Validators.required])

    goBack():void{
        this.location.back();
    }

    goDashboard():void{
        this.router.navigate(["/dashboard"],{relativeTo: this.route})
    }

    add(manufacturer:string, name:string, description:string, cuantity:number, price:number):void{
        if(!name){return};
        if(isNaN(cuantity)===true){return};
        if(isNaN(price)===true){return};
        this.itemService.create(manufacturer,name,description,cuantity,price).then(item=>{this.items.push(item);this.selectedItem=null}).then(()=>this.goDashboard())
    }

    ngOnInit():void{
      this.route.paramMap.switchMap((params:ParamMap)=>this.itemService.getItem(+params.get('id'))).subscribe(item=>this.item=item);
      this.itemService.getItems().then(items=>this.items=items);
    }
}
