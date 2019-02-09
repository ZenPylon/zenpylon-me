import { Component } from '@stencil/core';
import {
  Mesh,
  MeshPhongMaterial,
  MeshBasicMaterial,
  Scene,
  VertexColors,
} from 'three';

import { PolynomialSphereUtil } from './polynomial-sphere-util';

@Component({
  tag: 'polynomial-sphere',
})
export class PolynomialSphere {
  public colorMapName = 'rainbow';
  public colorMapResolution = 512;
  public mesh: Mesh;
  public radius = 5;
  public scene: Scene;

  render() {
    return <p>Sphere placeholder</p>;
  }

  private createSphere() {
    if (this.mesh) {
      return;
    }

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
