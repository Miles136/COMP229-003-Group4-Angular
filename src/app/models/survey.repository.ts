import { Injectable } from "@angular/core";
import { Surveys } from "./survey.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class SurveyRepository {

    private surveys: Surveys[] = [];

    constructor( private dataSource: RestDataSource ) {
        dataSource.getSurveysList().subscribe( data => {
            this.surveys = data;
        });
    }

    getSurveys(): Surveys[] {
        return this.surveys;
    }

    getSurvey( id: string ): Surveys {
        return( this.surveys.find(item => item._id === id)!);
    }

    async saveSurveys( survey: Surveys ) {

        // Add
        if ( survey._id == null || survey._id == "" ) {
            this.dataSource.insertSurveys(survey)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.surveys.push(response);
                    }
                    else{ // If API send error.
                        // Convert to ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        }
        // Edit
        else {
            this.dataSource.updateSurveys(survey).subscribe(response => {
                if (response.success) {
                    this.surveys.splice(
                        this.surveys.findIndex(i => i._id == survey._id), 
                        1, 
                        survey
                    );
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteSurveys(id: string) {
        this.dataSource.deleteSurveys(id).subscribe(response => {
            if (response.success) {
                this.surveys.splice(
                    this.surveys.findIndex(survey => survey._id == id), 
                    1
                );                                
            }
            else{
                alert(response.message);
            }
        })
    }

}