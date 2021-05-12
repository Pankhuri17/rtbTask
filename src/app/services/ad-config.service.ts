import { Injectable } from '@angular/core';
import {ConfigHelper} from './config-helper'


@Injectable({
  providedIn: 'root'
})
export class AdConfigService extends ConfigHelper {

  constructor() { 
    super ()
  }
}
