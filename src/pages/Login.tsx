import { loadStuff } from "./auth";

const {type} = await loadStuff();

export function Login() {
 
  return (
    <div>
      <p>
        {type}
      </p>
      <button>Login</button>
    </div>
  );
}