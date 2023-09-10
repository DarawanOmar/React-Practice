import {useState, useEffect} from 'react'

const useWindoSize = () => {
    const [windoSize, setwindowSize] = useState({
        width : undefined,
        hieght : undefined
    })
    
    const setWidthAndHieght = () => {
        setwindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        setWidthAndHieght()
        window.addEventListener("resize",setWidthAndHieght)

        return () => window.removeEventListener('resize',setWidthAndHieght)
    }, [])
    
    
  return windoSize;
}

export default useWindoSize
