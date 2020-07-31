export function passwordValidator(value) {
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ ]).{5,}$/g;
    if (!value){
        return true;
    }
    return value && regexp.test(value);
}

