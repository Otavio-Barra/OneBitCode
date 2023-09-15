switch ("b") {
  case "a":
    console.log("resultado a");
  case "b":
    console.log("resultado b");
  case "c":
    console.log("resultado c");
  default:
    console.log("finalizando");
}
//aqui depois q ele acha o caso certo ele continua executando pois nao tem o brake
//entao ele vai testandotodos os outros cases que estao a baixo do certo

switch ("a") {
  case "a":
    console.log("resultado a");
    break;
  case "b":
    console.log("resultado b");
    break;
  case "c":
    console.log("resultado c");
    break;
  default:
    console.log("finalizando");
}
//ja aqui ele parou no caso certo pois ele achou o brake
