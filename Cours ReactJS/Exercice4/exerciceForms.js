import React from "react";

const reglesValidation = {
  requis: (valeur) => valeur !== null && valeur !== undefined && valeur !== "",
  tel: (tel) => {
    const regExp = /^(\+\d{1,2}\s)?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{d}$/;
    return regExp.test(String(tel));
  },
  email: (email) => {
    const regExp =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    return regExp.test(String(email).toLowerCase());
  },
};

class FormValidator extends React.Component {
  constructor(props) {
    super(props);
    this.reglesValidationsForm = {
      nom: [
        {
          rule: reglesValidation.requis,
          message: " Le nom est requis",
        },
      ],
      prenom: [
        {
          rule: reglesValidation.requis,
          message: " Le prénom est requis",
        },
      ],
      tel: [
        {
          rule: reglesValidation.tel,
          message: " Le numéro de téléphone n'est pas valide",
        },
      ],
      email: [
        {
          rule: reglesValidation.email,
          message: " Votre Email n'est pas Valide",
        },
        {
          rule: reglesValidation.requis,
          message: " L'email est requis",
        },
      ],
    };
    this.fields = ["nom", "prenom", "tel", "email"];
    this.state = {
      nom: { value: "", isTouched: false, isValid: false, errors: [] },
      prenom: { value: "", isTouched: false, isValid: false, errors: [] },
      tel: { value: "", isTouched: false, isValid: false, errors: [] },
      email: { value: "", isTouched: false, isValid: false, errors: [] },
    };
  }
  fieldChange = (event) => {
    let newState = { ...this.state };
    newState[event.target.name].value = event.target.value;
    this.validerForm(newState);
  };
  setTouched = (event) => {
    let field = { ...this.state[event.target.name], isTouched: true };
    this.setState({ [event.target.name]: { ...field } });
  };

  validerForm = (newState) => {
    newState = newState || { ...this.state };
    this.fields.forEach((fieldName) => {
      let newField = newState[fieldName];
      newField.errors = [];
      newField.isValid = true;
      this.reglesValidationsForm[fieldName].forEach((vRule) => {
        if (!vRule.rule(this.state[fieldName].value)) {
          newField.errors.push(vRule.message);
          newField.isValid = false;
        }
        newField[fieldName] = newField;
      });
    });
    this.setState(newState);
  };
  componentWillMount() {
    this.validerForm();
  }
  render() {
    const { nom, prenom, tel, email } = this.state;
    return (
      <form>
        <div className="field-group">
          <label>Nom</label>
          <input
            className={nom.isTouched && !nom.isValid ? "has-error" : ""}
            name="nom"
            value={this.state.nom.value}
            onChange={this.fieldChange}
            onBlur={this.setTouched}
          />
          {nom.isTouched &&
            nom.errors.length > 0 &&
            nom.errors.map((err, i) => (
              <span key={i} className="error-message">
                {err}
              </span>
            ))}
        </div>
        <div className="field-group">
          <label>Prénom</label>
          <input
            className={prenom.isTouched && !prenom.isValid ? "has-error" : ""}
            name="prenom"
            value={this.state.prenom.value}
            onChange={this.fieldChange}
            onBlur={this.setTouched}
          />
          {prenom.isTouched &&
            prenom.errors.length > 0 &&
            prenom.errors.map((err, i) => (
              <span key={i} className="error-message">
                {err}
              </span>
            ))}
        </div>
        <div className="field-group">
          <label>Téléphone</label>
          <input
            className={tel.isTouched && !tel.isValid ? "has-error" : ""}
            name="tel"
            value={this.state.tel.value}
            onChange={this.fieldChange}
            onBlur={this.setTouched}
          />
          {tel.isTouched &&
            tel.errors.length > 0 &&
            tel.errors.map((err, i) => (
              <span key={i} className="error-message">
                {err}
              </span>
            ))}
        </div>
        <div className="field-group">
          <label>Email</label>
          <input
            className={email.isTouched && !email.isValid ? "has-error" : ""}
            name="email"
            value={this.state.email.value}
            onChange={this.fieldChange}
            onBlur={this.setTouched}
          />
          {email.isTouched &&
            email.errors.length > 0 &&
            email.errors.map((err, i) => (
              <span key={i} className="error-message">
                {err}
              </span>
            ))}
        </div>
      </form>
    );
  }
}
export default FormValidator;
