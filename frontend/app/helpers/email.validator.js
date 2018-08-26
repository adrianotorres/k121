const INTEGER_REGEXP = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default class EmailValidator {
    static get selector() { return 'email' }
    static get require() { return 'ngModel' }
    static get link() { return (_scope, _elm, _attrs, ctrl) => 
        ctrl.$validators.email = (modelValue, viewValue) => {
            if (ctrl.$isEmpty(modelValue)) {
                return true
            }
            if (INTEGER_REGEXP.test(viewValue)) {
                return true
            }
            return false
        }
    }
}
  