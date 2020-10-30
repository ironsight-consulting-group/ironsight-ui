import { DEFAULT_COLOR } from "./constants"

const isSelected = (name, hovered) => hovered === name;
const getContinentColor = (name, hovered) => isSelected(name, hovered) ? 'blue-3' : DEFAULT_COLOR;
export const getContinentBody = (name, hovered, setHovered) => ({
	color: getContinentColor(name, hovered),
	onHover: () => setHovered(name),
});
