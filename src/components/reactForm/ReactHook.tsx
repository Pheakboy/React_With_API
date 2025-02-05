import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type PropsType = {
  email: string;
  password: string;
};

const ReactHook = () => {
  const form = useForm<PropsType>({
    defaultValues: {
        email: "example@gamil.com"
    }
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const onSubmit: SubmitHandler<PropsType> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "Email is already token",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 space-y-4"
    >
        <h1 className="text-white text-2xl font-medium shadow-md hover:text-gray-300  ">L O G I N</h1>
      <input
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          },
          // pattern: {
          //     value:  /.+@gmail\.com$/ ,
          //     message: "Email must be in format example@gmail.com"
          // }
        })}
        type="text"
        placeholder="Email"
        className="w-80 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      {errors.email && (
        <div className="text-red-500 text-sm mt-1 italic">
          {errors.email.message}
        </div>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be more than 8 character",
          },
        })}
        type="password"
        placeholder="Password"
        className="w-80 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      {errors.password && (
        <div className="text-red-500 text-sm mt-1 italic">
          {errors.password.message}
        </div>
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-80 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        {isSubmitting ? "Loading" : "Submit"}
      </button>
      <DevTool control={control} />
      {errors.root && (
        <div className="text-red-500 text-sm mt-1 italic">
          {errors.root.message}
        </div>
      )}
    </form>
  );
};

export default ReactHook;
