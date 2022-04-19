import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Survey } from "../../models/survey.model";
import { SurveyRepository } from "src/app/models/survey.repository";

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html"
})

export class ListComponent {
    title = "List of Surveys";

    constructor( private repository: SurveyRepository, private router: Router)
    // constructor( private repository: SurveyRepository)
    {}

    get surveyList(): Survey[] {
        return this.repository.getSurvey();
    }
}