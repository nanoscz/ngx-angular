import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker/';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  public bsConfig: Partial<BsDatepickerConfig> = {
    isAnimated: true,
    adaptivePosition: true,
    containerClass: 'theme-dark-blue',
  }

  public date;

  constructor(
    private localeService: BsLocaleService,
  ) {
    defineLocale('es', esLocale);
    this.localeService.use('es')
    this.date = new Date()
  }

  ngOnInit() {}

  create(test: any) {

  }

  handleError(err: any): Promise<any> {
    return Promise.reject(err.error);
  }
}
