export default function getStatusSolicitacao(
  status: any,
  statusSolicitation: any,
) {
  switch (true) {
    case status === true && statusSolicitation === null:
      return 'Em andamento';
    case status === true && statusSolicitation === false:
      return 'Em andamento';
    case status === false && statusSolicitation === false:
      return 'Disponível';
    case status === true && statusSolicitation === true:
      return 'Encerrado';
    default:
      break;
  }
}
