import { IcosahedronGeometry } from 'three';

interface DiscriminantExtrema {
  min: number;
  max: number
}
export class PolynomialSphereUtil {
  public static createIcoSphere(radius: number, detail: number, colorMap) {
    const icoSphere = new IcosahedronGeometry(radius, detail);
    const extrema = this.getSphereExtrema(icoSphere, )_
    const rainbowLut = new Lut('rainbow', 512);
    rainbowLut.setMax(maxDiscriminant);
    rainbowLut.setMin(minDiscriminant);

    for (let i = 0; i < this.icosphere.faces.length; i++) {
      f = this.icosphere.faces[i];

      for (let j = 0; j < 3; j++) {
        vertexIndex = f[faceIndices[j]];
        p = this.icosphere.vertices[vertexIndex];
        const coefA = p.x;
        const coefB = p.y;
        const coefC = p.z;
        const discriminant = Math.sqrt(
          Math.abs(coefB * coefB - 4 * coefA * coefC),
        );
        f.vertexColors[j] = rainbowLut.getColor(discriminant);
      }
    }

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
      vertexColors: THREE.VertexColors,
      shininess: 0,
    });
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
    });
    const mesh = new THREE.Mesh(this.icosphere, material);
    mesh.position.x = 0;
    this.scene.add(mesh);
  }

  private getSphereExtrema(icoSphere: IcosahedronGeometry): DiscriminantExtrema {
    // Go through and find the min / max values of the discriminant
    const faceIndices = ['a', 'b', 'c'];
    const extrema: DiscriminantExtrema = {
      min: null,
      max: null
    };
    let vertexIndex, f, p;

    for (let i = 0; i < icoSphere.faces.length; i++) {
      f = icoSphere.faces[i];

      for (let j = 0; j < faceIndices.length; j++) {
        vertexIndex = f[faceIndices[j]];
        p = icoSphere.vertices[vertexIndex];
        const coefA = p.x;
        const coefB = p.y;
        const coefC = p.z;
        const discriminant = Math.sqrt(
          Math.abs(coefB * coefB - 4 * coefA * coefC),
        );

        if (discriminant > extrema.max || extrema.max === null) {
          extrema.max = discriminant;
        }
        if (discriminant < extrema.min || extrema.min === null) {
          extrema.min = discriminant;
        }
      }

      return extrema;
    }
  }
}
