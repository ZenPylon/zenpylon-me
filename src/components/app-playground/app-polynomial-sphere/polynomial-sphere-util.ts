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
  private static faceIndices = ['a', 'b', 'c'];

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
    let faces;

    colorMap.setMax(extrema.max);
    colorMap.setMin(extrema.min);

    for (let i = 0; i < icoSphere.faces.length; i++) {
      faces = icoSphere.faces[i];

      for (let j = 0; j < 3; j++) {
        const vertexIndex = faces[faceIndices[j]];
        const coefficients = this.getCoefficientsFromVertex(icoSphere.vertices[vertexIndex]);
        const discriminant = this.getDiscriminantMagnitude(coefficients);
        faces.vertexColors[j] = colorMap.getColor(discriminant);
      }
    }
  }

  /**
   * Calculates the max and min of the discriminant for each vertex --> coefficients map
   * @param icoSphere The sphere to calculate the min and max
   */
  private static getSphereExtrema(
    icoSphere: IcosahedronGeometry,
  ): DiscriminantExtrema {
    const extrema: DiscriminantExtrema = {
      min: null,
      max: null,
    };
    let vertexIndex;

    for (let i = 0; i < icoSphere.faces.length; i++) {
      const face = icoSphere.faces[i];

      for (let j = 0; j < this.faceIndices.length; j++) {
        vertexIndex = face[this.faceIndices[j]];
        const coefficients = this.getCoefficientsFromVertex(icoSphere.vertices[vertexIndex]);
        const discriminant = this.getDiscriminantMagnitude(coefficients);

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

  private static getCoefficientsFromVertex(vertex: any): QuadraticCoefficients {
    return {
      a: vertex.x,
      b: vertex.y,
      c: vertex.z,
    };
  }

  /**
   * Returns the magnitude of the discriminant (i.e. the absolute value)
   * @param coefficients The coefficients that determint the quadratic equation.
   */
  private static getDiscriminantMagnitude(coefficients: QuadraticCoefficients): number {
    return Math.sqrt(
      Math.abs(coefficients.b * coefficients.b - 4 * coefficients.a * coefficients.c),
    );
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

  