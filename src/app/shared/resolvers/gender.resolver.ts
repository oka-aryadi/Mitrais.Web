import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Gender } from '../responses/gender';
import { GenderService } from '../services/gender.service';

@Injectable()
export class GenderResolver implements Resolve<Gender[]> {
    constructor(private genderService: GenderService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Gender[]> {
        return this.genderService.get();
    }
}