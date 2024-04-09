export interface AuthInterface {
  username: string;
  email: string;
  readonly password: string;
}

export interface RegexInterface {
  fieldname: string;
  regex: RegExp;
  value: string;
  errormessage: string;
}

export interface RegexError {
    email: string;
    password: string;
  
}