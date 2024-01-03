import { useEffect, useRef } from 'react';

const CanvasComponent = () => {
   const canvasRef = useRef(null);
   const ctxRef = useRef(null);
   let mouseMoved = false;

   const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
   };

   const params = {
      pointsNumber: 30,
      widthFactor: 0.3,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
   };

   const trail = new Array(params.pointsNumber);
   for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
         x: pointer.x,
         y: pointer.y,
         dx: 0,
         dy: 0,
      };
   }

   const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
   };

   const setupCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctxRef.current = ctx;
   };

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;

      const handleResize = () => {
         setupCanvas();
         update(0);
      };

      const handleMouseClick = e => {
         updateMousePosition(e.pageX, e.pageY);
      };

      const handleMouseMove = e => {
         mouseMoved = true;
         updateMousePosition(e.pageX, e.pageY);
      };

      const handleTouchMove = e => {
         mouseMoved = true;
         updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
      };

      canvas.addEventListener('click', handleMouseClick);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('resize', handleResize);

      return () => {
         canvas.removeEventListener('click', handleMouseClick);
         canvas.removeEventListener('mousemove', handleMouseMove);
         canvas.removeEventListener('touchmove', handleTouchMove);
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const update = t => {
      if (!mouseMoved) {
         pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
         pointer.y =
            (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
      }

      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      trail.forEach((p, pIdx) => {
         const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
         const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
         p.dx += (prev.x - p.x) * spring;
         p.dy += (prev.y - p.y) * spring;
         p.dx *= params.friction;
         p.dy *= params.friction;
         p.x += p.dx;
         p.y += p.dy;
      });

      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
         const xc = 0.5 * (trail[i].x + trail[i + 1].x);
         const yc = 0.5 * (trail[i].y + trail[i + 1].y);
         ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
         ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
         ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      window.requestAnimationFrame(update);
   };

   useEffect(() => {
      setupCanvas();
      update(0);
   }, []);

   return <canvas ref={canvasRef} />;
};

export default CanvasComponent;
