import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlantesHydroponiquesComponent } from './pages/collection/plantes-hydroponiques/plantes-hydroponiques.component';
import { BouquetsFleursSecheesComponent } from './pages/collection/bouquets-fleurs-sechees/bouquets-fleurs-sechees.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'collection/:name',
  //   component: CollectionComponent,
  // },
  {
    path: 'collection/Plantes_hydroponiques',
    component: PlantesHydroponiquesComponent,
  },
  {
    path: 'collection/Bouquets_de_fleurs_sechees',
    component: BouquetsFleursSecheesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
