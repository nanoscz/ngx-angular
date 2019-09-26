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
  public tests: any = [];
  public testsColumn: any;
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
      firstName: ['', Validators.required],
      date: ['', Validators.required]
    })
    this.init()
  }

  async init() {
    this.tests = await this.testsService.findAll().catch(this.handleError)
    this.testsColumn = ['id', 'FirstName', 'date', 'createdAt', 'updatedAt']
  }

  async onSubmit() {
    if (this.form.invalid) {
      console.log("form invalid")
      return
    }
    const test = await this.testsService.create(this.form.value).catch(this.handleError)
    console.log(test)
    this.tests.push(test[0])
    this.form.reset()
  }

  handleError(err: any): Promise<any> {
    return Promise.reject(err.error);
  }
}
