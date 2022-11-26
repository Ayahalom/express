export const distanceCalculator = function (velocity: number, angle: number): number {
    const g: number = 9.81;
    return (Math.sin(2 * Math.PI * angle / 180) * velocity ** 2 / g);
}