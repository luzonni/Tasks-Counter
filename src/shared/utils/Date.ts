
export function timeToSecond(time: string) {
    const [H = "0", M = "0", S = "0"] = time.split(":")
    const H_Seconrs = Number(H) * 3600
    const M_Seconds = Number(M) * 60
    const S_Seconds = Number(S)
    return H_Seconrs + M_Seconds + S_Seconds
}