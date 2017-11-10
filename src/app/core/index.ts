import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreStoreModule } from './store';
import { AppEffectsModules } from './effects';

@NgModule({
    imports: [CoreStoreModule, AppEffectsModules],
    declarations: [],
    exports: [CoreStoreModule],
    providers: []
})
export class CoreModule {
}
