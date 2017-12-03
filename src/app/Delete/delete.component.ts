import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../item";
import {ItemService} from "../item.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'delete-component',
  templateUrl:'./delete.component.html',
  styleUrls:['./delete.component.css']
})

export class DeleteComponent implements OnInit{
  itemsDelete:Item[];
  selectedItemDelete:Item;

  constructor(
    private itemService:ItemService,
    private route:ActivatedRoute,
    private router:Router,
  ){}

  onSelect(item:Item):void{
      this.selectedItemDelete=item
  }

  getItems():void{
      this.itemService.getItems().then(items=>this.itemsDelete=items)
  }

  delete(item:Item):void{
      this.itemService.delete(item.id).then(()=>{this.itemsDelete=this.itemsDelete.filter(h=>h!==item);if(this.selectedItemDelete===item){this.selectedItemDelete=null}})
  }

  ngOnInit():void{
      this.getItems()
  }
}
