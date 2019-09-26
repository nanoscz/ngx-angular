import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker/';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { TestsService } from 'src/app/services/tests.service';

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
    private testsService: TestsService
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
    if (this.form.invalid) {
      console.log("form invalid")
    }
    await this.testsService.create(this.form.value).catch(this.handleError)
  }

  handleError(err: any): Promise<any> {
    return Promise.reject(err.error);
  }
}
