import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {
  ObservableArray,
  ChangedData
} from "tns-core-modules/data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
  selector: "Login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLoggingIn = true;
  user: User;
  processing = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(
    private page: Page,
    private userService: UserService,
    private routerExtensions: RouterExtensions
  ) {
    this.page.actionBarHidden = true;
    this.user = new User();
    this.user.email = "user@nativescript.org";
    this.user.password = "password";
  }

  ngOnInit(): void {}

  focusPassword() {
    this.password.nativeElement.focus();
  }
  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.confirmPassword.nativeElement.focus();
    }
  }

  submit() {
    if (!this.user.email || !this.user.password) {
      this.alert("Please provide both an email address and password.");
      return;
    }

    this.processing = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.register();
    }
  }

  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message:
        "Enter the email address you used to register for APP NAME to reset your password.",
      inputType: "email",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then(data => {
      if (data.result) {
        this.userService
          .resetPassword(data.text.trim())
          .then(() => {
            this.alert(
              "Your password was successfully reset. Please check your email for instructions on choosing a new password."
            );
          })
          .catch(() => {
            this.alert(
              "Unfortunately, an error occurred resetting your password."
            );
          });
      }
    });
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  login() {
    this.userService
      .login(this.user)
      .then(() => {
        this.processing = false;
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
      })
      .catch(() => {
        this.processing = false;
        this.alert("Unfortunately we could not find your account.");
      });
  }

  register() {
      console.log(this.user);
    if (this.user.password != this.user.confirmPassword) {
      this.alert("Your passwords do not match.");
      return;
    }
    this.userService
      .register(this.user)
      .then(() => {
        this.processing = false;
        this.alert("Your account was successfully created.");
        this.isLoggingIn = true;
      })
      .catch(() => {
        this.processing = false;
        this.alert("Unfortunately we were unable to create your account.");
      });
  }

  alert(message: string) {
    return alert({
      title: "APP NAME",
      okButtonText: "OK",
      message: message
    });
  }
}
