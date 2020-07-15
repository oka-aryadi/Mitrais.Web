import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../responses/user';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }

    post(postUser: PostUser) {
        return this.httpClient.post<User>(`user`, postUser);
    }
}

export class PostUser {
    mobileNumber: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
    genderId?: string;
    email: string
}