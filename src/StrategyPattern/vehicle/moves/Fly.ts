import {gsap} from 'gsap'
import type IMoveVehicleBehavior from './IMoveVehicleBehavior';

export default class Fly implements IMoveVehicleBehavior {
  move(element: any, tweenVars: any) {
    gsap.globalTimeline.clear();
    gsap.to(element, 3, tweenVars)
  }
}