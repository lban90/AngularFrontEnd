import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {
  MatCardModule, MatHeaderRow,
  MatIconModule, MatIconRegistry,
  MatListModule, MatMenuModule, MatNavListCssMatStyler, MatSidenav, MatSidenavContainer, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {MatButtonModule, MatInputModule} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {ItemService} from "./item.service";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {ItemPresentationComponent} from "./Dashboard/item-presentation.component";
import {AddComponent} from "./Add/add.component";
import {DeleteComponent} from "./Delete/delete.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemPresentationComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
