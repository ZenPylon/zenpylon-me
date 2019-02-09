/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppAbout {}
  interface AppAboutAttributes extends StencilHTMLAttributes {}

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppPlayground {}
  interface AppPlaygroundAttributes extends StencilHTMLAttributes {}

  interface AppPolynomialSphere {}
  interface AppPolynomialSphereAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppAbout': Components.AppAbout;
    'AppHeader': Components.AppHeader;
    'AppHome': Components.AppHome;
    'AppPlayground': Components.AppPlayground;
    'AppPolynomialSphere': Components.AppPolynomialSphere;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-about': Components.AppAboutAttributes;
    'app-header': Components.AppHeaderAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-playground': Components.AppPlaygroundAttributes;
    'app-polynomial-sphere': Components.AppPolynomialSphereAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppPlaygroundElement extends Components.AppPlayground, HTMLStencilElement {}
  var HTMLAppPlaygroundElement: {
    prototype: HTMLAppPlaygroundElement;
    new (): HTMLAppPlaygroundElement;
  };

  interface HTMLAppPolynomialSphereElement extends Components.AppPolynomialSphere, HTMLStencilElement {}
  var HTMLAppPolynomialSphereElement: {
    prototype: HTMLAppPolynomialSphereElement;
    new (): HTMLAppPolynomialSphereElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement
    'app-header': HTMLAppHeaderElement
    'app-home': HTMLAppHomeElement
    'app-playground': HTMLAppPlaygroundElement
    'app-polynomial-sphere': HTMLAppPolynomialSphereElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-header': HTMLAppHeaderElement;
    'app-home': HTMLAppHomeElement;
    'app-playground': HTMLAppPlaygroundElement;
    'app-polynomial-sphere': HTMLAppPolynomialSphereElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
