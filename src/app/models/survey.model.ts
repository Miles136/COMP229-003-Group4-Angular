
// let mongoose = require('mongoose');

// // Create a model class
// let surveyModel = mongoose.Schema(
//     {
//         Name: String,
//         Description: String,
//         Question1: String,
//         Question2: String,
//         Question3: String,
//     },
//     {
//         collection: "Surveys"
//     }
// );

// module.exports = mongoose.model('Survey', surveyModel);

// USING QUESTION AS A SEPARATE CLASS
// export class Survey {

//     constructor(
//         public _id?: string,
//         public Name?: string,
//         public Description?: string,
//         public Question1?: Question,
//         public Question2?: Question,
//         public Question3?: Question,
//     ){

//     }

// }

// export class Question {

//     constructor(
//         public content?: string,
//         public choiceA?: string,
//         public choiceB?: string,
//         public choiceC?: string,
//     ){

//     }

// }

// ALL QUESTIONS ARE STORED AS STRINGS
export class Survey {

        constructor(
            public _id?: string,
            public Name?: string,
            public Description?: string,
            public Question1?: string,
            public Question2?: string,
            public Question3?: string,
        ){
    
        }
    
    }