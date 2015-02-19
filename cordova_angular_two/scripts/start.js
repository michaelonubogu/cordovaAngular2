/**
 * Created by Namdascious on 2/18/2015.
 */
import {Component, TemplateConfig, bootstrap, Foreach} from '../components/angular/angular2';
import {bind} from '../components/angular/di';

@Component({
    selector: 'cordova-angular2',
    componentServices: [],
    template: new TemplateConfig({
        url: '../templates/start.html',
        directives: [Foreach]
    })
})

class cordovaAngular2 {
    constructor(){
        this.hello_message = 'When you see me, please say hello';
        this.goodbye_message = "Don't forget to say good bye when you're ready to leave";
    }

    sayHello($event){
        this.hello_mesage = 'Hey there! Thanks for saying hello :)'
    }

    sayGoodBye($event){
        this.goodbye_message = "Awww...leaving so soon? I'll miss you!";
    }
}

export function main() {
    bootstrap(cordovaAngular2);
}