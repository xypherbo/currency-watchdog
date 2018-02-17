import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router'
import { CoreStoreModule } from './store';
import { AppEffectsModules } from './effects';
import { CoreServiceModule } from './services';


@NgModule({
    imports: [
        CoreStoreModule,
        AppEffectsModules,
        CoreServiceModule,
        HttpClientModule
    ],
    declarations: [
    ],
    exports: [
        CoreStoreModule
    ],
    providers: []
})
export class CoreModule { }


