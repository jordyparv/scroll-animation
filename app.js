const html = document.documentElement;
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const currentFrame = (index) => `seq/videoplayback (${index.toString()}).jpg`;
const frameCount = 883;
alert('scrolldown  to see magic');
canvas.height = 1080;
canvas.width = 1920;

const img = new Image();
img.src = currentFrame(1);
img.onload = () => {
  context.drawImage(img, 0, 0);
};

const updateImage = (frame) => {
  img.src = currentFrame(frame);
  context.drawImage(img, 0, 0);
};
window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScroll = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});
