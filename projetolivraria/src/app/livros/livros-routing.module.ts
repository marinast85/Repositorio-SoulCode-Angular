import { Routes } from '@angular/router'; 
import { ListarLivrosComponent } from './listar-livros';

export const LivrosRoutes : Routes = [
    {
        path: 'livros',
        redirectTo: 'livros/listar-livros'
    },
    {
        path: 'livros/listar-livros',
        component: ListarLivrosComponent
    }

]