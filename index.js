import { useEffect } from 'react'

export default elementName => {

  useEffect(() => {
    const firstElement = document.querySelector(`[name="${elementName}"]`)
    if (firstElement) firstElement.focus()
  }, [elementName])

}
