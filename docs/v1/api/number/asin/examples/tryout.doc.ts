import { DNumber } from "@duplojs/utils";

// Trouver l'angle dont le sinus est 0.5
const sinValue = 0.5;
const radians = DNumber.asin(sinValue);

// Convertir en degrés
const degrees = (radians * 180) / Math.PI;
// degrees: 30 (l'angle est 30°)
