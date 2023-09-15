const char1 = prompt("nome do char");
const atackChar1 = Number(prompt("poder de ataque"));

const char2 = prompt("nome do char 2");
const lifeChar2 = Number(prompt("quantidade de vida"));
const defenseChar2 = Number(prompt("poder de defesa"));
const shieldChar2 = Number(prompt(`o ${char2} possui escudo?\n1-sim\n2-n`));

if (atackChar1 > defenseChar2 && shieldChar2 == 2) {
  let damage = Math.abs(atackChar1 - defenseChar2);
  alert(
    `o dano do ${char1} foi de ${damage}, agr o ${char2} tem ${
      lifeChar2 - damage
    } de vida`
  );
} else if (atackChar1 > defenseChar2 && shieldChar2 == 1) {
  let damage = atackChar1 - defenseChar2;
  alert(
    `o dano do ${char1} foi de ${damage / 2}, agr o ${char2} tem ${
      lifeChar2 - damage / 2
    } de vida`
  );
} else if (atackChar1 < defenseChar2) {
  alert("ataque sem efeito");
}
