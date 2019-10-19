import { useEffect } from 'react'

const mobileDetect = userAgent => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))

  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => !isMobile()

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos
  }
}

export default elementName => {

  const { isDesktop } = mobileDetect(navigator.userAgent)

  useEffect(() => {
    if (isDesktop) {
      const firstElement = document.querySelector(`[name="${elementName}"]`)
      if (firstElement) firstElement.focus()
    }
  }, [elementName])

}
