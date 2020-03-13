import React from "react";
import classnames from "classnames";
import api from "../services/api"

import "./c.css";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Container,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      vertical: 0,
      alimentos: ["Carne", "Leite", "Feijão", "Arroz", "Farinha", "Batata", "Tomate"],
      alimentos2: ["Pão: francês ou de fôrma", "Café em Pó", "Frutas: Banana", "Açúcar", "Óleo ou Banha", "Manteiga"],
      btn: "disabled",
      obj: {
        user: "",
        cesta: {
          alimentos: [
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ]
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
            },
            {
              variedade: [
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                },
                {
                  marca: "", preco: 0,
                  quantidade: {
                    valor: 0,
                    unidade: "Kg"
                  }
                }
              ],
              quantidade: {
                valor: 0,
                unidade: "Kg"
              }
            }
          ]
        },
        data: Date
      },
      type: [],
      marcas: [[], [], [], [], [], [], [], [], [], [], [], [], []]
    };
  }
  componentWillMount() {
    let type = this.state.type
    let status = this.state.status
    for (let i = 0; i < 13; i++) {
      status.push("neutro")
      type.push(["select", "select", "select", "select", "select"])
    }
    this.setState({ obj: { ...this.state.obj, data: new Date() } })
  }
  async componentDidMount() {
    this.getMarcas()
    this.setState({
      obj: {
        ...this.state.obj, user: (JSON.parse(await localStorage.getItem('user')))._id
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.vertical != this.state.vertical) {
      let alimento = this.state.obj.cesta.alimentos[prevState.vertical]
      let status = this.state.status
      alimento.variedade.map(e => {
        if (e.marca != "" || e.preco != 0 || e.quantidade.valor != 0 || e.quantidade.unidade != "") {
          status[prevState.vertical] = "sucesso"
        } else {
          status[prevState.vertical] = "cuidado"
        }
      })
      let controleBtn = true
      status.map(e => { if (e == "cuidado" || e == "neutro") { controleBtn = false; return } })
      if (controleBtn) { this.setState({ btn: "" }) }
      else { this.setState({ btn: "disabled" }) }
      this.setState({ status })
    }
  }

  getMarcas = async () => {
    await api.get("marcas", {
      headers:
        { Authorization: 'Bearer ' + localStorage.getItem('token') }
    }).then((resp) => {
      this.setState({ marcas: resp.data.marcas })
      let obj = this.state.obj
      let marcas = this.state.marcas
      obj.cesta.alimentos.map((a, ia) => {
        a.variedade.map((v, iv) => (v.marca = marcas[ia][iv]))
        marcas[ia].splice(0, 5)
      })
      let type = this.state.type
      marcas.map((c, i) => {
        if (c.length == 0) {
          type[i] = ["text", "text", "text", "text", "text"]
        }
      })
      this.setState({ marcas, obj, type })
    }).catch((erro) => {
      console.log(erro);
      let type = this.state.type
      for (let i = 0; i < type.length; i++) {
        for (let ii = 0; ii < type[i].length; ii++) {
          type[i][ii] = "text"
        }
      }
      this.setState({ type })
    }
    )
  }
  vetor = (v, i, e) => {
    let a = this.state[v].slice();
    a[i] = e;
    this.setState({ [v]: a });
  }
  variedade = (p) => {
    let rows = []
    for (let v = 0; v < 5; v++) {
      rows.push(
        <div className="form-row justify-content-center">
          <Input className="col-md-4 text-muted" value={this.state.obj.cesta.alimentos[p].variedade[v].marca} type={this.state.type[p][v]}
            style={{ margin: 10 }} placeholder="marca"
            onInput={(e) => {
              let obj = this.state.obj;
              let marcas = this.state.marcas
              if (this.state.type[p][v] == "select") {
                marcas[p].push(obj.cesta.alimentos[p].variedade[v].marca)
                marcas[p].splice(marcas[p].indexOf(e.target.value), 1)
              }
              obj.cesta.alimentos[p].variedade[v].marca = e.target.value
              this.setState({ obj, marcas })
            }}>
            <option>{this.state.obj.cesta.alimentos[p].variedade[v].marca}</option>
            {this.state.marcas[p].map(e => (<option>{e}</option>))}
          </Input>
          <Button color="info" size="sm" style={{ marginRight: 30 }} onClick={(e) => {
            let type = this.state.type;
            type[p][v] = "text"; this.setState({ type })
            let obj = this.state.obj;
            obj.cesta.alimentos[p].variedade[v].marca = ""
            this.setState({ obj })
          }} >
            <i className="tim-icons icon-simple-add"></i>
          </Button>
          <Input className="col-md-3" type="number" style={{ margin: 10 }} placeholder="Preço (Com ' . ' se necessário)"
            onInput={(e) => {
              let obj = this.state.obj;
              obj.cesta.alimentos[p].variedade[v].preco = e.target.value
              this.setState({ obj })
            }} />
          <Input className="col-md-1 text-muted" type="number"
            style={{ margin: 10 }} placeholder="Quantidade"
            onInput={(e) => {
              let obj = this.state.obj;
              obj.cesta.alimentos[p].variedade[v].quantidade.valor = e.target.value
              this.setState({ obj })
            }} />
          <Input className="col-md-1 text-muted" type="select"
            style={{ margin: 10 }} placeholder="Unidade de Grandeza"
            onInput={(e) => {
              let obj = this.state.obj;
              obj.cesta.alimentos[p].variedade[v].quantidade.unidade = e.target.value
              this.setState({ obj })
            }}>
            <option>kg</option>
            <option>g</option>
            <option>L</option>
            <option>ml</option>
            <option>u</option>
          </Input>
        </div>
      )
    }
    return rows
  }
  criar = async () => {
    await api.post('Cotacao', this.state.obj,
      { headers: { Authorization: 'Bearer ' + await localStorage.getItem('token') } })
      .then((response) => {
        //this.props.history.push("/home") 
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      })
  }
  btnVoltar = () => { this.props.history.push("/") }
  getData = (mes) => {
    var arrayMes = new Array(12);
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";
    if (mes) {
      return (arrayMes.indexOf(mes))
    }
    return arrayMes
  }
  optionMes = () => {
    let mes = this.getData()
    let m = mes[this.state.obj.data.getUTCMonth()]
    mes.splice(this.state.obj.data.getUTCMonth(), 1)
    mes.unshift(m)
    return mes
  }
  render() {
    return (
      <Container className="section text-center">
        <Row><Col>cumida</Col><Col>Campos a serem informados</Col></Row>
        <Row className="justify-content-md-center">
          <Col md="4">
            <Nav className="nav-pills-info flex-column" pills>
              <Row>
                <Col>
                  {Object.keys(this.state.alimentos).map((i) => (
                    <NavItem>
                      <NavLink
                        className={classnames(this.state.status[i], { active: this.state.vertical == i })}
                        onClick={e => this.setState({ vertical: i })}
                      >
                        {this.state.alimentos[i]}
                      </NavLink>
                    </NavItem>
                  ))}
                </Col>
                <Col>
                  {Object.keys(this.state.alimentos2).map((i) => (
                    <NavItem>
                      <NavLink
                        className={classnames(this.state.status[(parseInt(i) + 7)], { active: this.state.vertical == (parseInt(i) + 7) })}
                        onClick={e => this.setState({ vertical: (parseInt(i) + 7) })}
                      >
                        {this.state.alimentos2[i]}
                      </NavLink>
                    </NavItem>
                  ))}
                </Col>
              </Row>
            </Nav>
          </Col>
          <Col md="8">
            <TabContent activeTab={"vertical" + this.state.vertical}>
              {Object.keys([].concat(this.state.alimentos, this.state.alimentos2)).map((i) => (
                <TabPane tabId={"vertical" + i}>
                  {this.variedade(i).map(m => (m))}
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
        <Row>
          <Row className="col-md-4">
            <Col>
              <Input className="text-muted" type="select" value={this.getData()[this.state.obj.data.getUTCMonth()]} 
              onInput={(e) => this.setState({
                obj: {
                  ...this.state.obj,
                  data: new Date(this.state.obj.data.getUTCFullYear(), this.getData(e.target.value))
                }
              })}>
                {this.optionMes().map(m => (<option>{m}</option>))}
              </Input>
            </Col>
            <Col>
              <Input className="text-muted" type="number" onInput={(e) => {
                if (e.target.value.length == 4) {
                  this.setState({
                    obj: {
                      ...this.state.obj,
                      data: new Date(e.target.value, this.state.obj.data.getUTCMonth())
                    }
                  })
                }
              }}
              />
            </Col>
          </Row>
          <Col>
            <Button onClick={this.criar} disabled={this.state.btn} color="primary">Criar</Button>
          </Col>
          <Button onClick={this.btnVoltar} >Voltar</Button>
        </Row>
      </Container>
    );
  }
}

export default Navs;