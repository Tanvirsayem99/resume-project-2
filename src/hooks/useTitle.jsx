import { useEffect } from "react"

const useTile = title =>{
    useEffect(()=>{
        document.title = `Cars Toy || ${title}`;
    },[title])
}

export default useTile;