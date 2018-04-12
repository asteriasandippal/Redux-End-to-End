import { SLIDE } from '../constants/actionConstants';

export function updateColor(color, value) {
    return {
        type: SLIDE,
        color,
        value
    }
}
