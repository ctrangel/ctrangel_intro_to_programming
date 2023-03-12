// script for _YourTopic.html

function PigeonSpecs(
  name,
  color,
  size,
  behavior,
  group,
  location,
  weather,
  time,
  rating
) {
  this.name = name;
  this.color = color;
  this.size = size;
  this.behavior = behavior;
  this.group = group;
  this.location = location;
  this.weather = weather;
  this.time = time;
  this.rating = rating;
}

let pigeonSighting = new PigeonSpecs(
  "Jesse Pinkman",
  "gray and white",
  "stocky",
  "laid back",
  "three",
  "Third Avenue",
  "partly cloudy",
  "3:45 pm",
  "9"
);

document.write(
  "The pigeon's name is " +
    pigeonSighting.name +
    "." +
    "Their color is " +
    pigeonSighting.color +
    "." +
    "Their shape is best described as " +
    pigeonSighting.size +
    "." +
    "They are " +
    pigeonSighting.behavior +
    "." +
    "There were " +
    pigeonSighting.group +
    " of them." +
    "<br>" +
    "They were sighted on " +
    pigeonSighting.location +
    "." +
    "The weather was " +
    pigeonSighting.weather +
    "." +
    "The time of sighting was " +
    pigeonSighting.time +
    "." +
    "I would rate this pigeon a " +
    pigeonSighting.rating +
    " out of 10."
);
document.write("<br>");
document.write("<img src='media/pigeon.jpg' width='200' height='200' >");
