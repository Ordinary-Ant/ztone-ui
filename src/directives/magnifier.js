export default {
  inserted (el) {
    const wrapper = el
    const mag = wrapper.querySelector('.zt-magnifier-mag')
    const img = wrapper.querySelector('.zt-magnifier-innerImg')
    const imgWidth = parseInt(window.getComputedStyle(wrapper, null).width)
    const imgHeight = parseInt(window.getComputedStyle(wrapper, null).height)
    const magWidth = parseInt(window.getComputedStyle(mag, null).width)
    const magHeight = parseInt(window.getComputedStyle(mag, null).height)
    const imgX = wrapper.offsetLeft
    const imgY = wrapper.offsetTop

    const init = () => {
      bindEvent()
    }

    function bindEvent () {
      wrapper.addEventListener('mouseover', function (e) {
        mag.className += ' show'
        const { x, y } = getPosition(e)
        showMag(x, y)
        document.addEventListener('mousemove', handleMouseMove, false)
      }, false)
      wrapper.addEventListener('mouseout', handleMouseOut, false)
    }

    function handleMouseMove (e) {
      const { x, y, mouseX, mouseY } = getPosition(e)
      showMag(x, y, mouseX, mouseY)
    }

    function handleMouseOut () {
      mag.className = 'zt-magnifier-mag'
      document.removeEventListener('mousemove', handleMouseMove)
    }

    function showMag (x, y, mouseX, mouseY) {
      mag.style.left = x + 'px'
      mag.style.top = y + 'px'
      img.style.left = -x + 'px'
      img.style.top = -y + 'px'
      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
        mag.className = 'zt-magnifier-mag'
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }

    function getPosition (e) {
      return {
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY
      }
    }

    init()
  }
}
