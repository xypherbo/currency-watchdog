import { EffectsModule } from '@ngrx/effects';

import { TrelloEffects } from './trello.effect'

export const AppEffectsModules = EffectsModule.forRoot([
    TrelloEffects
]);
