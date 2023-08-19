const r1 = obj.key2 ? "Si":"No"
const r2 = obj.key || obj.key3 || "default"
const r3 = obj.pais?.ciudad?.nombre || "N/A" //si no existe el pais, se salta a siguiente valor "N/A"   

