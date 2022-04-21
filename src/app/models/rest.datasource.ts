import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Surveys } from "./survey.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 4000;

@Injectable()
export class RestDataSource {
    
    baseUrl: string;
    auth_token: string

    constructor( private http: HttpClient) {
        // this.baseUrl = '${PROTOCOL}://${location.hostname}:${PORT}/';
        // this.baseUrl = "http://localhost:4000/";
        this.baseUrl = "https://backendcomp229-group4.herokuapp.com/";
    }

    getSurveysList(): Observable<Surveys[]> {
        return this.http.get<Surveys[]>(this.baseUrl + "survey/list");
    }

    insertSurveys(survey: Surveys): Observable<Surveys> {
        return this.http.post<Surveys>(
            this.baseUrl + "survey/add",
            survey, 
            this.getOptions())
                .pipe(
                    map(response => {
                        return response;
                    }),
                    catchError(error => {
                        console.log(error.error);
                        return of(error.error);
                    })
                );
    }

    updateSurveys(survey: Surveys): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
            `${this.baseUrl}survey/edit/${survey._id}`,
            survey, 
            this.getOptions())
                .pipe(
                    map(response => {
                        return response;
                    }),
                    catchError(error => {return of(error.error)})
                );
    }

    deleteSurveys(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(
            `${this.baseUrl}survey/delete/${id}`,
            this.getOptions())
                .pipe(
                    map(response => {
                        return response;
                    }),
                    catchError(error => {return of(error.error)})
                );
    }

    // Consumes User endpoint of the Backend
    authenticate(username: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin", {
            username: username, password: pass
        }).pipe(
            map(response => {
                // console.log(response);
                this.auth_token = response.success ? response.token : null;
                // console.log(this.auth_token);
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }

    signupUser( user: User ) : Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
        .pipe(map(response => {
            return response;
        }),
        catchError( error => { return of(error.error)}));
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ${this.auth_token}'
            })
        }
    }

}