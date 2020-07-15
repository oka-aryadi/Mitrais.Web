import { FormControl, FormGroup } from '@angular/forms';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function mobileNumberValidator(input: FormControl) {
    const value: string = input.value

    if (value) {
        if (value.length < 10 || value.substring(0, 3) != "+62" || isNaN(parseInt(value.substring(3)))) {
            return { invalidMobileNumber: true }
        }
    }

    return null;
}

export function emailValidator(input: FormControl) {
    const value: string = input.value

    if (value && !emailRegex.test(value)) {
        return { invalidEmailAddress: true }
    }

    return null;
}

export function validate(formGroup: FormGroup, controlName: string, errorObj: string) {
    return formGroup.controls[controlName].errors && formGroup.controls[controlName].errors[errorObj] && (formGroup.controls[controlName].touched || formGroup.controls[controlName].dirty)
}