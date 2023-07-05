interface Props {
  login: boolean;
  inputs: {
    email: string;
    username: string;
    name: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({ login, inputs, handleInputChange }: Props) {
  return (
    <div>
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
            type="email"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="Username"
            value={inputs.username}
            onChange={handleInputChange}
            name="email"
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
    </div>
  );
}
