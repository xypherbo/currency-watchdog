import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppReducers, AppState, AppActions } from './reducers';


export { AppState } from './reducers';

@NgModule({
    imports: [
        StoreModule.forRoot(AppReducers, {})
    ],
    declarations: [],
    exports: [],
    providers: [
        ...AppActions
    ]
})
export class CoreStoreModule { }
