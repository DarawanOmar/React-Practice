import { parseISO, formatDistanceToNow , format} from 'date-fns';
import React from 'react'


const TimeAgo = ({timestamp}) => {

    let timeAgo = '';
    if(timestamp){
        const time = parseISO(timestamp)
        const date = format(time , "MM/dd/yyyy")
        const timePeroid = formatDistanceToNow(time)
        timeAgo = ` ${timePeroid} ago ${date}`
    }
  return (
    <span title={timestamp}>
        &nbsp;{timeAgo}
    </span>
  )
}

export default TimeAgo
