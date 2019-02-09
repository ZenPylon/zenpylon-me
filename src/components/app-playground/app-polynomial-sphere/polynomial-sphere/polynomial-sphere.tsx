import { Component } from '@stencil/core';
import {
  Mesh,
  MeshPhongMaterial,
  MeshBasicMaterial,
  Scene,
  VertexColors,
  Color,
  AmbientLight,
} from 'three';

import { PolynomialSphereUtil } from './polynomial-sphere-util';

@Component({
  tag: 'polynomial-sphere',
})
export class PolynomialSphere {
  public colorMapName = 'rainbow';
  public colorMapResolution = 512;
  public mesh: Mesh;
  public radius = 200;
  public scene: Scene;

  constructor() {
    const ambientLight = new AmbientLight(0xaaaaaa);
    ambientLight.color.setHSL(0.121, 0.01, 0.8);

    this.scene = new Scene();
    this.scene.background = new Color(0x000000);
    this.scene.add(ambientLight);
  }

  render() {
    return <p>Sphere placeholder</p>;
  }

  private createSphere() {
    this.scene.remove(this.mesh);
    const icoSphere = PolynomialSphereUtil.createColoredIcoSphere(
      this.radius,
      4,
      this.colorMapName,
      this.colorMapResolution,
    );
    const material = new MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
      vertexColors: VertexColors,
      shininess: 0,
    });
    const wireframeMaterial = new MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
    });
    this.mesh = new Mesh(icoSphere.sphere, material);
    this.mesh.position.x = 0;
    this.scene.add(this.mesh);
  }
}
