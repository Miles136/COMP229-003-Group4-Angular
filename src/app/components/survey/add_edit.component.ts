import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Surveys } from "src/app/models/survey.model";
import { SurveyRepository } from "src/app/models/survey.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html",
    styleUrls: ["../../../styles.css"]
})

export class AddEditComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    survey: Surveys = new Surveys();

    constructor(private repository: SurveyRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.survey = repository.getSurvey(activeRoute.snapshot.params["id"]);
        }  
    }

    save(form: NgForm) {
        this.repository.saveSurveys(this.survey);
        this.router.navigateByUrl("survey/list");                
    }

    private deleteItem(id: string){
        this.repository.deleteSurveys(id);
        this.router.navigateByUrl("survey/list");
    }
    
}