export interface AuthInterface {
  username?: string;
  email?: string | null;
  readonly password?: string;
  confirmpassword?: string;
  token?: string | null;
  userdp?: string,
}

export interface RegexInterface {
  fieldname: string;
  regex: RegExp;
  value: string;
  errormessage: string;
}

export interface RegexError {
  email: string;
  password?: string;
}
