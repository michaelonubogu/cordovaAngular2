import {HammerGesturesPluginCommon} from './hammer_common';
import {Element} from 'angular2/src/facade/dom';
import {isPresent, BaseException} from 'angular2/src/facade/lang';

export class HammerGesturesPlugin extends HammerGesturesPluginCommon {
  constructor() {
    super();
  }

  supports(eventName:string):boolean {
    if (!super.supports(eventName)) return false;

    if (!isPresent(window.Hammer)) {
      throw new BaseException(`Hammer.js is not loaded, can not bind ${eventName} event`);
    }

    return true;
  }

  addEventListener(element:Element, eventName:string, handler:Function) {
    var zone = this.manager.getZone();
    eventName = eventName.toLowerCase();

    zone.runOutsideAngular(function () {
      // Creating the manager bind events, must be done outside of angular
      var mc = new Hammer(element);
      mc.get('pinch').set({enable: true});
      mc.get('rotate').set({enable: true});

      mc.on(eventName, function (eventObj) {
        zone.run(function () {
          handler(eventObj);
        });
      });
    });
  }
}
