import React from 'react';
import Resizable from 're-resizable';
import Draggable from 'react-draggable';

const DraggableImage = () => {
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL';

  return (
    <Draggable>
      <Resizable
        defaultSize={{
          width: 200,
          height: 360
        }}
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        lockAspectRatio={true}
      />
    </Draggable>
  );
};

export default DraggableImage;
