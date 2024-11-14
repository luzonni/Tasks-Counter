
export function timeToSecond(time: string) {
    const [H = "0", M = "0", S = "0"] = time.split(":")
    const H_Seconrs = Number(H) * 3600
    const M_Seconds = Number(M) * 60
    const S_Seconds = Number(S)
    return H_Seconrs + M_Seconds + S_Seconds
}

export function secondsToString(time?: number): string {
    if(!time) {
        return "00:00"
    }
    const minutos: number = Math.floor(time/60)
    const seconds: number = time % 60
    const [minDezena, minUni] = String(minutos).padStart(2, "0")
    const [secondDezena, secondUni] = String(seconds).padStart(2, "0")
    return String(minDezena) + String(minUni) + ":" + String(secondDezena) + String(secondUni)
}