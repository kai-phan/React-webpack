declare module 'viewerjs' {
  export type Options = {
    backdrop?: string | boolean;
    button?: boolean;
    navbar?: boolean | 0 | 1 | 2 | 3 | 4;
    className?: string;
    container?: HTMLElement | string;
    initialViewIndex?: number;
    inline?: boolean;
    interval?: number;
    keyboard?: boolean;
    focus?: boolean;
    loading?: boolean;
    loop?: boolean;
    minWidth?: number;
    minHeight?: number;
    movable?: boolean;
    rotatable?: boolean;
    scalable?: boolean;
    zoomable?: boolean;
    zoomOnTouch?: boolean;
    zoomOnWheel?: boolean;
    slideOnTouch?: boolean;
    toggleOnDblclick?: boolean;
    tooltip?: boolean;
    transition?: boolean;
    zIndex?: number;
    zoomRatio?: number;
    minZoomRatio?: number;
    maxZoomRatio?: number;

    // TODO: typing
    title?: any;
    toolbar?: any;
    filter?: any;
    fullscreen?: any;
    inheritedAttributes?: any;
    url?: any;
    // method
    ready?: any;
    show?: any;
    shown?: any;
    hide?: any;
    hidden?: any;
    view?: any;
    viewed?: any;
    move?: any;
    moved?: any;
    rotate?: any;
    rotated?: any;
    scale?: any;
    scaled?: any;
    zoom?: any;
    zoomed?: any;
    play?: any;
    stop?: any;
  };

  class Viewer {
    constructor(el: HTMLElement, options?: Options): Viewer;
    public show(immediate: boolean): void;
    public hide(immediate: boolean): void;
    public view(index: number): void;
    public prev(loop: boolean): void;
    public next(loop: boolean): void;
    public move(x: number, y?: number): void;
    public moveTo(x: number, y?: number): void;
    public rotate(degree: number): void;
    public rotateTo(degree: number): void;
    public scale(x: number, y?: number): void;
    public scaleX(x: number): void;
    public scaleY(y: number): void;
    public zoom(ratio: number, hasTooltip?: boolean): void;
    public zoomTo(ratio: number, hasTooltip?: boolean): void;
    public play(fullScreen?: boolean | FullscreenOptions): void;
    public stop(): void;
    public full(): void;
    public exit(): void;
    public tooltip(): void;
    public toggle(): void;
    public reset(): void;
    public update(): void;
    public destroy(): void;
  }

  export = Viewer;
  export default Viewer;
}
