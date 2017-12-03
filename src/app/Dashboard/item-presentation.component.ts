import {Component,Input,OnInit} from "@angular/core";
import {ActivatedRoute,ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import {ItemService} from "../item.service";
import {Item} from "../item";
import 'rxjs/add/operator/switchMap';

@Component({
  selector:'item-presentation',
  templateUrl:'./item-presentation.component.html',
  styleUrls:['./item-presentation.component.css']
})

export class ItemPresentationComponent implements OnInit{
  @Input() item:Item;

  constructor(
    private itemService:ItemService,
    private route: ActivatedRoute,
    private location:Location
  ){}

 goBack():void{
      this.location.back()
 }

 save():void{
      this.itemService.update(this.item).then(()=>this.goBack())
 }


 ngOnInit():void{
   this.route.paramMap.switchMap((params:ParamMap)=>this.itemService.getItem(+params.get('id'))).subscribe(item=>this.item=item);
 }
}
