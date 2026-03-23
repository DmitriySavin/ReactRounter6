import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
        neque. Consequuntur esse exercitationem voluptatum obcaecati impedit, et
        quae cumque provident!
      </p>
      <button
        type="button"
        onClick={() =>
          navigate("/about", {
            state: { userName: "Mike", age: 25 },
          })
        }
      >
        Перейти на About з данними користувача
      </button>
    </>
  );
};
