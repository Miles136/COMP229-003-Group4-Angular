import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../models/auth.service";
import { User } from "../../models/user.model";

@Component({
    templateUrl: "signup.component.html",
    styleUrls: ["../../../styles.css"]
})

export class SignUpComponent {

    public title: string = "Sign Up"
    public user: User = new User();
    public confirmPassword: string;
    public message: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    signup(form: NgForm) {
        if (form.valid) {
            // Checks if the passwords match.
            var testMatch: boolean;
            testMatch = (this.user.password == this.user.confirm) && (this.user.password != null && this.user.password != "");
            if(testMatch){
                this.auth.signupUser(this.user)
                    .subscribe(response => {
                        if (response.success) {
                            alert(response.message);
                            this.router.navigateByUrl("/users/signin");
                        }
                        // Error message from the API.
                        this.message = response.message; 
                    });
            } else {
                this.message = "Passwords do not match";    
            }
        } else {
            this.message = "Form Data Invalid";
        }
    }

}