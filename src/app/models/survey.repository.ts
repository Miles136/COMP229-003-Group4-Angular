import { InvokeFunctionExpr } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class SurveyRepository {

    private surveys: Survey[] = [];

    constructor( private dataSource: RestDataSource ) {
        dataSource.getSurveyList().subscribe( data => {
            this.surveys = data;
        });
    }

    getSurvey(): Survey[] {
        return this.surveys;
    }

    getItem( id: string ): Survey {
        return( this.surveys.find(item => item._id === id)!);
    }

    async saveSurvey( survey: Survey ) {

        // Add
        if ( survey._id == null || survey._id == "" ) {
            this.dataSource.insertSurvey(survey)
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
        } else {
            this.dataSource.updateSurvey(survey).subscribe(response => {
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

    deleteSurvey(id: string) {
        this.dataSource.deleteInventory(id).subscribe(response => {
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