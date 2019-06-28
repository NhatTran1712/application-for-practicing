export class SignUpInput{
    username: string;
    password: string;
    roles: string[];

    constructor(
        username: string,
        password: string
    ){
        this.username = username;
        this.password = password;
        this.roles = ['ROLE_USER'];
    }
}