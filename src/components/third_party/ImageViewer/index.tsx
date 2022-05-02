import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';

import origin from 'src/assets/origin.png';

export type Props = {
  options?: Viewer.Options;
};

const ImageViewer: React.ForwardRefRenderFunction<Viewer, Props> = (
  props,
  ref,
) => {
  const { options } = props;
  const imageRef = useRef<HTMLImageElement | null>(null);
  const viewerRef = useRef<Viewer>();

  useEffect(() => {
    if (viewerRef.current) return;

    viewerRef.current = new Viewer(imageRef.current!, options);

    if (ref && typeof ref === 'function') {
      ref(viewerRef.current);
    }
    if (ref && 'current' in ref) {
      ref.current = viewerRef.current;
    }

    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return (
    <div>
      <img width={150} ref={imageRef} src={origin} alt="origin" />
    </div>
  );
};

export default React.forwardRef(ImageViewer);
