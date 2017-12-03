import {NgModule} from "@angular/core";
import{RouterModule,Routes} from "@angular/router";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {ItemPresentationComponent} from "./Dashboard/item-presentation.component";
import {AddComponent} from "./Add/add.component";
import {DeleteComponent} from "./Delete/delete.component";

const routes: Routes=[
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
   {
     path:'',
     redirectTo:'dashboard',
     pathMatch:'full'
  },
  {
    path:'presentation/:id',
    component:ItemPresentationComponent
  }
];

@NgModule(
  {
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  }
)

export class AppRoutingModule{}
