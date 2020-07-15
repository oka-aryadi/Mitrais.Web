import { Gender } from './gender';

export interface User {
    id: string,
    mobileNumber: string,
    firstName: string,
    lastName: string,
    dateOfBirth?: string,
    gender?: Gender,
    email: string
}