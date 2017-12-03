import {Component,OnInit} from "@angular/core";
import {Item} from "../item";
import {Router} from "@angular/router";
import {ItemService} from "../item.service";

@Component({
  selector:"my-dashboard",
  templateUrl:"./dashboard.component.html",
  styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  itemsDashboard:Item[];
  selectedItemDashboard:Item;

  constructor(
    private router:Router,
    private itemService:ItemService
  ){}

  gotoDetailPresentation():void{
    this.router.navigate(['/presentation',this.selectedItemDashboard.id])
  }

  onSelect(item:Item):void{
      this.selectedItemDashboard=item;
  }
  getItems():void{
      this.itemService.getItems().then(items=>this.itemsDashboard=items)
  }

  ngOnInit():void{
      this.getItems();
  }
}
