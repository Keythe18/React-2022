
const InputText = React.forwardRef((props, ref) =>(
<input type="text" placeholder="Bojour" ref={ref}/>
));

const inputRef= React.createRef();

class App extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        console.log(inputRef.current.value);
    };

    render() {
        return (
            <div>
                <form onSubmit= { e => this.handleSubmit(e)}>
                    <InputText ref={inputRef}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

/**
 * Dans cet exemple , on a un composant InputText qui a un enfant comme champs de saisie.
 * Pour passer ou bien faire suivre la ref vers le bas à l'entrée on crée d'abord une ref et on la passe ensuite vers le bas à <InputText ref={inputRef}/>. Ensuite React transmet la ref à la fonction forwardRef en tant que deuxième argument. 
 * Ensuite on transmet cet argument ref à <input ref = {ref}> . 
 * Maintenant la valeur du noeud DOM est accessible à inputRef.current.
 */