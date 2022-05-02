import React, { useRef } from 'react';
import Viewer from 'viewerjs';

import { ImageViewer } from 'src/components/third_party';

const ImageView: React.FC = () => {
  const ref = useRef<Viewer>(null);

  return (
    <div>
      <hr />
      <h3>Image viewer</h3>
      <ImageViewer ref={ref} options={{ loading: true }} />
      <button
        onClick={() => {
          if (ref.current) {
            ref.current.show(true);
          }
        }}
      >
        Show
      </button>
    </div>
  );
};

export default ImageView;
