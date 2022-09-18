// 1080 -> 18:00

export function convertMinuteToHourString(mintesAmount: number){
    const hours = Math.floor(mintesAmount / 60);
    const minutes = mintesAmount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}