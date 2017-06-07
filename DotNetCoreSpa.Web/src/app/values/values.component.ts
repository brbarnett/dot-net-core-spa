import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { ValuesService } from '../services/values.service';

@Component({
    selector: 'app-values',
    templateUrl: './values.component.html',
    styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

    private values: string = '';

    constructor(private valuesService: ValuesService) {}

    ngOnInit() {
        this.valuesService.getValues().subscribe((values) => {
            this.values = values;
        });
    }
}
