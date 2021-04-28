# stimulus-debug

A small Stimulus controller to log events to help with debugging. Brought to you by [Bullet Train](https://bullettrain.co), a Ruby on Rails SaaS-in-a-box.

## Installation

npm

    npm i stimulus-debug

yarn

    yarn add stimulus-debug

### Register the debug controller with your application's other Stimulus controllers

Where your Stimulus controller are currently being loaded (e.g. `application.js`):

```js
import DebugController from 'stimulus-debug'

// ...
application.register('debug', DebugController)
```

## Usage

At the root of your document, register the debug controller and log some events that you want to catch:

```erb
<html<% if ENV.fetch("RAILS_ENV") == 'development' %>
  data-controller="debug"
  data-action="turbo:visit->debug#logAll click->debug#logWatched"
<% end -%>>
```

In this case:

* We're only using the debug controller in development (assuming Rails here)
* `turbo:visit->debug#logAll`: All events of type 'turbo:visit' that bubble up to the document root will be logged to the console
* `click->debug#logWatched`: All events of type 'click' on **watched targets** will be logged to the console.

## Logging events from specific `watched` elements

1. Add `data-debug-target="watched"` to the element you want to log events from
2. On the root debug controller's `data-action`, catch the event and send it to `logWatched` e.g. `data-action="click->debug#logWatched"`

