class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 2;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 200;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = 0;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      const thisEase = this.isOpened ? 
                        (i == 1) ? ease.cubicOut : ease.cubicInOut:
                        (i == 1) ? ease.cubicInOut : ease.cubicOut;
      points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}

(function() {

    const elmHamburger = document.querySelector('.hamburger');
    const gNavItems = document.querySelectorAll('.global-menu__item');
    const elmOverlay = document.querySelector('.shape-overlays');
    let itemsnav = document.querySelectorAll('.global-menu__item');
    const overlay = new ShapeOverlays(elmOverlay);

    elmHamburger.addEventListener('click', () => {

        if (overlay.isAnimating) {
            return false;
        }

        overlay.toggle();
        if (overlay.isOpened === true) {
            elmHamburger.classList.add('is-opened-navi');
            for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.add('is-opened');
            }
        } else {
            elmHamburger.classList.remove('is-opened-navi');
            for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.remove('is-opened');
            }
        }
    });



    for (var i = 0; i <= itemsnav.length - 1; i++) {
        
        itemsnav[i].addEventListener('click', (e) => {

            if ($(e.target).hasClass('submenu__demo--padre3') || $(e.target).parent().hasClass('submenu__demo--padre3')) {
                e.preventDefault();
                $('ul').fadeToggle(300);
                return false;
            }

            if (overlay.isAnimating) {
                return false;
            }
            overlay.toggle();

            if (overlay.isOpened === true) {

                let categorias = document.querySelector('div.portafolio-container div.categorias');
                if (categorias) {
                    categorias.style.zIndex = "3";
                }

                elmHamburger.classList.add('is-opened-navi');
                for (var i = 0; i < gNavItems.length; i++) {
                    gNavItems[i].classList.add('is-opened');
                }

            } else {

                elmHamburger.classList.remove('is-opened-navi');
                for (var i = 0; i < gNavItems.length; i++) {
                    gNavItems[i].classList.remove('is-opened');
                }

                let categorias = document.querySelector('div.portafolio-container div.categorias');
                if (categorias) {
                    setTimeout(function(){ categorias.style.zIndex = "5"; }, 500);
                }
            }

        });
    }

}());
