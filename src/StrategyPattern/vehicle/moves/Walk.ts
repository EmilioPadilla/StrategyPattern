import type IMoveVehicleBehavior from './IMoveVehicleBehavior';
import {gsap} from 'gsap'

export default class Walk implements IMoveVehicleBehavior {
  move(element: any, tweenVars: any) {
    gsap.globalTimeline.clear();
    gsap.to(element, 3, tweenVars)

    const tl = gsap.timeline()

    tl
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 20})
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 20})
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 0})

  }
}