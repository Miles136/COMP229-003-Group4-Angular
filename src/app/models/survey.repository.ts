import { InvokeFunctionExpr } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class SurveyRepository {
    private survey: Survey[] = [];
    constructor( private dataSource: RestDataSource ) {
        dataSource.getSurveyList().subscribe( data => {
            this.survey = data;
        })
    }

    getSurvey(): Survey[] {
        return this.survey;
    }

    getItem( id: string ): Survey {
        return( this.survey.find(item => item._id === id)!);
    }

}