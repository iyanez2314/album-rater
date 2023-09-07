interface Props {
  login: boolean;
  inputs: {
    email: string;
    username: string;
    name: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthInput({
  login,
  inputs,
  handleInputChange,
  handleSubmit,
}: Props) {
  const renderContent = (signInContent: string, signUpContent: string) => {
    return login ? signInContent : signUpContent;
  };
  return (
    <form onSubmit={handleSubmit}>
      {login ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="John Doe"
            value={inputs.name}
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="username"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="Username"
            value={inputs.username}
            onChange={handleInputChange}
            name="username"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="bg-white border rounded p-2 py-3 w-full"
          placeholder="JohnDoe@gmail.com"
          value={inputs.email}
          onChange={handleInputChange}
          name="email"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="bg-white border rounded p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInputChange}
          name="password"
        />
      </div>
      <button
        type="submit"
        className="uppercase bg-[#84A59D] text-white p-3 rounded text-sm mb-5"
      >
        {renderContent("Login", "Create Account")}
      </button>
    </form>
  );
}
