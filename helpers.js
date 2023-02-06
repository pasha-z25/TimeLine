function createTag(tag, attrs) {
  const elem = document.createElement(tag)

  if (attrs && typeof attrs === 'object') {
    const atributes = Object.entries(attrs)

    atributes.forEach(([key, value]) => {
      elem.setAttribute(key, value)
    })
  }

  return elem
}

function createEvent() {
  return {}
}

function createEventCard() {
  return {}
}

function formHandler (target) {
  event.preventDefault();
  const eventItem = {}

  Array.from(target.childNodes)
    .filter(field => field.tagName === "INPUT" || field.tagName === "SELECT")
    .map(field => {return {[field.name]: field.value}})
    .forEach((item) => Object.assign(eventItem, item))

  events.push(eventItem)
}
