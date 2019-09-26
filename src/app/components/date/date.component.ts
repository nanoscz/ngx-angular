import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker/';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

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
  public form: FormGroup;

  constructor(
    private localeService: BsLocaleService,
    private fb: FormBuilder,
  ) {
    defineLocale('es', esLocale);
    this.localeService.use('es')
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      date: ['', Validators.required]
    })
    console.log("Form",this.form)
  }

  async onSubmit() {
    console.log("Form",this.form.value)
    if (this.form.invalid) {
      console.log("form invalid")
    }
  }

  handleError(err: any): Promise<any> {
    return Promise.reject(err.error);
  }
}
