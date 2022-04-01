import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default function sketch (p) {

  let pre = {
    mode: 'orderly',
    density: "5"
  }

  p.setup = function() {
    p.createCanvas(800, 600);
    p.colorMode(p.HSL);
    p.background(150,50, 10);
    p.drawImage();
  }

  p.drawRects = function(presets, widthRange, heightRange) {

    var strokesSt = [];
    var strokesVec = [];

    for (var i = 0; i < presets.num; i ++) {

      var saveLast = p.createVector(widthRange, heightRange);

      strokesSt.push(saveLast);
      if (i % 2 === 1) {
          strokesVec.push(p.createVector(p.randomGaussian(-p.width*0.004, p.width*0.003), p.randomGaussian(-p.height*0.004, p.height*0.003)));
      } else {
          strokesVec.push(p.createVector(p.randomGaussian(p.width*0.004, p.width*0.003), p.randomGaussian(p.height*0.004, p.height*0.003)));
      }
      var thick = p.random(10,15);
      p.fill(0);
      p.beginShape();
      for (var j = 0; j < 4; j++){
        if (j % 2 === 0) {
          for (var k = 0; k < 200; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.8,0.8), strokesVec[i].y+p.random(-0.8,0.8)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        } else {
          for (var k = 0; k < thick; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-4,4), strokesVec[i].y+p.random(-4,4)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        }
        strokesVec[i].rotate(p.HALF_PI);
      }

      p.endShape();
    }

  }



  p.drawVerticalRects = function(presets, widthRange, heightRange) {

    var strokesSt = [];
    var strokesVec = [];

    var shift = 0;

    for (var i = 0; i < presets; i ++) {

      if (i === 0) {
      var saveLast = p.createVector(p.randomGaussian(p.width*0.75, p.width*0.025), -20);

      strokesSt.push(saveLast);
      strokesVec.push(p.createVector(p.randomGaussian(0, p.width*0.00005), p.random(p.height*0.0035, p.height*0.004)));

      var thick = p.random(25,30);
      p.fill(0);
      p.beginShape();
      for (var j = 0; j < 4; j++){
        if (j % 2 === 0) {
          for (var k = 0; k < p.height*0.45; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.4,0.4), strokesVec[i].y+p.random(-1.4,1.4)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        } else {
          for (var k = 0; k < thick; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.5,0.5), strokesVec[i].y+p.random(-3.5,3.5)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        }
        strokesVec[i].rotate(p.HALF_PI);
      }

      p.endShape();

      } else {

      saveLast = p.createVector(p.randomGaussian(p.width*(0.1 + shift), p.width*0.025), heightRange);

      strokesSt.push(saveLast);
      strokesVec.push(p.createVector(p.randomGaussian(p.width*0.000, p.width*0.00005), p.random(p.height*0.0035, p.height*0.004)));

      thick = p.random(20,30);
      p.fill(0);
      p.beginShape();
      for (var j = 0; j < 4; j++){
        if (j % 2 === 0) {
          for (var k = 0; k < p.height/3; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.4,0.4), strokesVec[i].y+p.random(-0.4,0.4)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        } else {
          for (var k = 0; k < thick; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.5,0.5), strokesVec[i].y+p.random(-0.5,0.5)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        }
        strokesVec[i].rotate(p.HALF_PI);
      }

      p.endShape();

      shift += 0.1;

      }

    }

  }


  p.drawRectangle = function(presets, widthRange, heightRange) {

    var strokesSt = [];
    var strokesVec = [];

    var shift = 0;

    for (var i = 0; i < 4; i ++) {

      var thick = 30;
      p.fill(0);
      if (i === 0) {

      var saveLast = p.createVector(p.width*0.4, p.height*0.16);

      strokesSt.push(saveLast);
      strokesVec.push(p.createVector(0, p.height*(0.003)));
      p.beginShape();
      for (var j = 0; j < 4; j++){
        if (j % 2 === 0) {
          for (var k = 0; k < p.height/3; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.12,0.08), strokesVec[i].y+p.random(-0.2,0.2)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        } else {
          for (var k = 0; k < thick; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.08,0.08), strokesVec[i].y+p.random(-1,1)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        }
        strokesVec[i].rotate(p.HALF_PI);
      }

      p.endShape();
      } else if(i === 1) {
      saveLast = p.createVector(p.width, p.height*0.25);
      strokesSt.push(saveLast);
      strokesVec.push(p.createVector(p.width*(-0.0025), 0));
      p.beginShape();
      for (var j = 0; j < 4; j++){
        if (j % 2 === 0) {
          for (var k = 0; k < p.width/3; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.1,0.1), strokesVec[i].y+p.random(-0.4,0.4)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        } else {
          for (var k = 0; k < thick; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.2,0.2), strokesVec[i].y+p.random(-0.4,0.4)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        }
        strokesVec[i].rotate(p.HALF_PI);
      }
      p.endShape();
      } else {
      saveLast = p.createVector(p.width, p.height*(0.77 + ((i - 2) * 0.11)));
      strokesSt.push(saveLast);
      strokesVec.push(p.createVector(p.width*(-0.0025), p.height*(0.00015)));
      p.beginShape();
      for (var j = 0; j < 4; j++){
        if (j % 2 === 0) {
          for (var k = 0; k < p.width/3; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.1,0.1), strokesVec[i].y+p.random(-0.7,0.7)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        } else {
          for (var k = 0; k < thick; k ++){
            strokesSt[i].add(p.createVector(strokesVec[i].x+p.random(-0.2,0.2), strokesVec[i].y+p.random(-0.4,0.4)));
            p.vertex(strokesSt[i].x, strokesSt[i].y);
          }
        }
        strokesVec[i].rotate(p.HALF_PI);
      }
      p.endShape();
      }

    }

  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.mode === 'chaotic'){
        pre.mode = 'chaotic';
        p.drawImage();
      } else if (props.mode === 'orderly'){
        pre.mode = 'orderly';
        p.drawImage();
      }
      if ( props.density !== pre.density) {
        pre.density = props.density;
        p.drawImage();
      }
  }



  p.drawImage = function () {


        var increment = 0.02;
        var texture = p.noise(xoff);
        var pixel = 4;

        var presets = {
          num: p.random(3,5),
          density: pre.density
        }

        p.noiseDetail(8, 0.7);

        p.noStroke();

        var yoff = 0.0;       // Option #1: 2D Noise

        for (var i = 0; i < p.width/pixel; i++) {
          var xoff = 0.0;       // Option #1: 2D Noise
          for (var j = 0; j < p.height/pixel; j++){
            texture = p.map(p.noise(xoff, yoff), 0, 1, 85, 99);
            p.fill(60, p.random(0,60), texture);
            p.rect(i*pixel, j*pixel, pixel, pixel);
            xoff += increment;
          }
          yoff += increment;
        }

        if (pre.mode === 'chaotic' ) {
          var dense = presets.density - 3;
            p.drawRects(presets, p.random(p.width*0.6, p.width*0.75), p.random(p.height*0.4, p.height*0.6))
            if (dense > 1) {
              p.drawRects(presets, p.random(p.width*0.3, p.width*0.4), p.random(p.height*0.2, p.height*0.8))
            }
            if (dense > 2 ) {
              p.drawRects(presets, p.random(p.width*0.4, p.width*0.6), p.random(p.height*0.05, p.height*0.5))
            }
            if (dense > 3 ) {
              p.drawRects(presets, p.random(p.width*0.2, p.width*0.8), p.random(p.height*0.1, p.height*0.9))
            }
            if (dense > 4 ) {
              p.drawRects(presets, p.random(p.width*0.2, p.width*0.8), p.random(p.height*0.1, p.height*0.9))
            }

        } else {
          p.drawVerticalRects(presets.density, 0.3, p.random(p.height*0.05, p.height*0.1))
          p.drawRectangle(presets.density, 0.3, p.random(p.height*0.05, p.height*0.1))
        }

        console.log(presets.density);



        yoff = 0.0;       // Option #1: 2D Noise

        for (var i = 0; i < p.width/pixel; i++) {
          var xoff = 0.0;       // Option #1: 2D Noise
          for (var j = 0; j < p.height/pixel; j++){
            texture = p.map(p.noise(xoff, yoff), 0, 1, 95, 100);
            var alphaChannel = p.map(p.noise(xoff, yoff), 0, 1, 0, 0.10);
            p.fill(200, 90, texture, alphaChannel);
            p.rect(i*pixel, j*pixel, pixel, pixel);
            xoff += increment;
          }
          yoff += increment;
        }

  }
};
