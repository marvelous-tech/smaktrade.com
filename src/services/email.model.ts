export interface Email {
  message_id: number;
  message_uuid: string;
  ein: number;
  from_email: string;
  from_name: string;
  to_email: string;
  to_name: string;
  subject: string;
  text_body: string;
  html_body: string;
  status: boolean;
  status_code: number;
  error_message: string;
  created: Date;
  updated: Date;
  user: number;
}

export interface SendEmail {
  from_email: string;
  from_name: string;
  to_email: string;
  to_name: string;
  subject: string;
  text_body: string;
  html_body: string;
}
