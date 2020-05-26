// Video Tween
const videoTween = new TimelineLite();

videoTween.add([
  TweenLite.to('.video-footer-wrapper', {
    duration: 1,
    opacity: 1,
    ease: Power1.easeInOut,
  }),
  TweenLite.to('.video-link', {
    duration: 1,
    scale: 1,
    ease: Power1.easeInOut,
  }),
]);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.video-link',
  duration: 1000,
  triggerHook: 0,
})
  .setTween(videoTween)
  //   .addIndicators()
  .setPin('.video-link')
  .addTo(controller);

// Vimeo Video Play
const backgroundVideo = document.querySelector('.background-video');
const vimeoPlayButton = document.querySelector('.vimeo-play-button');
const vimeoVideo = document.querySelector('.vimeo');

const playVideo = () => {
  vimeoPlayButton.style.display = 'none';
  backgroundVideo.style.display = 'none';
  vimeoVideo.classList.add('vissible');
};

vimeoPlayButton.addEventListener('click', playVideo);
