import { useEffect } from "react"

function Timer({dispatch, secondsRemaining}) {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({type : 'tick'})
        }, 1000);
        return function() {
            clearInterval(id);
        }
    }, [dispatch])
    return (
        <div className="timer">
            {String(minutes).padStart(2,'0')} : {String(seconds).padStart(2,'0')}
        </div>
    )
}

export default Timer
