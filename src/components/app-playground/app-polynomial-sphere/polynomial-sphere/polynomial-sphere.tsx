import { Component, Element } from '@stencil/core';
import {
  Mesh,
  MeshPhongMaterial,
  MeshBasicMaterial,
  Scene,
  VertexColors,
  Color,
  AmbientLight,
  Renderer,
  WebGLRenderer,
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
  public renderer: Renderer;
  public scene: Scene;

  @Element() private element: HTMLElement;

  constructor() {
    const ambientLight = new AmbientLight(0xaaaaaa);
    ambientLight.color.setHSL(0.121, 0.01, 0.8);

    this.scene = new Scene();
    this.scene.background = new Color(0x000000);
    this.scene.add(ambientLight);
    this.createSphere();
  }

  componentDidLoad() {
    const canvasElement = this.element.querySelector('canvas');
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: canvasElement,
    });

    this.renderer.setSize(400, 400);
  }

  render() {
    return <canvas />;
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
    wireframeMaterial.blending;
    this.mesh = new Mesh(icoSphere.sphere, material);
    this.mesh.position.x = 0;
    this.scene.add(this.mesh);
  }
}
