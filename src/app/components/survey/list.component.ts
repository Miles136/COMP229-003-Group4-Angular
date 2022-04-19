import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Surveys } from "../../models/survey.model";
import { SurveyRepository } from "src/app/models/survey.repository";

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html",
    styleUrls: ["../../../styles.css"]
})

export class ListComponent {
    title = "List of Surveys";
    username?: string;

    constructor( private repository: SurveyRepository, private router: Router)
    {}

    get surveyList(): Surveys[] {
        return this.repository.getSurveys();
    }

    deleteMethod(id: string) {
        if (confirm("Are you sure you want to close this ticket?")) {
            this.router.navigateByUrl("survey/delete/"+id);
        }
    }
}