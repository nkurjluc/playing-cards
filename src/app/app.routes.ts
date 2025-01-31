import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [{
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
},
{
    path:'home',
    component:ProductListComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'product',
    children: [{
        path:'',
        component:ProductComponent
    },{
        path:':id',
        component:ProductComponent
    }]
},{
    path:'**',
    component:NotFoundComponent
}];
