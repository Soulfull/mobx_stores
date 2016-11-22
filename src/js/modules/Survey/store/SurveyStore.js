import { observable, action, computed, autorun, extendObservable, observe, toJS, asStructure } from 'mobx';
import { mix } from 'helper/util';
import surveyActions  from 'modules/Survey/action/surveyActions';
import BaseStore  from 'helper/BaseStore';
import _  from 'lodash';



class SurveyStore extends BaseStore{


    @observable questions = [
        {
            id:1,
            text:'Are you ready?',
            selected:true,
            result:false
        },
        {
            id:2,
            text:'Make sense?',
            selected:false,
            result:false
        }
    ];


    @computed get question(){
        return _.find(this.questions, { 'selected': true });
    };

    constructor(){
        super();




        /*
        autorun(()=>{
            console.log(['this.questions', this.questions[0]]);
        });

*/

        /*
        this.addObserve(
            observe(this, 'questions', (newValue, oldValue) => {
                console.log(['change', arguments]);
            })
        );
*/


        /*
        setTimeout(()=>{
            console.log(['setTimeout']);

            this.questions[1].selected = true;



        }, 1000);

*/





    }

    
    @action answer (answerId) {

        console.log(['answer', answerId]);

        var ans = _.find(this.questions, { 'id': answerId });

        if(ans){
            ans.result = true;
        }

    }

    @action selectAnswer (answerId) {


        /*
        var selected = _.find(this.questions, { 'selected': true });
        var toSelect = _.find(this.questions, { 'id': answerId });


        if(toSelect){
            toSelect.selected = true;
        }
        if(selected){
            selected.selected = false;
        }
    */




        var selected = _.find(this.questions, { 'selected': true });
        var current = _.find(this.questions, { 'id': answerId });

        if(selected){
            selected.selected = false;
        }
        if(current){
            selected.selected = true;
        }



    }

}

//mix( SurveyStore.prototype, surveyActions );

export default SurveyStore