import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardsMenuComponent } from './cards-menu/cards-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { BtnArticleComponent } from './btn-article/btn-article.component';
import { LargeCardComponent } from './large-card/large-card.component';
import { DatasService } from './services/datas.service';
import { CardsItemCollectionComponent } from './cards-item-collection/cards-item-collection.component';
import { CartShopComponent } from './cart-shop/cart-shop.component';
import { AddDetailsArticleComponent } from './add-details-article/add-details-article.component';
import { ArticleInCartComponent } from './article-in-cart/article-in-cart.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { CountOfArticleComponent } from './count-of-article/count-of-article.component';
import { CollectionsComponent } from './pages/collections/collections.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardsMenuComponent,
    HomeComponent,
    CardArticleComponent,
    BtnArticleComponent,
    LargeCardComponent,
    CardsItemCollectionComponent,
    CartShopComponent,
    AddDetailsArticleComponent,
    ArticleInCartComponent,
    FilterComponent,
    CountOfArticleComponent,
    CollectionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DatasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
