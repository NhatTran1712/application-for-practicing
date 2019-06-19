export class LoginInput {
    id: number;
    username: string;
    password: string;
    roles: string[];

    constructor(username: string, password: string) {
        this.id = null;
        this.username = username;
        this.password = password;
        this.roles = [];
    }
}