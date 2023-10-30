import { Button, Table } from "react-bootstrap";

function Horario(props) {
  return (
    <div>
      {props.horario.length === 0 ? (
        <h3 style={{textAlign: "center", fontSize: 20}}>No tienes materias</h3>
      ) : (
        <>
          <h5>Mi horario: {props.total} materia</h5>
          <Table width={100} striped bordered>
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
              {props.horario.map((m) => (
                <tr className="content-table" key={m.id}>
                  <td style={{fontSize: 20}}>{m.clave}</td>
                  <td style={{fontSize: 20}}>{m.materia}</td>
                  <td style={{fontSize: 20}}>{m.hora}</td>
                  <td style={{fontSize: 20}}>{m.grupo}</td>
                  <td>
                    <Button
                      onClick={() => props.eliminar(m)}
                      variant="danger"
                    >
                      -
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}

export default Horario;
