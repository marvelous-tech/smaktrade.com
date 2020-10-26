import { Component, OnInit } from '@angular/core';
import {EmailService} from "../../../services/email/email.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  name: string = "";
  email: string = "";
  phone: string = "";
  message: string = "";
  sent: boolean = false;
  sending: boolean = false;
  error: boolean = false;

  constructor(private _emailService: EmailService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.name.length === 0 ||
      this.email.length === 0 ||
      this.message.length === 0
    ) {
      this.error = true;
    } else {
      this.error = false;
      this.sent = false;
      this.sending = true;
      this._emailService.sendMailToClient(
        {name: this.name, email: this.email, phone: this.phone, message: this.message}
      ).subscribe(value => {
        this.sent = true;
        this.sending = false;
        this.name = "";
        this.email = "";
        this.phone = "";
        this.message = "";
      });
    }
  }

}
