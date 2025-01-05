

export const randomColor = () => {
    const colors = ["text-blue-400", "text-amber-400", "text-green-400"]
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}