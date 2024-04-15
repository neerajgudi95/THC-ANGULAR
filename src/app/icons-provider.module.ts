import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  InstagramOutline,
  LinkedinOutline,
  TwitterOutline,
} from '@ant-design/icons-angular/icons';

const icons = [LinkedinOutline, InstagramOutline, TwitterOutline];

@NgModule({
  declarations: [],
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
