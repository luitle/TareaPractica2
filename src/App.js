import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Materias from "./components/Materias";
import Horario from "./components/Horario";
import Footer from "./components/Footer";
import Swal from "sweetalert2";

class App extends Component {
  state = {
    materias: [
      {
        id: 1,
        clave: "AEB-1001",
        materia: "Desarrollo de Aplicaciones Moviles",
        hora: "13:00-14:00",
        grupo: "F8A",
      },
      {
        id: 2,
        clave: "IFF-1012",
        materia: "Estrategias de gestion",
        hora: "14:00-15:00",
        grupo: "F8A",
      },
      {
        id: 3,
        clave: "IFD-1023",
        materia: "Taller de emprendedores",
        hora: "17:00-18:00",
        grupo: "F8A",
      },
      {
        id: 4,
        clave: "IFF-1016",
        materia: "Inteligencia de negocios",
        hora: "16:00-17:00",
        grupo: "F8A",
      },
      {
        id: 5,
        clave: "IFD-1023",
        materia: "Taller de emprendedores",
        hora: "14:00-15:00",
        grupo: "F8B",
      },
      {
        id: 6,
        clave: "IFF-1012",
        materia: "Estrategias de gestion",
        hora: "15:00-16:00",
        grupo: "F8B",
      },
      {
        id: 7,
        clave: "AEB-1001",
        materia: "Desarrollo de Aplicaciones Moviles",
        hora: "16:00-17:00",
        grupo: "F8B",
      },
      {
        id: 8,
        clave: "IFF-1016",
        materia: "Inteligencia de negocios",
        hora: "17:00-18:00",
        grupo: "F8B",
      },
    ],
    horario: [],
    total: 0,
  };

  agregar = (mat) => {
    debugger;
    let horarioTemp = [...this.state.horario, mat];
    let verMat = this.state.horario.findIndex((m) => m.materia === mat.materia);
    let verHora = this.state.horario.findIndex((m) => m.hora === mat.hora);
    if (verHora !== -1) {
      return Swal.fire({
        icon: "error",
        title: "Ya tienes una materia a esa hora!",
      });
    } else if (verMat !== -1) {
      return Swal.fire({
        icon: "error",
        title: "Esa materia ya la elegiste en otro grupo!",
      });
    }

    let tempTotal = horarioTemp.length;
    this.setState({
      horario: horarioTemp,
      total: tempTotal,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Materia agregada",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  eliminar = (materia) => {
    debugger;
    let temporal = this.state.horario.filter((m) => m.id !== materia.id);
    let tempTotal = temporal.length;
    this.setState({
      horario: temporal,
      total: tempTotal,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Materia eliminada",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  buscar = (materia) => {
    let existe = this.state.horario.some((m) => m.id === materia.id);
    return existe;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-components">
          <Materias
            materias={this.state.materias}
            agregar={this.agregar}
            buscar={this.buscar}
          />
          <Horario
            total={this.state.total}
            horario={this.state.horario}
            eliminar={this.eliminar}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
