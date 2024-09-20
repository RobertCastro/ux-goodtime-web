import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.component').then(
        (c) => c.WelcomeComponent
      ),
    title: 'Welcome'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'address',
        loadComponent: () =>
          import('./address-form/address-form.component').then(
            (c) => c.AddressFormComponent
          ),
        title: 'Address'
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./table/table.component').then(
            (c) => c.TableComponent
          ),
        title: 'Table'
      },
      {
        path: 'tree',
        loadComponent: () =>
          import('./tree/tree.component').then(
            (c) => c.TreeComponent
          ),
        title: 'Tree'
      },
      {
        path: 'drag-drop',
        loadComponent: () =>
          import('./drag-drop/drag-drop.component').then(
            (c) => c.DragDropComponent
          ),
        title: 'Drag-Drop'
      }
    ]
  }
];
