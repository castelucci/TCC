import React from "react";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


import { estaAutenticado } from "../auth"
import api from "../services/api"
class Signup extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    token: "",
    adm: false
  };
  componentWillMount() { this.teste() }

  teste = async () => {
    if (!(await estaAutenticado())) {
      this.props.history.push("/")
    }
  }

  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  alterar = async (vetor, campo, erro) => {
    if (erro) {
      vetor.forEach(element => {
        if (new RegExp(element.toLowerCase()).test(erro)) {
          element = campo + element
          this.setState({ [element]: "has-danger" })
        }
      })
      return
    }
    vetor.forEach(element => {
      element = campo + element
      this.setState({ [element]: "has-success" })
    })
  }
  cadastrar = async () => {
    await api.post('user', {
      email: this.state.email,
      senha: this.state.senha, nome: this.state.nome, adm: this.state.adm
    },
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then((response) => {
        this.setState({ corP: "text-success", mensagem: "Novo Usuario Criado" })
        this.alterar(["Nome", "Email", "Senha"], "input")
      })
      .catch((error) => {
        this.setState({ corP: "text-danger" });
        let erro;
        error.response.data ? erro = error.response.data.toLowerCase() :
          erro = error.response.data.error.toLowerCase()

        this.alterar(["Nome", "Email", "Senha"], "input", erro)

        this.setState({ mensagem: erro })
      })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: this.state.squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: this.state.squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Regitrar</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.fullNameFocus
                          }), this.state.inputNome}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nome Completo"
                            type="text"
                            onFocus={e =>
                              this.setState({ fullNameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ fullNameFocus: false })
                            }
                            onInput={(e) => this.setState({ nome: e.target.value })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.emailFocus
                          }), this.state.inputEmail}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                            onInput={(e) => this.setState({ email: e.target.value })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.passwordFocus
                          }), this.state.inputSenha}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Senha"
                            type="password"
                            onFocus={e =>
                              this.setState({ passwordFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ passwordFocus: false })
                            }
                            onInput={(e) => this.setState({ senha: e.target.value })}

                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox"
                              value={this.state.adm}
                              onInput={() => this.setState({ adm: !this.state.adm })}
                            />
                            <span className="form-check-sign" />Usuario Administrador{" "}
                          </Label>
                        </FormGroup>
                        <p className={this.state.corP}>{this.state.mensagem}</p>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button onClick={this.cadastrar} className="btn-round" color="primary" size="lg">
                        Criar
                        </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              {/*<div className="register-bg" />*/}
              <div
                className="square square-1"
                id="square1"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: this.state.squares1to6 }}
              />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;