import { IcosahedronGeometry } from 'three';

interface DiscriminantExtrema {
  min: number;
  max: number;
}

interface QuadraticCoefficients {
  a: number;
  b: number;
  c: number;
};

export class PolynomialSphereUtil {
  public static createIcoSphere(
    radius: number,
    detail: number,
    colorMapName: string,
    colorMapResolution: number,
  ) {
    const icoSphere = new IcosahedronGeometry(radius, detail);
    const extrema = this.getSphereExtrema(icoSphere);
    const faceIndices = ['a', 'b', 'c'];
    const colorMap = new Lut(colorMapName, colorMapResolution);
    colorMap.setMax(extrema.max);
    colorMap.setMin(extrema.min);

    for (let i = 0; i < icoSphere.faces.length; i++) {
      const f = icoSphere.faces[i];

      for (let j = 0; j < 3; j++) {
        const vertexIndex = f[faceIndices[j]];
        const coefficients = this.coefficientsFromVertex(icoSphere.vertices[vertexIndex]);
        const discriminant = Math.sqrt(
          Math.abs(coefficients.b * coefficients.b - 4 * coefficients.a * coefficients.c),
        );
        f.vertexColors[j] = colorMap.getColor(discriminant);
      }
    }
  }

  private static getSphereExtrema(
    icoSphere: IcosahedronGeometry,
  ): DiscriminantExtrema {
    // Go through and find the min / max values of the discriminant
    const faceIndices = ['a', 'b', 'c'];
    const extrema: DiscriminantExtrema = {
      min: null,
      max: null,
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

  private static coefficientsFromVertex(vertex: any): QuadraticCoefficients {
    return {
      a: vertex.x,
      b: vertex.y,
      c: vertex.z,
    };
  }

  private placeholder() {
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

  