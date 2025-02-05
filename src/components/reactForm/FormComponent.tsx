import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormData = {
  username: string;
  email: string;
  channel: string;
};

let renderForm = 0;

const FormComponent = () => {
  const form = useForm<FormData>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  renderForm++;

  const onSubmit = (data: FormData) => {
    console.log("Form submited:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 rounded-md shadow-md">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-xl font-bold text-center text-blue-600 mb-6">
          Test{renderForm / 2}
        </h1>
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Registration Form
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-red-500 text-sm mt-1 italic">
              {errors.username?.message}
            </p>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue! === "admin@example.com" ||
                      "Enter different email address"
                    );
                  },
                  notBlackList: (fieldValue) => {
                    return (
                      fieldValue !== "baddomain.com" || "Enter different domain"
                    );
                  },
                },
              })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-red-500 text-sm mt-1 italic">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <label
              htmlFor="channel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Channel:
            </label>
            <input
              type="text"
              id="channel"
              {...register("channel", {
                required: "Channel is required",
              })}
              placeholder="Enter your channel name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-red-500 text-sm mt-1 italic">
              {errors.channel?.message}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      <p className="flex justify-center items-center my-5 text-white">UserName: test@gmail.com</p>
      <p className="flex justify-center items-center  text-white">Passwor: 1234</p>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default FormComponent;
