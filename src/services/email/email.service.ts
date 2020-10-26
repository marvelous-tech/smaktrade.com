import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Email, SendEmail} from "../email.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }

  sendMailToClient(payload: {name: string, email: string, phone: string, message: string}): Observable<Email> {
    let email: SendEmail = {
      from_email: "nazrul@smaktrade.com",
      from_name: "WEBSITE",
      to_email: "nazrul@smaktrade.com",
      to_name: "Nazrul Islam",
      subject: "From Website Contact of " + payload.name,
      text_body: "Contact form of SMAKTRADE.COM\n\n" +
        "Name    :\t" + payload.name + "\n" +
        "Email   :\t" + payload.email + "\n" +
        "Phone   :\t" + payload.phone + "\n" +
        "Message :\n" + payload.message + "\n\n\n" +
        "This is an automated email, developed by Fahim.",
      html_body: "<h2><span style=\"color: #3598db;\">Contact form of&nbsp;<em>SMAKTRADE.COM</em></span></h2>\n" +
        "<table style=\"border-collapse: collapse; width: 100%; border-style: solid; float: left; height: 120px;\" border=\"1\" cellpadding=\"13\">\n" +
        "<tbody>\n" +
        "<tr style=\"height: 22px;\">\n" +
        "<td style=\"width: 16.7658%; border-style: solid; height: 22px;\">Name</td>\n" +
        "<td style=\"width: 79.8975%; height: 22px;\">" + payload.name + "</td>\n" +
        "</tr>\n" +
        "<tr style=\"height: 22px;\">\n" +
        "<td style=\"width: 16.7658%; height: 22px;\">Email</td>\n" +
        "<td style=\"width: 79.8975%; height: 22px;\">" + payload.email + "</td>\n" +
        "</tr>\n" +
        "<tr style=\"height: 22px;\">\n" +
        "<td style=\"width: 16.7658%; height: 22px;\">Phone</td>\n" +
        "<td style=\"width: 79.8975%; height: 22px;\">" + payload.phone + "</td>\n" +
        "</tr>\n" +
        "<tr style=\"height: 54px;\">\n" +
        "<td style=\"width: 96.6633%; height: 54px;\" colspan=\"2\">\n" +
        "<p>" + payload.message + "</p>\n" +
        "</td>\n" +
        "</tr>\n" +
        "</tbody>\n" +
        "</table>" +
        "<p>&nbsp;</p>\n" +
        "<p><em><span style=\"font-size: 10pt; color: #95a5a6;\">This is an automated email, developed by Fahim</span></em>\n"
    };
    return this._http.post<Email>('https://garment-products.garlic.marvelous-tech.com/api/email/send/', email, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('36b62dc47a2f7e6e5c889b9d6abf9549:fd3335f46381231d6ecf65e82994fef7')
      }
    })
  }
}
