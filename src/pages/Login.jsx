import "../index.css";

function Validacao() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido!");
      return;
    }

    navigate("/home");
  }
}
//fazer verificação de email e senha, se estiverem vazios ou email sem @, mostrar alerta e fazer o botão

export default function Login() {
  return (
    <>
      <div className="p-10 flex items-center justify-center bg-gray-200 min-h-screen flex-col gap-4 rounded-lg shadow-lg">
        <h1 className=" text-3xl font-bold">Portal de Pesquisa</h1>
          <p>Iniciação Cientifíca Acadêmica</p>
        <form action="/login" method="POST" className="flex flex-col gap-4 bg-white h-full w-96 p-6 rounded-lg shadow-md">
          <label htmlFor="username" >Nome Completo:</label>
          <input type="text" className="bg-gray-200 h-10 rounded-lg" placeholder="  Digite seu nome completo" />
          <label htmlFor="email" placeholder="Digite seu email"  >Email:</label>
          <input type="email" className="bg-gray-200 h-10 rounded-lg" placeholder="   email@universidade.edu" />
          <label htmlFor="universidade">Universidade:</label>
          <input type="text" className="bg-gray-200 h-10 rounded-lg " placeholder="  Nome da Instituição" />
          <label htmlFor="curso">Curso:</label>
          <input type="text" className="bg-gray-200 h-10 rounded-lg" placeholder="  Ex: Engenharia de Software" />
          <label htmlFor="password" placeholder="Digite sua senha"  >Senha:</label>
          <input type="password" className="bg-gray-200 h-10 rounded-lg" placeholder="" />

          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Entrar</button>
        </form>
      </div>
    </>
  );
}


