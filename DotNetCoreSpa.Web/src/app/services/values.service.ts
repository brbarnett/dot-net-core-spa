import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ValuesService {

    constructor(private auth: Adal4Service, private http: Adal4HTTPService) { }

    public getValues(): Observable<string> {

        console.log('Authenticated:', this.auth.userInfo.authenticated);
        console.log('Token:', this.auth.userInfo.token);

        let headers: Headers = new Headers();
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiI0YjMwYmVkOC0zY2JjLTQ2YTctYTNiMS05ZmE0NWFiNDE4ZGMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81ZmJiY2UyYS1jM2U2LTRiNWUtYTUxZi0yMjI2NzRmZGI0NGQvIiwiaWF0IjoxNDk2ODczNTI5LCJuYmYiOjE0OTY4NzM1MjksImV4cCI6MTQ5Njg3NzQyOSwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhEQUFBQVNJTDA5OFA1RE9OSUtaV3dqdUdCd3VYbWFlKzdyaVoraGFSNlVGMk9lQ3c9IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjRiMzBiZWQ4LTNjYmMtNDZhNy1hM2IxLTlmYTQ1YWI0MThkYyIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiQmFybmV0dCIsImdpdmVuX25hbWUiOiJCcmFuZG9uIiwiaXBhZGRyIjoiNzEuMjM5LjI0MS4xMDIiLCJuYW1lIjoiQnJhbmRvbiBCYXJuZXR0Iiwib2lkIjoiNjZiNTBlNTMtZjYxYy00ZmRjLWEwYmUtY2MxMTUxZWQ0YmIzIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTE1ODE4MjYzMDUtMjA2MDkzMDE0Ny01MjEzNzU2NzAtMjMyOSIsInBsYXRmIjoiMyIsInNjcCI6IlVzZXIuUmVhZCIsInN1YiI6Im8yd2RIMUNXaEtpZnBkc0NESDJoZDJReEVmb19YNUU2YnJwMzRDN0g5QmMiLCJ0aWQiOiI1ZmJiY2UyYS1jM2U2LTRiNWUtYTUxZi0yMjI2NzRmZGI0NGQiLCJ1bmlxdWVfbmFtZSI6IkJCYXJuZXR0QHJpZ2h0cG9pbnQuY29tIiwidXBuIjoiQkJhcm5ldHRAcmlnaHRwb2ludC5jb20iLCJ2ZXIiOiIxLjAifQ.NrlBoAD6xtCbj0mGio2xOQN3xAPtFHjvbiJ69Anr21ONj6JnB9lsZ7CIGjfkgniPJx8DPFuMHY2rxnBDOFkhcEhPZuYMgReTSnyqR3E-d7H-Ufi44c-US9nv7EH9j7axzseQph4ZpyH1az3NWxWGDptef-Dc7DWVtA-oGPiyJvvBJKGWdT4N0lAFRsACTtxwnWXhu6bSqn495X5xARtoHzAxQFT8Bn6IUrJmFPIrbhs_bTQOvu96cqAg2t51NhCa27lalWl9ITlogYsW_OtO2wBAYrZirhZ5Ev01UZgChc3SgmvMVDVlb_WjWGKha0fQ-LtYFvXxSu-zNv-psfmyHQ');
        return this.http.get('https://localhost:44332/api/values', new RequestOptions({ headers: headers }))
            .map((res: Response) => {
                console.log('got values!');
                return res.json();
            })
            .catch((error: Response | any) => Observable.throw(error));
    }
}
