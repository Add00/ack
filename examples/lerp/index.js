import { Group } from '../../src/Group.js';
import { Canvas } from '../../src/Canvas.js';
import { Polygon } from '../../import/geometry.js';
import { FillStyle, StrokeStyle } from '../../import/styles.js';

const svg = document.getElementById('graph');
const CANVAS_HEIGHT = 500;

// Helper function to generate a random number within a range
function random (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Helper function to generate a random polygon shard
function generateShard (minX, maxX) {
  return Polygon.from(random(minX, maxX), random(minX, CANVAS_HEIGHT + 25))
    .setPoint(random(minX, maxX), random(minX, CANVAS_HEIGHT + 25))
    .setPoint(random(minX, maxX), random(minX, CANVAS_HEIGHT + 25))
    .setPoint(random(minX, maxX), random(minX, CANVAS_HEIGHT + 25));
}

// Helper function to randomize the shard's points
function randomizeShard (shard, minX, maxX) {
  shard
    .setPoint(random(minX, maxX), random(0, CANVAS_HEIGHT + 25))
    .setPoint(random(minX, maxX), random(0, CANVAS_HEIGHT + 25))
    .setPoint(random(minX, maxX), random(0, CANVAS_HEIGHT + 25))
    .setPoint(random(minX, maxX), random(0, CANVAS_HEIGHT + 25));
}

// Create the groups for left, center, and right sides
const leftSide = Group.group(
  generateShard(-25, 150),
  generateShard(-25, 150),
  generateShard(-25, 150),
  generateShard(-25, 150),
  generateShard(-25, 150)
)
  .setFillStyle(new FillStyle({ fill: 'rgb(255, 0, 0)', fillOpacity: 0.4 }))
  .setStrokeStyle(new StrokeStyle({ strokeWidth: 0 }));

const centreSide = Group.group(
  generateShard(125, 275),
  generateShard(125, 275),
  generateShard(125, 275),
  generateShard(125, 275),
  generateShard(125, 275)
)
  .setFillStyle(new FillStyle({ fill: 'rgb(171, 0, 84)', fillOpacity: 0.4 }))
  .setStrokeStyle(new StrokeStyle({ strokeWidth: 0 }));

const rightSide = Group.group(
  generateShard(250, 375),
  generateShard(250, 375),
  generateShard(250, 375),
  generateShard(250, 375),
  generateShard(250, 375)
)
  .setFillStyle(new FillStyle({ fill: 'rgb(84, 0, 171)', fillOpacity: 0.4 }))
  .setStrokeStyle(new StrokeStyle({ strokeWidth: 0 }));

// Use a function to update shard positions at regular intervals
function updateShards () {
  for (const shard of leftSide) {
    shard.clear();
    randomizeShard(shard, -25, 150);
  }

  for (const shard of centreSide) {
    shard.clear();
    randomizeShard(shard, 125, 275);
  }

  for (const shard of rightSide) {
    shard.clear();
    randomizeShard(shard, 250, 375);
  }
}

setInterval(updateShards, 1000);

// Build the canvas and nest the groups
const canvas = Canvas.from(svg);
canvas.nest(leftSide).nest(centreSide).nest(rightSide);
