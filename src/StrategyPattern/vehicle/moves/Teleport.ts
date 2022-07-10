import type IMoveVehicleBehavior from './IMoveVehicleBehavior';
import { gsap } from 'gsap';

export default class Teleport implements IMoveVehicleBehavior {
  move(element: any, tweenVars: any) {
    gsap.globalTimeline.clear();
    const tl = gsap.timeline()
    tl
      .to(element, 0.2, {autoAlpha: 0})
      .set(element, tweenVars)
      .to(element, 0.2, {autoAlpha: 1})
  }
}