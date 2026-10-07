import './Emoji.css'

const EMOJI_MAP = new Map<String, string>([
    ["happy", "😁"],
    ["sick", "😣"],
    ["dead", "😵"]
])

export default function Emoji(){
    return(
        <>
        <div className='emoji'>
            {EMOJI_MAP.get("sick")|| "nothing"}
        </div>
        </>
    )
}