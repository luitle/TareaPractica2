import { Button, Table } from "react-bootstrap";

function Materias(props) {
  return (
    <div>
      <h5 style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Materias</h5>
      <Table width={100} striped bordered hover>
        <thead>
          <tr>
            <th style={{fontSize: 20}}>Clave</th>
            <th style={{fontSize: 20}}>Materia</th>
            <th style={{fontSize: 20}}>Hora</th>
            <th style={{fontSize: 20}}>Grupo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.materias.map((m) => (
            <tr key={m.id}>
              <td style={{fontSize: 20}}>{m.clave}</td>
              <td style={{fontSize: 20}}>{m.materia}</td>
              <td style={{fontSize: 20}}>{m.hora}</td>
              <td style={{fontSize: 20}}>{m.grupo}</td>
              <td>
                <Button disabled={props.buscar(m)} onClick={() => props.agregar(m)} variant="success">
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Materias;
