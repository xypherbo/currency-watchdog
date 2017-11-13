import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreStoreModule } from './store';
import { AppEffectsModules } from './effects';
import { CoreServiceModule } from './services';

@NgModule({
    imports: [CoreStoreModule, AppEffectsModules,CoreServiceModule],
    declarations: [],
    exports: [CoreStoreModule],
    providers: []
})
export class CoreModule {
}
