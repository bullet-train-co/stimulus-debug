import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "watched"]
  
  logWatched(event) {
    // 1. add debug-target="watched" to an element to log events (that bubble up and aren't cancelled)
    // 2. add the event type to the data-action of the controller's element
    // e.g. data-action="click->debug#logWatched"
    if (event.target && this.watchedTargets.includes(event.target)) {
      console.log(event.type, event)
    }
  }
  
  logAll(event) {
    console.log(event.type, event)
  }
}