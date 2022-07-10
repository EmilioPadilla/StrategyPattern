import StrategyPatternDemo from './StrategyPattern';
import type IPattern from './IPattern';

export default class PatternCraft{
    appContainer: HTMLElement
    currentPattern: IPattern
    title: HTMLHeadingElement

  constructor() {
    this.appContainer = document.querySelector('#App')!
    this.currentPattern = new StrategyPatternDemo(this.appContainer)
    this.title = document.querySelector('h1')!
  }
}