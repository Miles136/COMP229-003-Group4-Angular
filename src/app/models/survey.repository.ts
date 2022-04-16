import { InvokeFunctionExpr } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

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

    async saveSurvey( survey: Survey ) {
        if ( survey._id == null || survey._id == "" ) {
            this.dataSource.insertSurvey(survey)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.survey.push(response);
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
                    this.survey.splice(
                        this.survey.findIndex(i => i._id == survey._id), 
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
                this.survey.splice(
                    this.survey.findIndex(survey => survey._id == id), 
                    1
                );                                
            }
            else{
                alert(response.message);
            }
        })
    }

}