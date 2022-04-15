import { Component } from "@angular/core";
import { Router } from "express";
import { Survey } from "../../models/survey.model";
import { SurveyRepository } from "../../models/survey.repository";

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html"
})

export class ListComponent {
    title = "List of Surveys";

    constructor( private repository: SurveyRepository, private router: Router)
    {}

    get surveyList(): Survey[] {
        return this.repository.getSurvey();
    }
}