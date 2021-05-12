import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { WidgetBarComponent } from './blog/post/widget-bar/widget-bar.component';
import { NewPostFormComponent } from './blog/new-post-form/new-post-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommentsComponent } from './blog/post/comments/comments.component';
import { OverlayComponent } from './blog/overlay/overlay.component';
import { SearchComponent } from './blog/search/search.component';
import { NewCommentFormComponent } from './blog/post/new-comment-form/new-comment-form.component';
import { EditPostDialogComponent } from './blog/post/edit-post-dialog/edit-post-dialog.component';
import { AppPlaygroundComponent } from './portfolio/dev/app-playground/app-playground.component';
import { GraphicDesignComponent } from './portfolio/design/graphic-design/graphic-design.component';
import { ExpenseTrackerComponent } from './portfolio/dev/app-playground/expense-tracker/expense-tracker.component';
import { BalanceManagerComponent } from './portfolio/dev/app-playground/expense-tracker/balance-manager/balance-manager.component';
import { ExpensesDetailsComponent } from './portfolio/dev/app-playground/expense-tracker/expenses-details/expenses-details.component';
import { HistoryComponent } from './portfolio/dev/app-playground/expense-tracker/history/history.component';
import { TransactionsTableComponent } from './portfolio/dev/app-playground/expense-tracker/transactions-table/transactions-table.component';
import { TodoComponent } from './portfolio/dev/app-playground/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    BlogComponent,
    PostComponent,
    WidgetBarComponent,
    NewPostFormComponent,
    PageNotFoundComponent,
    CommentsComponent,
    OverlayComponent,
    SearchComponent,
    NewCommentFormComponent,
    EditPostDialogComponent,
    AppPlaygroundComponent,
    GraphicDesignComponent,
    ExpenseTrackerComponent,
    BalanceManagerComponent,
    ExpensesDetailsComponent,
    HistoryComponent,
    TransactionsTableComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatDialogModule,
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxMaterialTimepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatRadioModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
