import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';


@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    FlexLayoutServerModule
  ]
})
export class RootModule { }
