import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators'
@Component({
    selector: 'signup-form',
    templateUrl: 'app/sign-up-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder){
        //creating a control-group object
        this.form = fb.group({
            //synch validators
            username:['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace]),
                //async validators
                UsernameValidators.shouldBeUnique],
            password:['', Validators.required]
        })
    }
    // form = new ControlGroup({
    //     //each key represents the name of the control in this group
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });
    signup(){
        // console.log(this.form.value)
    }
}