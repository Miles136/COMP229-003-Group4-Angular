import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "./survey.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    constructor( private http: HttpClient) {
        this.baseUrl = '${PROTOCOL}://${location.hostname}:${PORT}/';
    }
    getSurveyList(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.baseUrl + "survey/list");
    }
}