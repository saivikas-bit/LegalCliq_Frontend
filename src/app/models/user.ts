export class User {
  id: number;
  title: string;
  userName: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  AcceptTerms: boolean;

  constructor(
    i: number,
    title: string,
    uName: string,
    email: string,
    role: string,
    pswd: string,
    ConfirmPswd: string,
    AcceptTerms: boolean
  ) {
    (this.id = i),
      (this.title = title),
      (this.userName = uName),
      (this.email = email),
      (this.role = role),
      (this.password = pswd),
      (this.confirmPassword = ConfirmPswd);
    this.AcceptTerms = AcceptTerms;
  }
}
