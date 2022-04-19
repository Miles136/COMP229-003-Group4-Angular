import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Survey } from "../../models/survey.model";
import { SurveyRepository } from "src/app/models/survey.repository";

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html",
    styleUrls: ["../../../styles.css"]
})

export class ListComponent {
    title = "List of Surveys";

    constructor( private repository: SurveyRepository, private router: Router)
    {}

    get surveyList(): Survey[] {
        return this.repository.getSurvey();
    }

    deleteMethod(id: string) {
        if (confirm("Are you sure you want to close this ticket?")) {
            this.router.navigateByUrl("survey/delete/"+id);
        }
    }
}