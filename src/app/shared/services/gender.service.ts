import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../responses/gender';

@Injectable()
export class GenderService {
    constructor(private httpClient: HttpClient) { }

    get() {
        return this.httpClient.get<Gender[]>(`gender`); 
    }
}